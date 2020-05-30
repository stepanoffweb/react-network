import React from 'react'
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
