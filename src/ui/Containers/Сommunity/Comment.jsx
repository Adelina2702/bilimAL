import React from 'react';

const Comment = ({text, name, time}) => {
  return (
    <div className='border rounded w-4/5 py-4 px-8'>
      <div className='flex justify-between h-10 mb-8'>
        <p className='text-3xl font-medium'>Учиться можно в любом возрасте</p>
        <svg className='cursor-pointer hover:text-red-500' fill="none" stroke="currentColor" stroke-width="1.5" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
          <path stroke-linecap="round" stroke-linejoin="round" d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12z"></path>
        </svg>
      </div>
      <div className='flex items-center gap-4 h-full'>
        <img className='rounded-full w-24 h-24 object-cover' src="https://t4.ftcdn.net/jpg/03/30/25/97/360_F_330259751_tGPEAq5F5bjxkkliGrb97X2HhtXBDc9x.jpg" alt="/"/>
        <div className='flex flex-col justify-between h-full'>
          <p className='text-xl'>{name}</p>
          <p className='text-lg'>{time}</p>
        </div>
      </div>
      <p className='text-lg mt-8'>{text}</p>
    </div>
  );
};

export default Comment;