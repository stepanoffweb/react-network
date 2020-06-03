import React from 'react'

import s from './Users.module.css'
import User from './User/User'
import {Paginator} from '../common/Paginator/Paginator'

const Users = ({followingInProgress, handleFollow, handleUnfollow, totalUsersCount, pageSize, handleClickPage, currentPage, users, ...props }) => {


  return <div className={s.usersWrapper}>
      <Paginator totalUsersCount={totalUsersCount} pageSize={pageSize} handleClickPage={handleClickPage} currentPage={currentPage} />

        {users.map(({id, name, status, country, city, followed, photos:{small}}) =>
          <User key={`${id}-${status}`}
                userId={id} name={name} status={status} country={country}
                city={city} followed={followed} pic={small}
                followingInProgress={followingInProgress}
                handleFollow={() => handleFollow(id)}
                handleUnfollow={() => handleUnfollow(id)} /> )}

    </div>

}

export default Users;
