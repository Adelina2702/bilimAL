import React from 'react';
import diagram  from '../../images/diagram.svg'
import own_course_img  from '../../images/own_course_img.svg'

const OwnCourses = () => {
  return (
    <div>
      <h3 className='font-medium text-2xl mt-20 mb-10'>Ваши курсы</h3>
      <div className='flex h-52 w-full justify-between border rounded-xl'>
        <img className='rounded-s-xl' src={own_course_img} alt="/"/>
        <div className='flex flex-col justify-around w-2/3'>
          <p className='font-bold text-2xl'>Курс по персональным данным</p>
          <p className='text-xl'>Обучающий курс по персональным данным</p>
          <div className='flex gap-16 text-xl'>
            <p className='font-medium'>Уровень: <span className='font-normal'>Начинающий</span></p>
            <p className='font-medium'>Старт курса: <span className='font-normal'>12/02/2022</span></p>
          </div>
        </div>
        <div className='flex items-center mr-12'>
          <img src={diagram} alt="/"/>
        </div>
      </div>
    </div>
  );
};

export default OwnCourses;