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
              For over 30 years, Manassas European Auto Body has proudly served Northern Virginia, DC, and Maryland — all from the same location in Manassas. As a trusted name in the community, we’ve earned our reputation through consistent, high-quality repairs and a commitment to customer satisfaction. Specializing in European vehicles, our certified technicians use manufacturer-approved tools and techniques to ensure every repair meets exacting standards. From minor dents and paintwork to full collision restorations, we approach every job with the same care and attention to detail. With fast turnaround times, fair pricing, and personalized service, we treat every vehicle as if it were our own — because quality and trust matter.
            </p>
            {/* stats */}
            <div className='flex gap-x-6 lg:gap-x-10 mb-12'>
              
              <div>
                
              </div>
              <div>
                
              </div>
            </div>
            <div className='flex gap-x-8 items-center'>
              <button className='btn btn-sm lg:btn-lg'><a href="tel: +17033301594">Call Today: (703) 330-1594</a></button>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default About;
