import React from 'react'
import s from './Preloader.module.css'

export default function Preloader() {
    return (
        <div className={s.preloader}>
        <h1>Loaded!!!</h1>
            <div className={s.ldsRing}><div></div><div></div><div></div><div></div></div>
        <h1>Loaded!!!</h1>
        </div>
    )
}
