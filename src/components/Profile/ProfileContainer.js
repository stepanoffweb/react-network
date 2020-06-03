import React from 'react';
import {connect} from 'react-redux'
import {withRouter} from 'react-router-dom'
import {compose} from 'redux'

import Profile from './profile'
import {getUserProfile, getStatus, updateStatus, pushPhoto} from '../../redux/profile-reducer'
import {withAuthRedirect} from '../../hoc/withAuthRedirect'

class ProfileContainer extends React.Component {

  refreshProfile() {
    let userId = this.props.match.params.userId || this.props.myId
    if (!userId) {this.props.history.push('/login')} //избыточно для примера (уже обернуто withAuthRedirect)

    this.props.getUserProfile(userId)
    this.props.getStatus(userId)
  }

  componentDidMount() {
     this.refreshProfile()
  }

  componentDidUpdate(prevProps, prevState) {
    (this.props.match.params.userId !== prevProps.match.params.userId ) &&
     this.refreshProfile()
  }

  render() {

    return (
      <Profile {...this.props} profile={this.props.profile}
                isOwner={!this.props.match.params.userId} />
    );
  }
}

const mapStateToProps = (state) => ({
  profile: state.profilePage.profile,
  status: state.profilePage.status,
  myId: state.auth.id,
})

export default compose(
  connect(mapStateToProps, {getUserProfile, getStatus, updateStatus, pushPhoto}),
  withRouter,
  withAuthRedirect
  )(ProfileContainer)
