import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../ui/pages/Home';

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<Home/>} />
        </Routes>
    );
};