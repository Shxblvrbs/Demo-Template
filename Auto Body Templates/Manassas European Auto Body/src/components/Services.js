import React from 'react';
// icon
import { BsArrowUpRight } from 'react-icons/bs';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

// services data
const services = [
  {
    name: 'Paint & Refreshing',
    description:
      'Expert Paint Matching, Full Vehicle Repainting, Paintless Dent Repair (PDR), Custom Paint Jobs, Color Matching, Clear Coat Application',
    link: 'Learn more',
  },
  {
    name: 'Collision Repair',
    description:
      'Frame Straightening, Panel Replacement, Bumper Repair, Structural Repairs, Accident Damage, and Steel Welding',
    link: 'Learn more',
  },
  {
    name: 'Auto Body & Cosmetic Repairs',
    description:
      'Dent and Ding Repair, Hail Damage Repair, Body Panel Alignment, Scratch Removal',
    link: 'Learn more',
  },
  {
    name: 'and More',
    description:
      '',
    link: 'Learn more',
  },
];

const Services = () => {
  return (
    <section className='section' id='services'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text & image || edit services background image HERE */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 lg:bg-services lg:bg-left-bottom bg-no-repeat mb-12 lg:mt-0'
          >
          
            <h2 className='h2 text-accent mb-4'>What We Do</h2>
            <h3 className='h3 max-w-[455px] mb-10 lg:mb-10'>
              Don't see a service? Call us anyways!
            </h3>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'><a href="tel: +17033301594">Call For a Free Estimate</a></button>
              <Link
                to='work'
                activeClass='active'
                smooth={true}
                spy={true}
                className='cursor-pointer text-gradient btn-link'
              >
              See Pictures of Our Work
              </Link>
            </div>
          </motion.div>
          {/* services */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            {/* service list */}
            <div>
              {services.map((service, index) => {
                // destructure service
                const { name, description, link } = service;
                return (
                  <div
                    className='border-b border-white/20 h-[146px] mb-[38px] flex'
                    key={index}
                  >
                    <div className='max-w-[476px]'>
                      <h4 className='text-[20px] tracking-wider font-primary font-semibold mb-6'>
                        {name}
                      </h4>
                      <p className='font-secondary leading-tight text-sm lg:text-lg'>
                        {description}
                      </p>
                    </div>
                    <div className='flex flex-col flex-1 items-end'>
                    </div>
                  </div>
                );
              })}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Services;
