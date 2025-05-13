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
      className='lg:mb-10 min-h-[85vh] lg:min-h-[78vh] flex items-center'
      id='home'
    >

      <div className='mb-10 lg:mb-0 container mx-auto'>
        <div className='flex flex-col gap-y-8 lg:flex-row lg:items-center lg:gap-x-12'>
          {/* text */}
          <div className='flex-1 text-center font-secondary lg:text-left'>
            <motion.h1
              variants={fadeIn('up', 0.3)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='text-[55px] font-bold leading-[0.9] lg:text-[67px]'
            >
              Manassas European <span>Auto Body</span>
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
                  'European Auto Body',
                  2000,
                  'Restoration',
                  2000,
                  'Painting',
                  2000,
                  'Cosmetic',
                  2000,
                  'Repair',
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
              Proudly serving Northern VA, DC & MD for 30+ years, we specialize in European auto body repair with fast turnaround and unbeatable prices. From collision damage to paint and detailing, our certified techs deliver top-tier craftsmanship that exceeds expectations.
            </motion.p>
            <motion.div
              variants={fadeIn('up', 0.6)}
              initial='hidden'
              whileInView={'show'}
              viewport={{ once: false, amount: 0.7 }}
              className='flex max-w-max gap-x-6 items-center mb-10 lg:mb-14 mx-auto lg:mx-0'
            >
              <button className='btn btn-sm lg:btn-lg'><a href="tel: +17033301594">Call Today: (703) 330-1594</a></button>
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
