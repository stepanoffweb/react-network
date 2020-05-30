import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import Profile from './profile'
import {getUserProfile, getStatus, updateStatus} from '../../redux/profile-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId || this.props.myId
    if (!userId) {this.props.history.push('/login')} //избыточно для примера (уже обернуто withAuthRedirect)

    this.props.getUserProfile(userId)
  // debugger
    this.props.getStatus(userId)
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile} /> //если импортнули еще где-то и передали дополнительные ...props
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myId: state.auth.id
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus}),
  withRouter,
  withAuthRedirect
  )(ProfileContainer)
