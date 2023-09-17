import React from 'react';

const CustomInput = ({placeholder, rest}) => {
    return (
        <div>
        <input
          {...rest}
          type='text'
          className='h-[60px] w-[520px] mb-[40px] rounded-xl p-[20px] border text-[20px] font-normal  dark:placeholder:text[#757575]'
          placeholder={placeholder}
          autoComplete='off'
        />
        {/* <div className="text-[red] text-[16px] mb-[12px] max-w-[415px] h-[10px]">
          {helperText}
        </div> */}
        </div>
    );
}

export default CustomInput;
