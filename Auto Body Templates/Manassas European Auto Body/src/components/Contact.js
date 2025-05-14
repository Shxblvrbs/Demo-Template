import React from 'react';
// motion
import { motion } from 'framer-motion';
// variants
import { fadeIn } from '../variants';

const Contact = () => {
  return (
    <section className='mb-10 py-16 lg:section' id='contact'>
      <div className='container mx-auto'>
        <div className='flex flex-col lg:flex-row'>
          {/* text */}
          <motion.div
            variants={fadeIn('right', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 flex justify-start items-center'
          >
            <div>
              <h4 className='text-xl uppercase text-accent font-medium mb-2 tracking-wide'>
                Get in touch
              </h4>
              <h2 className='text-[45px] lg:text-[90px] leading-none mb-12'>
                Let's work <br /> together!
              </h2>
            </div>
          </motion.div>

          {/* footer info block */}
          <motion.div
            variants={fadeIn('left', 0.3)}
            initial='hidden'
            whileInView={'show'}
            viewport={{ once: false, amount: 0.3 }}
            className='flex-1 text-white flex flex-col justify-center gap-y-6 lg:pl-10 border rounded-2xl p-8 bg-black/20 backdrop-blur-md'
          >
            <div>
              <h5 className='text-accent text-3xl font-semibold mb-1'>Phone</h5>
              <p className="text-xl">+1 (703) 330-1594</p>
            </div>
            <div>
              <h5 className='text-accent text-3xl font-semibold mb-1'>Email</h5>
              <p className="text-xl">info@manassaseuropeanautobody.com</p>
            </div>
            <div>
              <h5 className='text-accent text-3xl font-semibold mb-1'>Location</h5>
              <p className="text-xl">8393 Euclid Ave, Unit F, Manassas, VA 20111</p>
            </div>
            <div>
              <h5 className='text-accent text-3xl font-semibold mb-1'>Hours</h5>
              <p className="text-xl">Mon–Fri: 7:30am – 4:00pm<br />Sat: Closed<br />Sun: Closed</p>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
