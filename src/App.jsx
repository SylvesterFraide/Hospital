import React from "react";
import Navbar from "./Component/Navbar";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Component/Home";
import Services from "./Pages/Services";
import About from "./Pages/About";
import Specialists from "./Pages/Specialists";
import Contact from "./Pages/Contact";
import Appointment from "./Pages/Appointment";
import Footer from './Component/Footer';

function App() {
  return (
    <div className='bg-pink-100'>
      {/* <div className="px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">// </div> */}
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Services />} />
          <Route path="/about" element={<About />} />
          <Route path="/specialists" element={<Specialists />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/appointment" element={<Appointment />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
}
export default App;
