import { usersAPI, profileAPI } from '../api/api'

const ADD_POST = 'ADD_POST'
const ADD_LIKE = 'ADD_LIKE'
const SET_PROFILE = 'SET_PROFILE'
const SET_STATUS = 'SET_STATUS'
const DELETE_POST = 'DELETE_POST'
const SET_PFOTO_SUCCESS = 'SET_PFOTO_SUCCESS'

export const createActionAddPost = (id, postText) => ({type: ADD_POST, id, postText })
export const createActionDeletePost = (id) => ({type: DELETE_POST, id })
export const createActionAddLike = (id, likeCount)  => ({type: ADD_LIKE, id, likeCount })
export const SetUserProfile = (profile)  => ({type: SET_PROFILE, profile})
export const SetStatus = (status)  => ({type: SET_STATUS, status})
export const SetPhotoSuccess = (photos)  => ({type: SET_PFOTO_SUCCESS, photos})

export const getUserProfile = (id) => async (dispatch) => {
  let response = await usersAPI.getUserProfile(id)

  dispatch(SetUserProfile(response.data))
}

export const getStatus = (id) => async (dispatch) => {
  let response = await profileAPI.getStatus(id)

  dispatch(SetStatus(response.data))
}

export const updateStatus = (status) => async (dispatch) => {
  let response = await profileAPI.updateStatus(status)

  if(response.data.resultCode === 0)
    dispatch(SetStatus(status))
}

export const pushPhoto = (file) => async (dispatch) => {
  let response = await profileAPI.pushPhoto(file)

  if(response.data.resultCode === 0)
    dispatch(SetPhotoSuccess(response.data.data.photos))
}

let initialState = {
  posts: [
    {id: 0,message: "Hi, it's my first post!", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
    {id: 1,message: "You'r welcome, my friend!!!!", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
    {id: 2,message: "Ammmmm...", likeCount: 0, pic: 'https://www.fentybeauty.com/dw/image/v2/AAXW_PRD/on/demandware.static/-/Sites-itemmaster_FNT/default/dw60190d91/smear-mobile/42170_slick.jpg?sw=550'},
  ],
  profile: null, // чтобы первая отрисовка запустила Preloader
  status: 'Server is not available'
}

const profileReducer = (state = initialState, action) => {

  switch(action.type) {
      case ADD_POST :
        return {...state,
        posts: [...state.posts, {id: action.id, message: action.postText}]
        }
      case DELETE_POST :
        return {...state,
        posts: state.posts.filter(post => post.id != action.id)
        }

      case SET_PROFILE:
        return {...state,
          profile: action.profile
        }
      case SET_STATUS:
        return {...state,
          status: action.status || state.status
        }
      case ADD_LIKE:
        return {...state,
        posts: [...state.posts],
        // posts.map((post) => {post.id === action.id ? post.likeCount++ : ''})
        }
      case SET_PFOTO_SUCCESS:
        return {...state,
          profile: {...state.profile, photos: action.photos}
        }
      default:
        return state
  }
}

export default profileReducer
