import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeGet from "../ui/pages/HomeGet/HomeGet";

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeGet/>} />
        </Routes>
    );
};