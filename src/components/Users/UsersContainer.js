import React from 'react'
import {connect} from 'react-redux'
import {compose} from 'redux'

import Users from './Users'
import Preloader from '../common/Preloader/Preloader'
import {Follow, Unfollow, getUsersData} from '../../redux/users-reducer'
import {getPageSize, geTotalUsersCount, getCurrentPage, getIsFetching, geFollowingInProgress, getUsers} from '../../redux/users-selectors'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'


class UsersContainer extends React.Component {
  // state = {{Follow, Unfollow, SetUsers, SetTotalCount, SetFetching, SetFollowingProgress, users }} // this.props - конструктор невидим, но он - есть!
  componentDidMount() {
    this.props.getUsersData(this.props.currentPage, this.props.pageSize)
  }

  handleClickPage = (pageNumber) => {
    this.props.getUsersData(pageNumber, this.props.pageSize)
  }

  handleFollow = (id) => {
    this.props.Follow(id)
  }

  handleUnfollow = (id) => {
    this.props.Unfollow(id)
  }

  render() {

    return <>
      {this.props.isFetching ? <Preloader /> : null}
      <Users {...this.props}  handleUnfollow={this.handleUnfollow} handleFollow={this.handleFollow}
      handleClickPage={this.handleClickPage} />
    </>
  }
}

const mapStateToProps = (state) => ({     // console.log(state);// {profilePage: {…}, messagePage: {…}, usersPage: {…}}
    users: getUsers(state),
    pageSize: getPageSize(state),
    totalUsersCount: geTotalUsersCount(state),
    currentPage: getCurrentPage(state),
    isFetching: getIsFetching(state),
    followingInProgress: geFollowingInProgress(state),
})

export default compose (
    connect(mapStateToProps, {
        Follow,
        Unfollow,
        getUsersData
    }),
    // withAuthRedirect
    )(UsersContainer)

