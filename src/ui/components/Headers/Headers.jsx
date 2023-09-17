import React from 'react'
import styles from './index.module.css'

export default function Headers() {
    return (
        <div className={styles.conteiner_headers}>

            <div className={styles.headers}>

                <h1 className={styles.title}>SmartKylym</h1>

                <div className={styles.navbar}>
                    <div style={{ paddingRight: '67px' }}>
                        <h1 className={styles.navbar_language}>Русский</h1>
                    </div>
                    <div className={styles.navbar_allSing} >
                        <h1 className={styles.navbar_enter}>Войти</h1>
                        <h1 className={styles.navbar.sing}>Регистацию</h1>
                    </div>

                </div>
            </div>
        </div>
    )
}
