import React from 'react';
import {CommunityCont} from "../../Containers/Сommunity";
import Headers from "../../components/Headers/Headers";

const Community = () => {
  return (
    <>
      <Headers/>
      <div className='container m-auto pr-20 pt-28'>
        <CommunityCont/>
      </div>
    </>

  );
};

export default Community;