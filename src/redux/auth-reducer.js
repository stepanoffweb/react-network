import {usersAPI, authAPI} from '../api/api'
import {stopSubmit} from 'redux-form'

const SET_USER_AUTH_DATA = 'SET_USER_AUTH_DATA'

export const SetUserAuthData = (id, email, login, isAuth)  => ({type: SET_USER_AUTH_DATA, payload: {id, email, login, isAuth}})

export const getAuthData = () => async (dispatch) => {
  let response = await authAPI.getAuth()

  if(response.data.resultCode === 0){
    let {id, email, login} = response.data.data
    dispatch(SetUserAuthData(id, email, login, true))
  }
}
export const setLogin = (login, pass, logMemo) => async (dispatch) => {
  let response = await authAPI.setLogin(login, pass, logMemo)

  if(response.data.resultCode === 0){
    dispatch(getAuthData())
  } else {
    let message = response.data.messages.length > 0 ? response.data.messages[0] : 'Some error'
    dispatch(stopSubmit('loginForm', {_error: message}))
  }
}
export const setLogout = () => async (dispatch) => {
  let response = await authAPI.setLogout()

  if(response.data.resultCode === 0){
      dispatch(SetUserAuthData(null, null, null, false))
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
