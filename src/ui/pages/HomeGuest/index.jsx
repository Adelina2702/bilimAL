import React from 'react';
import Home from "../Home/Home";
import Profile from "../Profile/Profile";
import Community from "../Community/Community";

const HomeGuest = () => {
    return (
        <div>
          <Home/>
            <Profile/>
          <Community/>
        </div>
    );
}

export default HomeGuest;
