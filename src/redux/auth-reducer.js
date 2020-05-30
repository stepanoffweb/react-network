import {usersAPI, authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

export const SetUserAuthData = (id, email, login, isAuth)  => ({type: SET_USER_AUTH_DATA, payload: {id, email, login, isAuth}})

export const getAuthData = () => (dispatch) => {
    return authAPI.getAuth().then(response => {
        if(response.data.resultCode === 0){
            let {id, email, login} = response.data.data
            dispatch(SetUserAuthData(id, email, login, true))
        }
      })
}
export const setLogin = (login, pass, logMemo) => (dispatch) => {
    authAPI.setLogin(login, pass, logMemo).then(response => {
        if(response.data.resultCode === 0){
            dispatch(getAuthData())
        } else {
          let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
          dispatch(stopSubmit('loginForm', {_error: message}))
        }
    })
}
export const setLogout = () => {
  return (dispatch) => {
    authAPI.setLogout().then(response => {
        if(response.data.resultCode === 0){
            dispatch(SetUserAuthData(null, null, null, false))
        }
    })
  }
}

let initialState = {
  id: 7243,
  login:  "ivanstepanov",
  email: "dovolnyi@inbox.ru",
  isAuth: false
}

const authReducer = (state = initialState, action) => {

  switch(action.type) {
      case SET_USER_AUTH_DATA :
        return {...state,
          ...action.payload,
        }

      default:
        return state
  }
}

export default authReducer
