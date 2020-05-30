import React from 'react'

import s from './ProfileInfo.module.css'


export default class ProfileStatus extends React.Component {
    statusInputRef = React.createRef()

    state = {
        editMode: false,
        status: this.props.status
    }

    activateEditMode = () => { // method as arrow function
        this.setState({
            editMode: true
        })
    }
    deactivateEditMode() { // oldschool method with bind in constructor or when it invokes
        this.setState({
            editMode: false
        })
        this.props.updateStatus(this.statusInputRef.current.value)
    }
    componentDidUpdate(prevProps, prevState) {
        if (prevProps.status !== this.props.status) { //если статус не успел прийти пока грузится профиль (в локальном state его не будет -> нужно синхронизировать с глобальным) а если через status: () => setState(this.props.Status)
            this.setState({
                status: this.props.status
            })
        }
    }

    render() {
        // console.log('render');
        return <>
            {!this.state.editMode &&
                <div className={s.statusText}>
                    <p onDoubleClick={this.activateEditMode} >Status: {this.state.status}</p>
                </div>}

            {this.state.editMode &&
                <div className={s.statusInput}>
                    <input ref={this.statusInputRef} autoFocus={true} onBlur={this.deactivateEditMode.bind(this)} defaultValue={this.props.status} />
                </div>}
        </>
    }
}
