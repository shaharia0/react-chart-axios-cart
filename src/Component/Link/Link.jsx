import React from 'react';

const Link = ({route}) => {
  return (
    <li className='text-2xl font-bold'>
         <a className='no-underline hover:underline hover:text-red-600' href={route.path}>{route.name}</a>
    </li>
  );
};

export default Link;