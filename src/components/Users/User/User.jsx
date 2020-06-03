import React from 'react'
import s from '../Users.module.css'
import {NavLink} from 'react-router-dom'

const User = ({userId, name, status, country, city, followed, pic, handleFollow, handleUnfollow, followingInProgress}) => {

    return (
        <div className={s.userWrapper} data-id={userId} >
            <div className={s.userAction}>
                <NavLink to={`/profile/${userId}`}  >
                <img className={s.img} src={pic ? pic : 'https://www.adobe.com/content/dam/cc/us/en/creativecloud/photography/discover/portrait-photography/CODERED_B1_portrait_photography-P4a_438x447.jpg.img.jpg'} alt="avatar"/>
                </NavLink>
                {followed
                    ? <button disabled={followingInProgress.some(id => id === userId)} className={s.btn} onClick={() => handleUnfollow(userId)} >Unfollow</button>
                    : <button disabled={followingInProgress.some(id => id === userId)} className={s.btn} onClick={() => handleFollow(userId)} >Follow</button> }
            </div>
            <div className={s.userInfo}>
                <div className={s.name}>
                    <span className={s.username}>{name}</span>
                    <span className={s.status}>{status}</span>
                </div>
                <div className={s.location}>
                    <span className={s.country}>{country},</span>
                    <span className={s.city}>{city}</span>
                </div>
            </div>
        </div>

    )
}

export default User;
