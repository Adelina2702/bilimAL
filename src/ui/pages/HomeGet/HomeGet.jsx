import React, { useEffect, useRef } from 'react';
import styles from './index.module.css'
import Headers from '../../components/Headers/Headers';
import { course1, course2, icon1, icon2, icon3, premCourses1, premCourses2, } from '../../images';
import gift from '../../images/Frame 359.gif.mp4'
import Div from '../../components/conteiner/Div';
import Button from "../../components/Button";
import {Link} from "react-router-dom";
import Footer from "../../components/Footer";




const HomeGet = () => {

    const posible = [
        {
            id: 1,
            icon: icon1,
            title: 'Легко и доступно в использовании',
            text: 'Курсы можно проходить в любое время, даже выполнять тесты не смотря на истечения срока'
        },
        {
            id: 2,
            icon: icon2,
            title: 'Развитие своих персональных навыков',
            text: 'Каждый может улучшить свои знание за короткий период и следить за своим прогрессом'
        },
        {
            id: 3,
            icon: icon3,
            title: 'Лучшая подобранная программа',
            text: 'Мы подготовили упрощенную методику обучения под каждого пользователя'
        },

    ]
    const courses = [
        {
            id: 1,
            icon: course1,
            title: 'Как использовать онлайн платежи и электронные кошелки',
            text: 'В данном курсе вы научитесь как правильно оплачивать любые счета'
        },
        {
            id: 2,
            icon: course2,
            title: 'Курс по персональным данным',
            text: 'Обучение о том, как защитить свои данные и устройства от киберугроз'
        },


    ]
    const coursePremiums = [
        {
            id: 1,
            icon: premCourses1,
            title: 'Курс по пользованию Whats’s app',
            text: 'В данном курсе вы научитесь за короткйи срок использовать главный messanger в мире',

        },
        {
            id: 2,
            icon: premCourses2,
            title: 'Курс по Медиаграмотности',
            text: 'Курс, который поможет развить критическое мышление при работе с информацией',

        },
    ]

    const videoRef = useRef();
    useEffect(() => {
        const videoElement = videoRef.current;

        if (videoElement) {
            videoElement.play()
                .then(() => {

                })
                .catch(error => {
                    if (error.name === 'NotAllowedError') {
                        console.log("llllll77777ll")

                    } else {

                        console.log("llllllll")
                        console.error(error);
                    }
                });
        }
    });

    return (
        <div className={styles.home}>


            <div className={styles.main}>

                <div>
                    <Headers />
                </div>


                <div className={styles.banners}>

                    <div className={styles.conteiner}>

                        <div className={styles.conteiner_text}>
                            <h1 className={styles.conteiner_title}>
                                Развиваем професиональные навыки вместе со всеми преподавателями Кыргызстана
                            </h1>
                            <p className={styles.conteiner_textInto}>
                                Мы поможем обучить вас новым цифровым возможностям чтобы вы без труда смогли освоить и повысить качество знаний а так же легко взаимодействовать с новыми технологиями
                            </p>

                        </div>

                        <div className={styles.conteiner_img}>

                            <video ref={videoRef} className={styles.centerVideo} autoPlay loop muted playsInline >
                                <source src={gift} type="video/mp4" />
                                Ваш браузер не поддерживает видео.
                            </video>
                        </div>

                    </div>

                    <Button text='Узнать больше' padding='px-4 py-2' textSize='text-lg'/>

                </div>
            </div>

            <div className={styles.content}>
                <h1 className={styles.text}>Наши возможности</h1>
                <div className={styles.possible} >
                    {
                        posible.map((item) => (
                            <div className={styles.div}>
                                <img className={styles.div_icon} src={item.icon} alt='/' />

                                <h1 className={styles.div_titile}>{item.title}</h1>
                                <p className={styles.div_text} >{item.text}</p>

                            </div>
                        ))
                    }
                </div>

                <h1 className={styles.text1}>Наши курсы</h1>
                <p className={styles.info}>
                    Узнайте больше о наших курсах зарегистрировавшись на нашем сайте
                </p>
                <Link to={'/register'}><Button padding='px-8 py-4' text='Зарегистрироваться'/></Link>

                <div className={styles.possibleС}>
                    {
                        courses.map((item) => (

                            <Div item={item} />


                        ))
                    }
                </div>

                <h1 className={styles.text1}>Премиум курсы</h1>

                <div className={styles.possibleС}>
                    {
                        coursePremiums.map((item) => (

                            <Div item={item} />

                        ))
                    }
                </div>
                <div className={styles.btn}>
                    <Button padding='px-6 py-2' text='Смотреть больше'/>
                </div>

            </div>
            <Footer/>
        </div>
    );
}

export default HomeGet;
