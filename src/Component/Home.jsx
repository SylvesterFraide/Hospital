import React from "react";
import Hero from "./Hero";
import Services from "../Pages/Services";
import About from "../Pages/About";
import Contact from "../Pages/Contact";
import Appointment from "../Pages/Appointment";
import Specialists from "../Pages/Specialists";
// import Newslater from './Newslater';

const Home = () => {
  return (
    <div id="home">
      <Hero />
      <Services />
      <About />
      <Specialists />
      <Contact />
      <Appointment />
      {/* <Newslater /> */}
    </div>
  );
};

export default Home;
