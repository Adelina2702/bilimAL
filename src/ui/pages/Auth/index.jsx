import React from 'react';
import Background from '../../images/logo.png';
import {Link, useNavigate,} from 'react-router-dom';
// import { useFormik } from 'formik';
// import { schema } from '../../utils/shcema';
// import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/Inputs/Input';
import PasswordInput from '../../components/Inputs/PasswordInput';
import Button from '../../components/Buttons';


// const initialValues = {
//   email: '',
//   password: '',
// };

export const Login = () => {

  const navigate = useNavigate()

  const handleLogin = () => {
    navigate('/home')
    localStorage.setItem('login', 'true')
  }
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

// const onSubmit = (values) => {
//   dispatch(loginThunk({ values: values, navigate }))
  // dispatch(registerThunk({ user: values, navigate }));
// };


// const formik = useFormik({
//   initialValues,
// validationSchema: schema,
//   validateOnChange: false,
//   onSubmit,
// });

  return (
    <div className='flex'>
      <img className='h-[100vh]' src={Background} alt='' />
      <form className='flex flex-col ml-[70px] mt-[140px]'>
        <div className='mb-[70px] leading-[47.6px] text-[34px] text-center font-semibold'>
        Вход
        </div>
        <div className='container_right__center'>
          <CustomInput
          placeholder={'Электронная почта'}
          />
          <PasswordInput
            name='password'
            type='passwod'
            // value={formik.values.password}
            // onChange={formik.handleChange}
            // error={(formik.touched.password || formik.errors.password)}
            // helperText={formik.errors.password}
            placeholder={'Пароль'}
          />
          <Button onClick={handleLogin} text={'Войти'} />
          <div className='flex mt-[40px] justify-between'>
          <Link to='/register'>
            <div
              className='text-[20px]'>
             Нет аккаунта ?
            </div>
            </Link>
            <div
              className='text-[20px] cursor-pointer'>
             Забыли пароль ?
            </div>
          </div>
        </div>
      </form>
    </div>
  );
};
