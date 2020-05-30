import React from 'react';
import {connect} from 'react-redux'

import Header from './header'
import {setLogout} from '../../redux/auth-reducer'

class HeaderContainer extends React.Component {

    render() {
        return (
            <Header {...this.props} />
        );
    }
}

const mapStateToProps = (state) => ({
    isAuth: state.auth.isAuth,
    id: state.auth.id,
    login: state.auth.login,
    email: state.auth.email
})

export default connect(mapStateToProps, {setLogout})(HeaderContainer)
