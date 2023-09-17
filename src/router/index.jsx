import React from 'react';
import { Route, Routes } from 'react-router-dom';
import HomeGuest from "../ui/pages/HomeGuest";

export const Router = () => {
    return (
        <Routes>
            <Route path='/' element={<HomeGuest/>} />
        </Routes>
    );
};