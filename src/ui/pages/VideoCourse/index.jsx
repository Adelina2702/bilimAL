import React from 'react';
import Reproduce from '../../icons/Reproduce';
import Pause from '../../icons/Pause';
import Line from '../../icons/Line';
import Footer from '../../components/Footer';

const VideoCourse = () => {
  return (
<div className='w-[100%]'>
    <div className='flex flex-col mx-[100px] mt-[50px]'>
      <div className='flex mb-[40px]'>
        <iframe
          width='762'
          height='468'
          borderRadius='20'
          src='https://www.youtube.com/embed/awHEjo7xAzs?si=CxUSQA20lgq2pq45'
          title='YouTube video player'
          frameborder='0'
          allow='accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share'
          allowfullscreen></iframe>
        <div className='ml-[58px]'>
          <h4 className='text-[24px] font-semibold mb-[20px]'>Тема урока</h4>
          <div className='flex w-[418px] h-[68px] rounded-lg bg-[#54A3FF] p-[10px] mb-[40px]'>
            <Reproduce />
            <h4 className='text-[20px] text-[#ffff] font-semibold ml-[20px] leading-7'>
              Знакомство с приложением Tik Tok
            </h4>
          </div>
          <div className='flex w-[418px] h-[68px] rounded-lg bg-[#F6F5FF] p-[10px] mb-[40px]'>
            <Pause />
            <h4 className='text-[20px] font-semibold ml-[20px] leading-7'>
              Знакомство с интсрументом видео 2
            </h4>
          </div>
          <div className='flex w-[418px] h-[68px] rounded-lg bg-[#F6F5FF] p-[10px] mb-[40px]'>
            <Pause />
            <h4 className='text-[20px] font-semibold ml-[20px] leading-7'>
              Знакомство с интсрументом видео 3
            </h4>
          </div>
          <div className='flex w-[418px] h-[68px] rounded-lg bg-[#F6F5FF] p-[10px] mb-[40px]'>
            <Pause />
            <h4 className='text-[20px] font-semibold ml-[20px] leading-7'>
              Знакомство с интсрументом видео 4
            </h4>
          </div>
        </div>
      </div>
      <div className=' flex w-[764px] h-[114px] rounded-lg border border-solid border-[#3FA4EA] mb-[49px]'>
        <div className='mx-[22px] my-[15px]'>
          <h4 className='font-semibold text-[24px] mb-[12px]'>Уровень</h4>
          <h5 className='text-[20px]'>Начинающий</h5>
        </div>
        <Line />
        <div className='mx-[22px] my-[15px]'>
          <h4 className='font-semibold text-[24px] mb-[12px]'>Длительность</h4>
          <h5 className='text-[20px]'>всего 1 час 30 мин</h5>
        </div>
        <Line />
        <div className='mx-[22px] my-[15px]'>
          <h4 className='font-semibold text-[24px] mb-[12px]'>Язык</h4>
          <h5 className='text-[20px]'>Русский / Кыргызкий</h5>
        </div>
      </div>
      <h5 className='text-[30px] font-semibold mb-[20px]'>Описание урока</h5>
      <p className='text-[20px] font-medium w-[762px] mb-[20px]'>
        Познакомьтесь с нашим аналитическим инструментом. Узнайте больше об
        особенностях TikTok, его интересах и общем отношении к брендам.
      </p>
    </div>
      <Footer/>
      </div>
  );
};

export default VideoCourse;
