  import React from 'react'
import {Field, reduxForm} from 'redux-form'

import {required, maxLengthCreator} from '../../../utils/validators/validators.js'
import {Textarea} from '../../common/FormsControls/FormsControls.jsx'

import s from './MyPosts.module.css'
import Post from './Post/Post'

const maxLength50 = maxLengthCreator(10) //важно не вызывать внутри [...validate] в Field и даже не в PostForm!
let PostForm = (props) => {

  return    <form onSubmit={props.handleSubmit} >
      <div>
        <Field component={Textarea} placeholder="Write your message" name="text" id="post" cols="30" rows="5"
        validate={[required, maxLength50]} />
      </div>
      <div>
        <button >Add post</button>
      </div>
    </form>
}

PostForm = reduxForm({form: 'postform'})(PostForm)

export default function MyPosts({posts, callDispatchAddPost, callDispatchShowLetters, callDispatchAddLike, isAuth}) {

  const mySubmit = (formData) => {
    let id = Date.now();
    callDispatchAddPost(id, formData.text);
  }

  const onClick = (e) => {
    let likeCount = +e.target.parentNode.dataset.count
    let id = e.target.parentNode.dataset.id
    likeCount++
    callDispatchAddLike(id, likeCount)
  }
  let postItems = posts.map(({id, message, likeCount, pic}) => <Post key={id} id={id} message={message} onClick={onClick} count={likeCount} pic={pic} />)

  return <div className={s.myPosts}>
      <h3>My Posts</h3>
      <PostForm onSubmit={mySubmit} />
      <div className={s.posts}>
        { postItems }
      </div>
    </div>
}
