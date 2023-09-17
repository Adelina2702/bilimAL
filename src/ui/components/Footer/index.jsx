import React from 'react';
import Logo from '../../icons/Logo';

const Footer = () => {
    return (
        <div className='flex justify-between my-[51px] mx-[45px]'>
            <Logo/>
            <p className='text-[20px] '>все права защищены 2023</p>
        </div>
    );
}

export default Footer;
