import React from 'react';

const OwnCourses = () => {
  return (
    <div>
      <h3 className='font-medium text-2xl mt-20 mb-12'>Ваши курсы</h3>

      <div className='flex h-52 w-full justify-between border rounded-xl'>
        <img src="https://assets.stickpng.com/images/61045e1a9cd69c000418c11b.png" alt="/"/>
        <div className='flex flex-col justify-around w-2/3'>
          <p className='font-bold text-2xl'>Подробный курс по Tik Tok</p>
          <p className='text-xl'>Обучающий курс “Tik Tok” с нуля</p>
          <div className='flex gap-16 text-xl'>
            <p className='font-medium'>Уровень: <span className='font-normal'>Начинающий</span></p>
            <p className='font-medium'>Старт курса: <span className='font-normal'>12/02/2022</span></p>
          </div>
        </div>
        <div className='flex items-center mr-12'>
          <svg xmlns="http://www.w3.org/2000/svg" width="117" height="117" viewBox="0 0 117 117" fill="none">
            <path fill-rule="evenodd" clip-rule="evenodd" d="M11.9505 37.087C9.39302 34.2773 4.82954 34.8781 3.52724 38.4474C1.2451 44.702 0 51.4556 0 58.5C0 90.8087 26.1913 117 58.5 117C90.8087 117 117 90.8087 117 58.5C117 26.1913 90.8087 0 58.5 0C51.3733 0 44.5442 1.27438 38.2283 3.60768C34.8886 4.84146 34.1261 9.03858 36.5227 11.6715C38.0808 13.3833 40.5462 13.8842 42.738 13.1398C47.5173 11.5166 52.6398 10.6362 57.9678 10.6362C84.1085 10.6362 105.3 31.8274 105.3 57.968C105.3 84.1087 84.1085 105.3 57.9678 105.3C31.8272 105.3 10.636 84.1087 10.636 57.968C10.636 52.7148 11.4918 47.6614 13.0716 42.9397C13.7477 40.919 13.3849 38.6628 11.9505 37.087Z" fill="#0094FF"/>
          </svg>
        </div>
      </div>
    </div>
  );
};

export default OwnCourses;