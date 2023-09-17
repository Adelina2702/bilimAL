import React from 'react';
import { Route, Routes } from 'react-router-dom';
import Home from '../ui/pages/HomeGet/HomeGet';
import Headers from '../ui/components/Headers/Headers';


export const Router = () => {
    return (
        <div>

            <Routes>
                <Route path='/' element={<Home />} />
            </Routes>
        </div>
    );
};