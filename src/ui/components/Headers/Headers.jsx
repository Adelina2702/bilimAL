import React from 'react'
import styles from './index.module.css'
import {Link, useNavigate} from "react-router-dom";
import Arrow from '../../icons/Arrow';
import ArrowWhite from '../../icons/ArrowWhite';

export default function Headers() {
  const navigate = useNavigate()
    const login = localStorage.getItem('login')
  const logout = () => {
      navigate('/')
    localStorage.clear()
  }

  const goToMain = () => {
    login ? navigate('/home') : navigate('/')
  }
    return (
        <div className={!login ? styles.conteiner_headers : styles.conteiner_login_headers }>

            <div className={styles.headers}>

               <h1 onClick={goToMain} className={login ? styles.title_login : styles.title}>SmartKylym</h1>

                <div className={styles.navbar}>
                    {
                        login ? (
                          <div className={styles.navbar_allSing_login} >
                            <Link to={'/home'}><h1 className={styles.navbar_enter}>Курсы</h1></Link>
                            <Link to={'/home'}><h1 className={styles.navbar_enter}>Мое обучение</h1></Link>
                              <Link to={'/community'}><h1 className={styles.navbar_enter}>Сообщество</h1></Link>
                            <Link to={'/profile'}><h1 className={styles.navbar_enter}>Профиль </h1></Link>
                            <div className='flex '>
                                <div className={styles.navbar_enter}>Русский
                               <span><Arrow/></span> 
                                </div>
                              </div>
                            <h1 onClick={logout} className={styles.navbar_enter}>Выйти </h1>
                          </div>
                        ) : (
                          <div className={styles.navbar_allSing} >
                            {/* <div className='flex gap-2 w-fit'>
                              <h1 className={styles.navbar_enter}>Русский</h1>
                            </div> */}
                            <div className='flex '>
                                <div className={styles.navbar_enter}>Русский
                               <span><ArrowWhite/></span> 
                                </div>
                                </div>
                              <Link to={'/login'}><h1 className={styles.navbar_enter}>Войти</h1></Link>
                              <Link to={'/register'}><h1 className={styles.navbar.sing}>Регистрация</h1></Link>
                          </div>
                        )
                    }

                </div>
            </div>
        </div>
    )
}
