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
    name: 'Landscaping',
    description:
      'Lawn Care (Mowing, Edging, Seeding, Aeration), Garden Design (Flowers, Shrubs, Trees), Fertilization, Disease Managment, Hardscaping (Patios, Walkways, Retaining Walls)',
    link: 'Learn more',
  },
  {
    name: 'Tree Service',
    description:
      'Planting, Removal, Trimming, Pruning, Fertilization, Inspections, Feeding, Cabling & Bracing, Pest & Disease Management, Storm Damage, Stump Grinding, Clearing, ',
    link: 'Learn more',
  },
  {
    name: 'Home Service',
    description:
      'Power Washing (Homes, Decks, Driveways), Chimney Repair, Exterior Painting, Cleaning (Gutter, Window, Roofs), Deck Staining & Sealing, Fence Repair & Staining, and more',
    link: 'Learn more',
  },
  {
    name: 'Removal/Haul Away',
    description:
      'Debris Removal, Junk Removal & Hauling, Cleanouts (Garage, Attic, Basements), Seasonal Cleanups (Fall, Spring)',
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
              <button className='btn btn-lg'><a href="tel: +14438661805">Call Today!</a></button>
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
