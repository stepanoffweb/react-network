import React from 'react'
import {Field, reduxForm} from 'redux-form'
import {Redirect} from 'react-router-dom'

import {Input, createField} from '../common/FormsControls/FormsControls.jsx'
import {required, maxLengthCreator} from '../../utils/validators/validators.js'
import s from '../common/FormsControls/formControl.module.css'

const maxLength18 = maxLengthCreator(18)

let LoginForm = ({handleSubmit, error}) => {

    return <form onSubmit={handleSubmit} >
        {createField(Input, "text", "Login", "login", [required, maxLength18], false, null, null)}
        {createField(Input, "text", "Password", "password", [required, maxLength18], false, null, null)}
        {createField("input", "checkbox", null, "rememberme", [], true, "loginMemo", "loginMemo")}

        {error && <div className={s.formError} >{error}</div>}
        <button>Login</button>
    </form>
}

LoginForm =  reduxForm({
    form: 'loginForm'
})(LoginForm)

export default function Login({isAuth, getAuthData}) {
     let mySubmit = (formData) => {
        getAuthData(formData.login, formData.password, formData.loginMemo)
        for (let key in formData) {
            formData[key] = '' //для checked - приведение типов к false
        }
    }
    if (isAuth) { return <Redirect to={'/profile'} />}
    return  <LoginForm onSubmit={mySubmit} />
}
