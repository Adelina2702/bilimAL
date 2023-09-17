import React from 'react';
import Input from "../../components/Input";

const Form = () => {
  return (
    <div className='flex flex-wrap gap-10 mt-10'>
      <Input placeholder='Имя' width='2/5'/>
      <Input placeholder='Фамилия' width='2/5'/>
      <Input placeholder='Электронная почта' width='2/5'/>
      <Input placeholder='Пароль' width='2/5'/>
      <Input placeholder='Номер телефона' width='2/5'/>
      <Input placeholder='Пол' width='2/5'/>
      <Input placeholder='Дата рождения' width='2/5'/>
      <Input placeholder='Страна' width='2/5'/>
    </div>
  );
};

export default Form;