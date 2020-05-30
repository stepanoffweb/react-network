import React from 'react';

import MyPostsContainer from './MyPosts/MyPostsContainer'
import ProfileInfo from './ProfileInfo/ProfileInfo'
import style from './profile.module.css';


export default function Profile(props) {
    // console.log(props);
    // debugger

    return (
        <>
          <div className={style.content}>

            <ProfileInfo profile={props.profile} status={props.status} updateStatus={props.updateStatus} />
            <MyPostsContainer  />
          </div>
        </>
    )
}

