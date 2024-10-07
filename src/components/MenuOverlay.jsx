import React from 'react';
import { Link } from 'react-router-dom';

function MenuOverlay({ menuList }) {
  return (
    <div className='absolute text-center left-0 min-h-full backdrop-blur-lg w-full mt-7'>
      {menuList.map((item) => (
        <Link to={item.path} key={item.id}>
          <h1 className='text-white text-[24px] mb-6 justify-center mt-10 
          hover:scale-110 transition-all ease-in-out duration-300 cursor-pointer'>
            {item.title}
          </h1>
        </Link>
      ))}
    </div>
  );
}

export default MenuOverlay;
