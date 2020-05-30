import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Redirect} from 'react-router-dom'

import {Input} from '../common/FormsControls/FormsControls.jsx'
import {required, maxLengthCreator} from '../../utils/validators/validators.js'
import s from '../common/FormsControls/formControl.module.css'

const maxLength10 = maxLengthCreator(18)

let LoginForm = (props) => {
    const {handleSubmit} = props

    return <form onSubmit={handleSubmit} >
        <div>
            <Field component={Input} type="text" placeholder="Login" name="login"
            validate={[required, maxLength10]} />
        </div>
        <div>
            <Field component={Input} type="text" placeholder="Password" name="password"
            validate={[required, maxLength10]} />
        </div>
        <div>
            <Field component="input" type="checkbox" name="rememberme" id="loginMemo" />
            <label htmlFor="loginMemo">Remember me</label>
        </div>
        {props.error && <div className={s.formError} >{props.error}</div>}
        <button>Login</button>
    </form>
}

LoginForm =  reduxForm({
    form: 'loginForm'
})(LoginForm)

export default function Login(props) {
     let mySubmit = (formData) => {
        props.getAuthData(formData.login, formData.password, formData.loginMemo)
        for (let key in formData) {
            formData[key] = '' //для checked - приведение типов к false
        }
    }
    if (props.isAuth) { return <Redirect to={'/profile'} />}
    return  <LoginForm onSubmit={mySubmit} />
}
