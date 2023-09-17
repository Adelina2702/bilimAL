import React, {useEffect} from 'react';
import TikTok from '../../images/tiktok.png';
import Button from '../../components/Buttons';
import Shkala1 from '../../icons/Shkala1';
import Shkala2 from '../../icons/Shkala2';
import Shkala3 from '../../icons/Shkala3';
import Shkala4 from '../../icons/Shkala4';
import Shkala5 from '../../icons/Shkala5';
import Footer from '../../components/Footer';
import Headers from "../../components/Headers/Headers";
import {Link} from "react-router-dom";

const View = () => {

  useEffect(() => {
    window.scroll(0, 0)
  }, [])
  return (
    <div>
      <Headers/>
      <div className='flex flex-col mx-[100px] mt-20'>
        <div className='flex mt-[60px] mb-[110px]'>
          <img src={TikTok} alt='' />
          <div className='flex flex-col mx-[43px] my-[15px]'>
            <div className='text-[30px] font-semibold mb-[15px]'>
              Подробный курс по персональным данным
            </div>
            <div className='text-[21px] mb-[30px]'>
              Данный курс предлагает комплексное погружение в сферу цифровой
              безопасности, предоставляя студентам необходимые знания и навыки
              для эффективного обеспечения безопасности информационных активов.
              В ходе обучения вы ознакомятся с основными аспектами безопасности
              активов, инжиниринга.
            </div>
            <Link to={'/videocourse'}><Button text={'Записаться на курс'} /></Link>
          </div>
        </div>
        <div className='flex'>
          <div className='flex flex-col'>
            <div className='text-[22px] font-semibold mb-[30px] cursor-pointer'>
              Чему вы научитесь
              <span className='text-[#8A8A8A] ml-[40px] cursor-pointer'>
                Отзывы учащихся
              </span>
            </div>
            <div className='w-[695px] h-[188px] text-[23px]'>
              Курс обеспечивает практическую ориентацию, позволяя развивать
              навыки анализа рисков, разработки безопасных систем, управления
              уязвимостями, а также эффективного реагирования на инциденты
              безопасности.
            </div>
          </div>
          <div className='flex flex-col ml-[56px]'>
            <div className='text-[22px] font-semibold mb-[30px]'>
              Рейтинг курса
            </div>
            <div className='flex text-center items-center mb-[12px] text-[20px] flex-wrap'>
              <h4 className='mr-[10px]'>5 звезд</h4>
              <Shkala1 />
              <h4 className='ml-[10px]'>90 %</h4>
            </div>
            <div className='flex text-center items-center mb-[12px] text-[20px]'>
              <h4 className='mr-[10px]'>4 звезд</h4>
              <Shkala2 />
              <h4 className='ml-[10px]'>6 %</h4>
            </div>
            <div className='flex text-center items-center mb-[12px] text-[20px]'>
              <h4 className='mr-[10px]'>3 звезд</h4>
              <Shkala3 />
              <h4 className='ml-[10px]'>2 %</h4>
            </div>
            <div className='flex text-center items-center mb-[12px] text-[20px]'>
              <h4 className='mr-[10px]'>2 звезд</h4>
              <Shkala4 />
              <h4 className='ml-[10px]'>1 %</h4>
            </div>
            <div className='flex text-center items-center mb-[12px] text-[20px]'>
              <h4 className='mr-[10px]'>1 звезд</h4>
              <Shkala5 />
              <h4 className='ml-[10px]'>1 %</h4>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default View;
