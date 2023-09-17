import React from 'react';

const Reproduce = () => {
  return (
    <svg
      width='50'
      height='50'
      viewBox='0 0 50 50'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'>
      <g clip-path='url(#clip0_151_303)'>
        <rect width='50' height='50' rx='25' fill='#121212' />
        <circle cx='25' cy='25' r='24.5' stroke='white' />
        <g clip-path='url(#clip1_151_303)'>
          <rect
            width='5'
            height='18'
            transform='translate(18 16)'
            fill='white'
          />
          <rect
            width='5'
            height='18'
            transform='translate(27 16)'
            fill='white'
          />
        </g>
      </g>
      <defs>
        <clipPath id='clip0_151_303'>
          <rect width='50' height='50' rx='25' fill='white' />
        </clipPath>
        <clipPath id='clip1_151_303'>
          <rect width='50' height='50' fill='white' />
        </clipPath>
      </defs>
    </svg>
  );
};

export default Reproduce;
