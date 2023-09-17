import React from 'react';
import Logo from '../../icons/Logo';

const Footer = () => {
    return (
        <div className='flex justify-between py-[51px] px-[45px]'>
            <Logo/>
            <p className='text-[20px] '>все права защищены 2023</p>
        </div>
    );
}

export default Footer;
