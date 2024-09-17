import React from 'react';
// images
import Logo from '../assets/logo.png';

const Header = () => {
  return (
    <header className='py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href='#' className="ml-6 max-w-14 lg:max-w-20">
            <img src={Logo} alt='' />
          </a>
          {/* button */}
          <button className='btn btn-sm'>Write a Review</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
