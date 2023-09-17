import React from 'react';

const Input = ({placeholder, width}) => {
  return (
    <input className={`border rounded-lg py-2 px-4 w-${width}`} placeholder={placeholder}>

    </input>
  );
};

export default Input;