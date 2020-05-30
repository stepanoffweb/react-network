import {usersAPI} from '../api/api'


const FOLLOW = 'FOLLOW'
const UNFOLLOW = 'UNFOLLOW'
const SET_USERS = 'ADD_USERS'
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE'
const SET_TOTAL_COUNT = 'SET_TOTAL_COUNT'
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING'
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS'

export const followSuccess = (userId) => ({type: FOLLOW, userId })
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId })
export const SetUsers = (users) => ({type: SET_USERS , users})
export const SetCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE , currentPage})
export const SetTotalCount = (totalUsersCount) => ({type: SET_TOTAL_COUNT, totalUsersCount})
export const SetFetching = (isFetching) => ({type: TOGGLE_IS_FETCHING , isFetching})
export const SetFollowingProgress = (isFetching, userId) => ({type: TOGGLE_IS_FOLLOWING_PROGRESS , isFetching, userId})

export const getUsersData = (currentPage, pageSize) => (dispatch) => {
  dispatch(SetFetching(true))
  dispatch(SetCurrentPage(currentPage))
    // debugger
      usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(SetUsers(data.items))
        dispatch(SetTotalCount(data.totalCount))
        dispatch(SetFetching(false))
      })
}
export const Follow = (id) => (dispatch) => {
    dispatch(SetFollowingProgress(true, id))
    usersAPI.postFollow(id).then(response => {
        if(response.data.resultCode === 0){
          dispatch(followSuccess(id))}
        dispatch(SetFollowingProgress(false, id))
        })
}

export const Unfollow = (id) => (dispatch) => {
    dispatch(SetFollowingProgress(true, id))
    usersAPI.deleteFollow(id).then(response => {
          if(response.data.resultCode === 0){
            dispatch(unfollowSuccess(id))}
          dispatch(SetFollowingProgress(false, id))
        })
}

let initialState = {
  users: [],
  pageSize: 20,
  totalUsersCount: 0,
  currentPage: 2,
  isFetching: false,
  followingInProgress: [],
}

const usersReducer = (state = initialState, action) => {
  // console.log(state);//{users: Array(0)} users: []

  switch(action.type) {
    case FOLLOW :
      return {...state,
        users: state.users.map(user => (user.id === action.userId) ? {...user, followed: true} : user)
      }
    case UNFOLLOW:
      return {...state,
                // users: state.users.map((user) => (user.id === action.userId) ? {...user, followed: false} : user)

        users: state.users.map((user) => {
          if (user.id === action.userId) {
            return {...user, followed: false}
          }
          return user
        })
      }
    case SET_USERS:
      return {...state, users: action.users}
    case SET_CURRENT_PAGE:
      return {...state, currentPage: action.currentPage}
    case SET_TOTAL_COUNT:
      return {...state, totalUsersCount: action.totalUsersCount}
    case TOGGLE_IS_FETCHING:
      return {...state, isFetching: action.isFetching}
    case TOGGLE_IS_FOLLOWING_PROGRESS:
          return {...state,
            followingInProgress: action.isFetching
            ? [...state.followingInProgress, action.userId]
            : state.followingInProgress.filter(id => id != action.userId)
          }

    default:
      return state
  }
}

export default usersReducer
