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
    name: 'Repairs',
    description:
      'Leaks, Drywall, Patching Holes, Broken Tiles, Doors, Windows, Caulking, Grout Touch-Ups, Cabinets, Furniture, Light Switches, Tightening Loose Fixtures, Drains',
    link: 'Learn more',
  },
  {
    name: 'Assembly & Installation',
    description:
      'Furniture, Shelves, Mounting TVs, Hanging Pictures, Mirror Installation, Curtain Rods, Blinds, Cabinets, Doorbells, Smoke Detectors, Wall-Mounted Storage Installation',
    link: 'Learn more',
  },
  {
    name: 'Upgrades',
    description:
      'Interior & Exterior Painting, Upgrading Light Fixtures, Replacing Faucets, Upgrading Ceiling Fans, Weatherproofing, Smart Home Systems, Staining Wood Surfaces',
    link: 'Learn more',
  },
  {
    name: 'Home Customization',
    description:
      'Closet Organization, Installing Accent Walls, Crafting Window Seats, Building Mudroom Cubbies, Installing Pet Doors, Setting Up Home Offices, Custom Wall-Mounted Bike Racks.',
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
              <button className='btn btn-lg'><a href="tel: +17036466460">Call Today!</a></button>
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
                      <a
                        href='#'
                        className='btn w-9 h-9 mb-[42px] flex justify-center items-center'
                      >
                        <BsArrowUpRight />
                      </a>
                      <a href='#' className='text-gradient text-sm'>
                        {link}
                      </a>
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
