import React from 'react';
// countup
import CountUp from 'react-countup';
// intersection observer hook
import { useInView } from 'react-intersection-observer';
// motion
import { motion } from 'framer-motion';
// variant
import { fadeIn } from '../variants';
import { Link } from 'react-scroll';

const About = () => {
  const [ref, inView] = useInView({
    threshold: 0.5,
  });
  return (
    <section className='section lg:mt-[70px]' id='about' ref={ref}>
      <div className='container mx-auto'>
        <div className='flex flex-col gap-y-10 lg:flex-row lg:items-center lg:gap-x-20 lg:gap-y-0 h-screen'>
          {/* img */}
          {/* <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 bg-about bg-contain bg-no-repeat h-[640px] mix-blend-lighten bg-top'
          ></motion.div> */}
          {/* text */}
          <motion.div
            variants={fadeIn('left', 0.5)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1'
          >
            <h2 className='h2 text-accent'>About Us</h2>
            <h3 className='h3 mb-4'>
              Precision. Craftsmanship. Trust.
            </h3>
            <p className='mb-6'>
            Manassas European Auto Body has been serving Northern Virginia, DC, and Maryland from the same location for over 30 years. Known as a staple in the community, we’re trusted for delivering high-quality European auto body repair with fast turnaround and fair pricing. From minor dents to full collision restorations, our certified technicians uphold the highest standards of craftsmanship and care — treating every vehicle like it’s their own.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              
              <div>
                
              </div>
              <div>
                
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-lg'><a href="tel: +17033301594">Call For a Free Estimate</a></button>
              <Link
                to='services'
                activeClass='active'
                smooth={true}
                spy={true}
                className='cursor-pointer text-gradient btn-link'
              >
              Our Services
              </Link>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
