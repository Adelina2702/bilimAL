import React from 'react';
import Button from "../../components/Button";
import Comment from "./Comment";
import Modal from "../../components/Modal";
import PostFormModal from "./PostFormModal";

export const CommunityCont = () => {
  const [open, setOpen] = React.useState(false);

  const handleToggleDialog = () => {
    setOpen(!open);
  };

  return (
    <div>
      <div className='flex justify-between items-center mb-12'>
        <h3 className='text-3xl font-medium'>Информация которая может быть вам интересна</h3>
        <Button onClick={handleToggleDialog} text='Создать публикацию'/>
      </div>
      <div className='flex flex-col gap-10'>
        <Comment name='Людмила Прокофьевна' time='8 часов назад' text='Изучение курса MS Word для начинающих будет состоять с изучения простых элементов интерфейса текстового процессора Word. В рамках данного занятия будет произведена базовая настройка панели быстрого доступа, рассмотрены вопросы создания и сохранения документа, базовые понимание шаблона документа.'/>
        <Comment name='Людмила Прокофьевна' time='8 часов назад' text='Изучение курса MS Word для начинающих будет состоять с изучения простых элементов интерфейса текстового процессора Word. В рамках данного занятия будет произведена базовая настройка панели быстрого доступа, рассмотрены вопросы создания и сохранения документа, базовые понимание шаблона документа.'/>
        <Comment name='Людмила Прокофьевна' time='8 часов назад' text='Изучение курса MS Word для начинающих будет состоять с изучения простых элементов интерфейса текстового процессора Word. В рамках данного занятия будет произведена базовая настройка панели быстрого доступа, рассмотрены вопросы создания и сохранения документа, базовые понимание шаблона документа.'/>
        <Comment name='Людмила Прокофьевна' time='8 часов назад' text='Изучение курса MS Word для начинающих будет состоять с изучения простых элементов интерфейса текстового процессора Word. В рамках данного занятия будет произведена базовая настройка панели быстрого доступа, рассмотрены вопросы создания и сохранения документа, базовые понимание шаблона документа.'/>
      </div>
      <PostFormModal open={open} onClose={handleToggleDialog}/>
    </div>

  );
};