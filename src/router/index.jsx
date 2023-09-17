import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../ui/pages/Home';
import { Register } from '../ui/pages/Register';
import { Login } from '../ui/pages/Auth';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
            <Route path='/register' element={<Register/>} /> 
            <Route path='/login' element={<Login/>} /> 
        </Routes>
    );
};