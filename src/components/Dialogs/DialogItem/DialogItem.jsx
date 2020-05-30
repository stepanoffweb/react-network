import React from 'react'
import {NavLink} from 'react-router-dom'
import s from '../Dialogs.module.css'


const DialogItem = ({name, id}) => {
    return <div className={s.dialogItem + ' ' + s.active}>
                <NavLink to={`/dialogs/${id}`} >{name}</NavLink>
            </div>

}

export default DialogItem
