import React from 'react'
import styles from './div.module.css'

export default function Div({ item }) {
    console.log(item)
    return (


        <div key={item.id} className={styles.conteiner}>
            <img className={styles.icon} src={item.icon} alt='/' />

            <div className={styles.divText} >
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.text}>{item.text}</p>
                <button>Подробнее</button>
            </div>

        </div>


    )
}
