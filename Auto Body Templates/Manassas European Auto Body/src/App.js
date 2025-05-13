import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import bgVideo from './banner-video.mp4';

const App = () => {
  return (
    <div className="bg-site-sm md:bg-none">
    <video className= "lg:visible invisible lg:-z-10 lg:object-cover fixed lg:brightness-[0.25]" src={bgVideo} autoPlay loop muted />
    <div className="md:bg-none md:bg-no-repeat bg-repeat overflow-hidden bg-center">
      <Header />
      <Banner />
    </div>
    <div className='-mt-1 md:mt-16 bg-none md:bg-site-lg overflow-hidden'>
      <Nav />
      <About />
      <Services />
      {/* <Work /> */}
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
    </div>
  );
};

export default App;
