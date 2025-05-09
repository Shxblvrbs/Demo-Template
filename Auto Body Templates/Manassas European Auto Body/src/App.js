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
    <div>
    <video className= "lg:visible invisible lg:-z-10 lg:object-cover absolute lg:brightness-[0.25]" src={bgVideo} autoPlay loop muted />
    <div className="lg:bg-none bg-site-sm lg:bg-site-lg lg:bg-no-repeat bg-repeat overflow-hidden bg-center">
      <Header />
      <Banner />
    </div>
    <div className='-mt-1 lg:mt-16 bg-site-sm lg:bg-site-lg lg:bg-no-repeat bg-repeat overflow-hidden bg-center'>
      <Nav />
      <About />
      <Services />
      <Work />
      <Contact />
      {/* <div className='h-[4000px]'></div> */}
    </div>
    </div>
  );
};

export default App;
