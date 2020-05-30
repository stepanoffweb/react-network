import React from 'react'
import s from './Users.module.css'
import User from './User/User'

const Users = (props) => {

    let pagesCount = Math.ceil(props.totalUsersCount / props.pageSize)
    let pages = []
      let i = 1
      while(i <= pagesCount) {
        pages.push(i)
        i++
      }
      // if (this.props.isFetching) return <Preloader />
      // let followingInProgress = this.props.followingInProgress

    return <>
        <div className={s.usersWrapper}>
        {pages.map(p => <span key={p} className={`${s.pagination} ${props.currentPage === p ? s.selected : ''}`}
          onClick={() => props.handleClickPage(p)} >{p}</span>)}
        {props.users.map(({id, name, status, country, city, followed, photos:{small}}) =>
          <User key={`${id}-${status}`} userId={id} name={name} status={status} country={country} city={city} followed={followed} pic={small}
            followingInProgress={props.followingInProgress}
            handleFollow={() => props.handleFollow(id)}
            handleUnfollow={() => props.handleUnfollow(id)} /> )}
        <button className={s.show}>Show More</button>
        </div>
      </>
}

export default Users;
