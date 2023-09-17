import React from 'react';
import Background from '../../images/logo.png';
import { Link, } from 'react-router-dom';
// import { useDispatch, useSelector } from 'react-redux';
// import { registerThunk } from '../../../redux/slices/RegisterSlice';
// import { useFormik } from 'formik';
// import { schema } from '../../utils/shcema';
// import { useNavigate } from 'react-router-dom';
import CustomInput from '../../components/Inputs/Input';
import PasswordInput from '../../components/Inputs/PasswordInput';
import Button from '../../components/Buttons';


// const initialValues = {
//   firstname: '',
//   lastname: '',
//   email: '',
//   password: '',
// };

export const Register = () => {
//   const dispatch = useDispatch();
//   const navigate = useNavigate();

//   const { statusRegist } = useSelector((state) => state.register)

//   useEffect(() => {
//     console.log("statusRegist: ", statusRegist)
//   }, [statusRegist])


//   const onSubmit = (values) => {


//     dispatch(registerThunk({ user: values, navigate }));
//   };


//   const formik = useFormik({
//     initialValues,
//     validationSchema: schema,
//     validateOnChange: false,
//     onSubmit,
//   });


  return (
    <div className='flex'>
      <img className='h-[100vh]' src={Background} alt='' />
      <form className='flex flex-col ml-[70px] mt-[40px]'>
                  <Link to='/'>
            <div
              className='mb-[28px] text-[#A1A1A1] text-[20px] text-end'>
              войти как гость
            </div>
          </Link>
        <div className='mb-[14px] leading-[47.6px] text-[34px] text-center font-semibold'>
          Регистрация
        </div>
        <div className='mb-[50px] text-[20px] text-center'>Все поля должны быть заполнены</div>
        <div className='container_right__center'>
          <CustomInput
            // value={formik.values.firstname}
            // name='firstname'
            // onChange={formik.handleChange}
            // error={(formik.touched.firstname || formik.errors.firstname)}
            // helperText={formik.errors.firstname}
            placeholder={'Имя'}
          />
          <CustomInput
            // value={formik.values.lastname}
            // name='lastname'
            // onChange={formik.handleChange}
            // error={(formik.touched.lastname || formik.errors.lastname)}
            // helperText={formik.errors.lastname}
            placeholder={'Фамилия'}
          />
          <CustomInput
            // value={formik.values.email}
            // name='email'
            // onChange={formik.handleChange}
            // error={(formik.touched.email || formik.errors.email)}
            // helperText={formik.errors.email}
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
          <Link to={'/login'}><Button text={'Регистрация'} /></Link>
          <p className='text-center mt-4'>Уже есть аккаунт? <Link to={'/login'}><button className='text-center text-[#54A3FF] font-bold'>Войти</button></Link></p>
        </div>
      </form>
    </div>
  );
};
