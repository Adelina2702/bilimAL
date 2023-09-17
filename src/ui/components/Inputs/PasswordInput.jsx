import React, { useState } from 'react';
import UnEye from '../../icons/UnEye';
import Eye from '../../icons/Eye';

const PasswordInput = ({ helperText,placeholder, ...rest }) => {
    const [open, setOpen] = useState(false);

    const toggle = () => {
      setOpen(!open);
    };

    return (
<div>
          <div className='flex place-items-end my-[20px] ml-[480px] absolute'>
          {open === false ? (
              <div onClick={toggle}>
                <Eye />
              </div>
            ) : (
              <div onClick={toggle}>
                <UnEye />
              </div>
            )}
          </div>
        <input
          {...rest}
          id='password'
          type={open === false ? 'password' : 'text'}
          className='h-[60px] w-[520px] mb-[40px] rounded-xl p-[20px] border text-[20px] font-normal  dark:placeholder:text[#757575]'
          placeholder={placeholder}
        />
        {/* <div className="text-[red] text-[15px] mb-[18px] max-w-[415px] h-[10px]">
          {helperText}
        </div> */}
    </div>
    );
}

export default PasswordInput;
