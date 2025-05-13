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
            For over 30 years, Manassas European Auto Body has proudly served Northern Virginia, Washington, DC, and Maryland — all from the same convenient location in Manassas. As a long-standing fixture in the community, we’ve built our reputation on trust, consistency, and a commitment to excellence in European auto body repair. Our team of certified technicians brings decades of combined experience to every job, whether it's a small dent, paint correction, or a complete collision restoration. We use manufacturer-approved techniques and high-quality materials to ensure every repair meets or exceeds factory standards. With a focus on fast turnaround times, fair pricing, and personalized service, we treat every vehicle with the same care and attention we would our own. At Manassas European Auto Body, your satisfaction — and your car’s performance and appearance — are always our top priorities.
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
