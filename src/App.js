import React from 'react';
import {Route, withRouter} from 'react-router-dom'
import {connect} from 'react-redux'
import {compose} from 'redux'

import Navbar from './components/Navbar/navbar';
import HeaderContainer from './components/Header/HeaderContainer';
import DialogsContainer from './components/Dialogs/DialogsContainer';
import ProfileContainer from './components/Profile/ProfileContainer';
import LoginContainer from './components/Login/LoginContainer';
import Settings from './components/Settings/Settings';
import UsersContainer from './components/Users/UsersContainer';
import News from './components/News/News';
import Music from './components/Music/Music';
import styles from './App.module.css';
import {initialiseApp} from './redux/app-reducer'
import Preloader from './components/common/Preloader/Preloader'


class App extends React.Component {

  componentDidMount() {
        this.props.initialiseApp()
  }

  render() {
    if (!this.props.initialized) {
      return <Preloader />
    }

    return (
    <div className={styles.appWrapper}>
        <HeaderContainer />
        <Navbar />
        <div className="appWrapperContent">
           <Route path='/profile/:userId?' render={() => <ProfileContainer  />} />
           <Route path='/dialogs' render={() => <DialogsContainer  />} />
           <Route path='/users' render={() => <UsersContainer />} />
           <Route path='/login' render={() => <LoginContainer />} />

           <Route path='/music' component={Music} />
           <Route path='/news' component={News} />
           <Route path='/settings' component={Settings} />
        </div>
      </div>
     );
  }
}

const mapStateToProps = (state) => ({
  initialized: state.app.initialized,
})

export default  compose(
  withRouter,
  connect(mapStateToProps, {initialiseApp}))(App)
