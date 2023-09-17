import React from 'react';
import { Route, Routes } from 'react-router-dom';
import { Register } from '../ui/pages/Register';
import { Login } from '../ui/pages/Auth';
import View from '../ui/pages/View';
import VideoCourse from '../ui/pages/VideoCourse';
import HomeGet from "../ui/pages/HomeGet/HomeGet";
import Home from "../ui/pages/Home/Home";
import Community from "../ui/pages/Community/Community";
import Profile from "../ui/pages/Profile/Profile";

export const Router = () => {
  return (
    <Routes>
      <Route path='/' element={<HomeGet />} />
      <Route path='/home' element={<Home />} />
      <Route path='/register' element={<Register />} />
      <Route path='/login' element={<Login />} />
      <Route path='/view' element={<View />} />
      <Route path='/videocourse' element={<VideoCourse />}  />
      <Route path='/community' element={<Community />}  />
      <Route path='/profile' element={<Profile />}  />
    </Routes>
  );
};
