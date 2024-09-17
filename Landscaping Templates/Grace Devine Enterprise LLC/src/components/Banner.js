import React from 'react';
// images
import Image from '../assets/avatar.png';
// icons
import { FaGithub, FaYoutube, FaDribbble } from 'react-icons/fa';
// type animation
import { TypeAnimation } from 'react-type-animation';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const Banner = () => {
  return (
    <section
      className='min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >

      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.8] lg:text-[110px]'
            >
              Grace  <span>Devine Enterprise</span>
            </motion.h1>
            <motion.div
              variants={fadeIn('up', 0.4)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='my-6 text-[18px] lg:text-[30px] font-secondary font-semibold uppercase leading-[1]'
            >
              <span className='text-white mr-2'>We offer</span>
              <TypeAnimation
                sequence={[
                  'Landscaping',
                  2000,
                  'Tree',
                  2000,
                  'Removal',
                  2000,
                ]}
                speed={50}
                className='text-accent'
                wrapper='span'
                repeat={Infinity}
              />
              <span className='text-white ml-1'>Services</span>
            </motion.div>
            <motion.p
              variants={fadeIn('up', 0.5)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='mb-6 max-w-lg mx-auto lg:mx-0'
            >
              Serving the larger Maryland metropolitan for over 10+ years.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-14 mx-auto lg:mx-0'
            >
              <button className='btn btn-lg'><a href="tel: +14438661805">Call Me For a Free Estimate!</a></button>
              {/* <Link
                to='about'
                activeClass='active'
                smooth={true}
                spy={true}
                className='cursor-pointer text-gradient btn-link'
              >
              About Us
              </Link> */}
              {/* <a href='#' className='text-gradient btn-link'>
                My Portfolio
              </a> */}
            </motion.div>
            {/* socials */}
            <motion.div
              variants={fadeIn('up', 0.7)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex text-[20px] gap-x-6 max-w-max mx-auto lg:mx-0'
            >
              <a href='#'>
                <FaYoutube />
              </a>
              <a href='#'>
                <FaGithub />
              </a>
              <a href='#'>
                <FaDribbble />
              </a>
            </motion.div>
          </div>
          {/* image */}
          <motion.div
            variants={fadeIn('down', 0.5)}
            initial='hidden'
            whileInView={'show'}
            className='hidden lg:flex flex-1 max-w-[750px] lg:max-w-[2000px]'
          >
            <img src={Image} alt='' />
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Banner;
