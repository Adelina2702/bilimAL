import React from 'react';

const Button = ({text, onClick}) => {
    return (
        <button onClick={onClick}
        type="submit"
        className="w-[520px] p-[16px] text-[20px] text-white bg-[#359BF9] hover:bg-gradient-to-r from-blue-500 via-blue-300 to-blue-900 rounded-lg "
      >
        {text}
      </button>
    );
}

export default Button;
