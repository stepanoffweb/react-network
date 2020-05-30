import React from 'react'
import s from './Post.module.css'

export default function Post({id, message, onClick, count, pic}) {

  return (
    <div className={s.post} data-id={id} data-count={count} >
      {/*{console.log(onClick)}*/}

      <img src={pic} alt="avatar"/>
      <h5>Another Post</h5>
      <p>{message}</p>
      <button  onClick={onClick} >Like {count}</button>

    </div>
  )
}
