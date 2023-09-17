import React from 'react'
import styles from './div.module.css'
import Button from "../Button";
import {Link} from "react-router-dom";

export default function Div({ item }) {
    console.log(item)
    return (


        <div key={item.id} className={styles.conteiner}>
            <img className={styles.icon} src={item.icon} alt='/' />

            <div className={styles.divText} >
                <h1 className={styles.title}>{item.title}</h1>
                <p className={styles.text}>{item.text}</p>
              <Link to={'/view'}><Button text='Подробнее' padding='px-4 py-2' textSize='text-md'/></Link>
            </div>

        </div>


    )
}
