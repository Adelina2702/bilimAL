import React from 'react';

const Info = () => {
  return (
    <div>
      <div className='flex justify-between mb-10'>
        <div className='flex items-center gap-4'>
          <img className='rounded-full w-40 h-40 object-cover' src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg" alt="/"/>
          <p className='font-bold text-xl'>Айым Атабекова</p>
        </div>
        <div className='w-40 h-40 text-white bg-gradient-to-r from-orange-600 to-yellow-400 font-bold text-2xl flex items-center text-center rounded-xl'>
          Премиум тариф
        </div>
      </div>
      <div className='flex gap-10'>
        <div className='w-fit h-10 flex border rounded-lg p-2 gap-4'>
          <button>Редактировать</button>
          <svg fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L10.582 16.07a4.5 4.5 0 01-1.897 1.13L6 18l.8-2.685a4.5 4.5 0 011.13-1.897l8.932-8.931zm0 0L19.5 7.125M18 14v4.75A2.25 2.25 0 0115.75 21H5.25A2.25 2.25 0 013 18.75V8.25A2.25 2.25 0 015.25 6H10"></path>
          </svg>
        </div>
        <div className='w-fit h-10 flex border rounded-lg p-2 gap-2'>
          <button>Изменить пароль</button>
        </div>
      </div>
    </div>
  );
};

export default Info;