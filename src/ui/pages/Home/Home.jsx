import React from 'react';
import Banner from "../../Containers/Home/Banner";
import OwnCourses from "../../Containers/Home/OwnCourses";
import Headers from "../../components/Headers/Headers";
import Footer from "../../components/Footer";
import Div from "../../components/conteiner/Div";
import {course1, course2} from "../../images";

const Home = () => {

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

    return (
      <>
          <Headers/>
          <div className='container m-auto pt-28'>
              <Banner/>
              <OwnCourses/>
            <h3 className='font-medium text-2xl mt-20 mb-6'>Курсы</h3>
            <div className='flex justify-between py-4'>
              {
                courses.map((item) => (
                  <Div item={item} />
                ))
              }
            </div>
          </div>
        <Footer/>
      </>
    );
};

export default Home;