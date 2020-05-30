import React from 'react'
import s from '../Dialogs.module.css'

const Message = ({message, id}) => {
    return <div id={id} className={s.message}>{message}</div>
}

export default Message
