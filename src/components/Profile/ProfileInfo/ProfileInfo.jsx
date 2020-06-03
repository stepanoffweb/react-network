import React from 'react'

import s from './ProfileInfo.module.css'
import hero from './fireball_1200x226.jpg'
import Preloader from '../../common/Preloader/Preloader'
import ProfileStatusWithHooks from './ProfileStatusWithHooks'

export default function ProfileInfo({profile, status, updateStatus, pushPhoto, isOwner}) {

  let saveProfilePhoto = (e) => {
    pushPhoto(e.target.files[0])
  }
     if (!profile) return <Preloader />
    return (
        <div>
            <div>
                <img src={hero} alt="hero" className={s.hero} />
            </div>
            <div className={s.contentHead}>
              <img src={profile.photos.large ? profile.photos.large : "https://sun9-6.userapi.com/QqHBpjLe2yLFnKJ58RKzAm5Ha0JrcRpCI70M5A/HL3ROS3t4h0.jpg?ava=1"} alt="avatar" />
              {isOwner && <input type="file" onChange={saveProfilePhoto} />}
              <h5 className={s.descr}>About Me</h5>
              <p>My Name: {profile.fullName} </p>

            <ProfileStatusWithHooks status={status} updateStatus={updateStatus} />

              <p>Looking For A Job: {profile.lookingForAJob ? "AbsoFuckingLootely!!!!" : "Nope...I already have a GOOD one." } <br /> {profile.lookingForAJobDescription} </p>
            </div>
        </div>
    )
}
// {
//   "aboutMe": "...",
//   "contacts": {
//     "facebook": "facebook.com",
//     "website": null,
//     "vk": "vk.com/...",
//     "twitter": "https://twitter.com/@...",
//     "instagram": "instagra.com/...",
//     "youtube": null,
//     "github": "github.com",
//     "mainLink": null
//   },
//   "lookingForAJob": true,
//   "lookingForAJobDescription": "...",
//   "fullName": "...",
//   "userId": 7243,
//   "photos": {
//     "small": "https://social-network.samuraijs.com/activecontent/images/users/7243/user-small.jpg?v=0",
//     "large": "https://social-network.samuraijs.com/activecontent/images/users/7243/user.jpg?v=0"
//   }
// }
