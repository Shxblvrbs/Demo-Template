import React from 'react';
// image
import Image from '../assets/avatar.svg';
// icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';

const Banner = () => {
  return (
    <section className='h-screen flex items-center'>
      <div className='container mx-auto text-white'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center lg:text-left font-secondary'>
            <h1 className='text-[110px] font-bold leading-[1] mb-2'>
              BEN <span className='text-accent'>AIDEN</span>
            </h1>
            <p className='mb-8 max-w-lg mx-auto lg:mx-0'>
              Lorem ipsum dolor sit amet, consecteur adipiscing elit.Duis ac
              metus ac erat iaculis pretium. Nullam vel nibh.
            </p>
            <div className='flex max-w-max gap-x-6 items-center mb-12 mx-auto lg:mx-0'>
              <button className='btn btn-lg btn-primary '>Download CV</button>
              <a href='#' className='text-gradient'>
                My Skills
              </a>
            </div>
            {/* socials */}
            <div className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'>
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaDribbble />
              </a>
            </div>
          </div>
          {/* image */}
          <div className='flex-1 max-w-[482px] mx-auto'>
            <img src={Image} alt='' />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Banner;