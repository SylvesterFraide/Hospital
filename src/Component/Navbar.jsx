import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  return (
    <div className="flex justify-between items-center h-[10vh] w-full px-6 bg-white shadow-md sticky top-0 z-50">
      <NavLink to="/" onClick={() => setActiveMenu("Home")}>
        <p className="text-pink-800 text-lg font-semibold">Ganjala Clinic</p>
      </NavLink>
      <ul className="items-center gap-6 hidden md:flex text-gray-400 font-semibold">
        <li>
          <NavLink to="/" onClick={() => setActiveMenu("Home")}>
            <p>Home</p>
            <span className={`h-1 w-full bg-pink-600 rounded-md ${activeMenu === "Home" ? "block" : "hidden"}`}></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/services" onClick={() => setActiveMenu("Services")}>
            <p>Services</p>
            <span className={`h-1 w-full bg-pink-600 rounded-md ${activeMenu === "Services" ? "block" : "hidden"}`}></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/about" onClick={() => setActiveMenu("About")}>
            <p>About Us</p>
            <span className={`h-1 w-full bg-pink-600 rounded-md ${activeMenu === "About" ? "block" : "hidden"}`}></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/specialists" onClick={() => setActiveMenu("Specialists")}>
            <p>Our Specialists</p>
            <span className={`h-1 w-full bg-pink-600 rounded-md ${activeMenu === "Specialists" ? "block" : "hidden"}`}></span>
          </NavLink>
        </li>
        <li>
          <NavLink to="/contact" onClick={() => setActiveMenu("Contact")}>
            <p>Contact</p>
            <span className={`h-1 w-full bg-pink-600 rounded-md ${activeMenu === "Contact" ? "block" : "hidden"}`}></span>
          </NavLink>
        </li>
      </ul>
      <NavLink to="/appointment">
        <Button text="Book Appointment" />
      </NavLink>
    </div>
  );
};

export default Navbar;
