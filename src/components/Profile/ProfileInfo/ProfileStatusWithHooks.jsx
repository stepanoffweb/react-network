import React, {useState, useEffect} from 'react'

import s from './ProfileInfo.module.css'

const ProfileStatusWithHooks = (props) => {

    let [editMode, setEditMode] = useState(false)
    let [status, setStatus] = useState(props.status)
    useEffect(() => {
        setStatus(props.status)
    }, [props.status]) // нормальное решение вместо 18-й строки

    const activateEditMode = () => setEditMode(true)
    const statusChange = e => setStatus(e.target.value)

    const deactivateEditMode = () => {
        setEditMode(false)
        // setStatus(status) // типа не изменился state и родительский ProfileContainer не перерисуется -> не вызовет с сервера новый status и не получит id из withRouter.props.match.params
        props.updateStatus(status)
    }

    return <>
        {!editMode &&
            <div className={s.statusText}>
                <p onDoubleClick={activateEditMode} >Status: {props.status} hooks</p>
            </div>}

        {editMode &&
            <div className={s.statusInput}>
                <input autoFocus={true} onChange={statusChange} onBlur={deactivateEditMode}  />
            </div>}
    </>
}

export default ProfileStatusWithHooks
