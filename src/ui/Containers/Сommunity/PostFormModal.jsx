import React from 'react';
import Modal from "../../components/Modal";
import Input from "../../components/Input";
import Button from "../../components/Button";

const PostFormModal = ({open, onClose}) => {
  return (
    <Modal open={open} onClose={onClose}>
      <div className='w-96'>
        <p className='mb-1'>Тема</p>
        <Input width='full mb-4'/>
        <p className=' mb-1'>Описание</p>
        <textarea rows='6' className='border rounded-lg w-full mb-4'/>
        <div className='flex gap-4'>
          <Button padding='p-2' textSize='text-lg' onClick={onClose} text='Опубликовать'/>
          <Button padding='p-2' textSize='text-lg' color='bg-[#E0E0E0]' onClick={onClose} text='Отмена'/>
        </div>
      </div>
    </Modal>
  );
};

export default PostFormModal;