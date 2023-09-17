import React from 'react';

const Button = ({text}) => {
    return (
        <button
        type="submit"
        className="w-[520px] p-[16px] text-[20px] text-white bg-[#359BF9] hover:bg-gradient-to-r from-pink-500 to-blue-500 rounded-lg "
      >
        {text}
      </button>
    );
}

export default Button;
