import React from 'react'
import {connect} from 'react-redux'

import Login from './Login'
import {setLogin} from '../../redux/auth-reducer.js'

function LoginContainer(props) {
  // console.log(props);

  let getAuthData = (login, pass, logMemo) => {
    props.setLogin(login, pass, logMemo)
  }
    return  <Login {...props} getAuthData={getAuthData} />
  }

  const mapStateToProps = (state) => ({
      isAuth: state.auth.isAuth
    })

export default connect(mapStateToProps, {setLogin})(LoginContainer)
