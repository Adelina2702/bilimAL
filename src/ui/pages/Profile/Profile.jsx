import React from 'react';
import Info from "../../Containers/Profile/Info";
import Form from "../../Containers/Profile/Form";
import Headers from "../../components/Headers/Headers";

const Profile = () => {
  return (
    <>
      <Headers/>
      <div className='container m-auto pr-20 pt-32'>
        <Info/>
        <Form/>
      </div>
    </>

  );
};

export default Profile;