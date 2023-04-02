import React from 'react';
import { AiOutlineCheckCircle } from "react-icons/ai";

const Features = ({feature}) => {
  return (
    <div className='flex items-center m-1'>
      <AiOutlineCheckCircle className='mr-2'></AiOutlineCheckCircle>
     <span>{feature}</span> 
    </div>
  );
};

export default Features;