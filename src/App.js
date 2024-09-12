import React from 'react';
// components
import Banner from './components/Banner';
import Header from './components/Header';
import Nav from './components/Nav';
import About from './components/About';
import Services from './components/Services';
import Work from './components/Work';
import Contact from './components/Contact';
import bgVideo from '/Java Full Stack/Demo Template/src/banner-video.mp4'

const App = () => {
  return (
    <div className="">
    <video className= "object-cover -z-[1] absolute brightness-[0.25]" src={bgVideo} autoPlay loop muted />
      <Header />
      <Banner />
    <div className='mt-16 bg-site bg-no-repeat bg-cover overflow-hidden'>
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
