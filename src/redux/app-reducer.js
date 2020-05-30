// common app settings
import {stopSubmit} from 'redux-form'

import {usersAPI, authAPI} from '../api/api'
import {getAuthData} from './auth-reducer'

const SET_INITIALIZED = 'SET_INITIALIZED'

export const initializedSuccess = ()  => ({type: SET_INITIALIZED})

export const initialiseApp = () => (dispatch) => {
  let promise =  dispatch(getAuthData())

  promise.then(() => {
    dispatch(initializedSuccess())
  })

}

let initialState = {
  initialized: false
}

const appReducer = (state = initialState, action) => {

  switch(action.type) {
      case SET_INITIALIZED :
        return {...state,
          initialized: true,
        }

      default:
        return state
  }
}

export default appReducer
