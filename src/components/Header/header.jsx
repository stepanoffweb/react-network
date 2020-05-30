import React from 'react';
import {NavLink} from 'react-router-dom'

import logo from './logo.png';
import s from  './header.module.css';

export default function Header(props) {
    return (
        <header className={s.header}>
            <img src={logo} alt="logo"/>
            <div className={s.loginBlock}>
                { props.isAuth
                    ? <div>{props.login} - <button onClick={props.setLogout}>LogOut</button> </div>
                    : <NavLink to={'/login'} >Login</NavLink>}
            </div>
        </header>
    )
}
