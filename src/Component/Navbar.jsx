import React from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <div className="flex justify-between items-center h-[10vh] w-full px-6 ">
      <NavLink to="/">
        <p className="text-pink-800 text-lg font-semibold">Ganjala Clinic</p>
      </NavLink>
      <ul className="items-center gap-6 hidden md:flex text-gray-400 font-semibold">
        <li><NavLink to="/">Home</NavLink></li> 
        <li><NavLink to="/services">Services</NavLink></li>
        <li><NavLink to="/about">About Us</NavLink></li>
        <li><NavLink to="/specialists">Our Specialists</NavLink></li>
        <li><NavLink to="/contact">Contact</NavLink></li>
      </ul>
      <NavLink to="/appointment">
        <Button text="Book Appointment" />
      </NavLink>
    </div>
  );
};

export default Navbar;
