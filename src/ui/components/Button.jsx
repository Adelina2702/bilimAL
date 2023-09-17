import React from 'react';

const Button = ({text, width, onClick, color, padding, textSize}) => {
  return (
    <button onClick={onClick} className={`${color ? color :'bg-[#54A3FF]' } cursor-pointer text-white text-bold ${textSize ? textSize :'text-xl'}  ${padding ? padding :'px-4 py-4' } rounded ${width}`}>
      {text}
    </button>
  );
};

export default Button;