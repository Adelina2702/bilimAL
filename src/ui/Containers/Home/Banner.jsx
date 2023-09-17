import React from 'react';
import Button from "../../components/Button";

const Banner = () => {
  return (
    <div className='bg-[#F6EEE7] border border-black rounded-3xl flex '>
      <div className='flex flex-col justify-around pl-20'>
        <h3 className='text-5xl leading-30'>
          Улучшьте свои знания подкрепляя  новые практические упражения
        </h3>
        <Button text='Перейти' width='w-40'/>
      </div>
        <img className='w-2/5 rounded-e-3xl' src="https://hs-store.ru/upload/medialibrary/8ce/8ce87bc2da16218b4e2d9fdf5b4e61b3.jpg" alt="/"/>
    </div>
  );
};

export default Banner;