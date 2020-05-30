import React from 'react';
import {NavLink} from 'react-router-dom'
import styles from  './navbar.module.css'


export default function Navbar() {
    return (
        <nav className={styles.nav}>
        <ul>
          <li><NavLink activeClassName={styles.activeLink} to="/profile">Profile</NavLink></li>
          <li><NavLink activeClassName={styles.activeLink} to="/dialogs">Messages</NavLink></li>
          <li><NavLink activeClassName={styles.activeLink} to="/users">Users</NavLink></li>
          <li><NavLink activeClassName={styles.activeLink} to="/news">News</NavLink></li>
          <li><NavLink activeClassName={styles.activeLink} to="/music">Music</NavLink></li>
          <li><NavLink activeClassName={styles.activeLink} to="/settings">Settings</NavLink></li>
        </ul>
      </nav>
    )
}
