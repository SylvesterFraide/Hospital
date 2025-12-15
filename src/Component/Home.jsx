import React from 'react';
import Hero from './Hero';
import Services from '../Pages/Services';
import About from '../Pages/About';
import Contact from '../Pages/Contact';
// import Newslater from './Newslater';


const Home = () => {
  return (
    <div>
      <Hero />
      <Services />
      <About />
      <Contact />
      {/* <Newslater /> */}
    </div>
  );
}

export default Home;