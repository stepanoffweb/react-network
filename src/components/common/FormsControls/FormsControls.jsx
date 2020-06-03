import React from 'react'
import {Field} from 'redux-form'

import s from './formControl.module.css'

const FormControl = ({input, Element, meta, ...props}) => { // исключаем meta из передаваемых пропсов
    const hasError = meta.touched && meta.error

    return (
        <div className={s.formControl + " " + (hasError ? s.error : '')} >
            <div><Element {...input} {...props} /> </div>
            {hasError && <span>{meta.error}</span>}
        </div>
    )
}

export const Textarea = (props) => {
    return <FormControl {...props} Element='textarea' ></FormControl>
}

export const Input = (props) => {
    return  <FormControl {...props} Element='input' ></FormControl>
}

export const createField = (component, type, placeholder, name, validators, isLabel, labelFor, id) => {
    return  <div>
            <Field component={component} type={type} placeholder={placeholder} name={name}
            validate={validators} id={id}  />
           {isLabel && <label htmlFor={labelFor} id={id} >Remember me</label>}
        </div>
}
