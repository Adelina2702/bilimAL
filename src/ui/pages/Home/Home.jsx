import React from 'react';
import Banner from "../../Containers/Home/Banner";
import OwnCourses from "../../Containers/Home/OwnCourses";

const Home = () => {
    return (
      <div className='container m-auto'>
        <Banner/>
        <OwnCourses/>
      </div>

    );
};

export default Home;