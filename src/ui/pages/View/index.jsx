import React from 'react';
import TikTok from '../../images/tiktok.png';
import Button from '../../components/Buttons';
import Shkala1 from '../../icons/Shkala1';
import Shkala2 from '../../icons/Shkala2';
import Shkala3 from '../../icons/Shkala3';
import Shkala4 from '../../icons/Shkala4';
import Shkala5 from '../../icons/Shkala5';
import Footer from '../../components/Footer';

const View = () => {
  return (
    <div>
    <div className='flex flex-col mx-[100px]'>
      <div className='flex mt-[60px] mb-[110px]'>
        <img src={TikTok} alt='' />
        <div className='flex flex-col mx-[43px] my-[15px]'>
          <div className='text-[30px] font-semibold mb-[15px]'>
            Подробный курс по Tik Tok
          </div>
          <div className='text-[21px] mb-[30px]'>
            Курс 'Мастерство TikTok с нуля' поможет вам научиться создавать
            захватывающий контент и эффективно использовать эту популярную
            социальную платформу. Весь базовый набор навыков и инструментов для
            успешного присутствия на TikTok, включая создание увлекательных
            видеороликов, редактирование, добавление музыки и спецэффектов,
            оптимизацию профиля и привлечение аудитории - все это вы найдете в
            курсе 'Мастерство TikTok с нуля'.
          </div>
          <Button text={'Записаться на курс'} />
        </div>
      </div>
      <div className='flex'>
        <div className='flex flex-col'>
          <div className='text-[22px] font-semibold mb-[30px] cursor-pointer'>
            Чему вы научитесь
            <span className='text-[#8A8A8A] ml-[40px] cursor-pointer'>Отзывы учащихся</span>
          </div>
          <div className='w-[695px] text-[23px]'>
            В процессе обучения вы узнаете о типах аккаунта, стратегиях
            продвижения, алгоритмах, ключевых словах и вирусном контенте.
            Научитесь снимать и монтировать, проводить прямые эфиры и автоэфиры,
            монетизировать аккаунт. Курс подойдет не только блоггерам, но и
            новичкам, начинающим
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
    <Footer/>
    </div>
  );
};

export default View;
