import {usersAPI} from '../api/api'

import {updateObjectInArray} from '../utils/object-helpers'


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

export const getUsersData = (currentPage, pageSize) => async (dispatch) => {
  dispatch(SetFetching(true))
  dispatch(SetCurrentPage(currentPage))

  const data = await  usersAPI.getUsers(currentPage, pageSize)
  dispatch(SetUsers(data.items))
  dispatch(SetTotalCount(data.totalCount))
  dispatch(SetFetching(false))
}

export const followUnfollowChange = async (id, dispatch, apiMethod, actionCreator) => {
  dispatch(SetFollowingProgress(true, id))

  const response = await apiMethod(id)

  if(response.data.resultCode === 0){
    dispatch(actionCreator(id))}
    dispatch(SetFollowingProgress(false, id))
}

export const Follow = (id) => async (dispatch) => {
  followUnfollowChange(id, dispatch, usersAPI.postFollow.bind(usersAPI), followSuccess)
}

export const Unfollow = (id) => async (dispatch) => {

  followUnfollowChange(id, dispatch, usersAPI.deleteFollow.bind(usersAPI), unfollowSuccess)
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

  switch(action.type) {
    case FOLLOW :
      return {...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: true})
      }
    case UNFOLLOW:
      return {...state,
        users: updateObjectInArray(state.users, action.userId, "id", {followed: false})
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
