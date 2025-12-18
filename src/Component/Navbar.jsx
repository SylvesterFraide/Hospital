import React, { useState } from "react";
import Button from "./Button";
import MenuSharpIcon from "@mui/icons-material/MenuSharp";
import CloseSharpIcon from "@mui/icons-material/CloseSharp";
import { Link } from "react-scroll";

const Navbar = () => {
  const [activeMenu, setActiveMenu] = useState("Home");
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
      <div className="flex justify-between items-center h-[10vh] w-full px-3 sm:px-6 bg-white shadow-md sticky top-0 z-50">
        <Link
        
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="home"
          onClick={() => setActiveMenu("Home")}
        >
          <p className="text-pink-800 text-lg font-semibold">Ganjala Clinic</p>
        </Link>
        <ul  className="items-center gap-6 hidden lg:flex text-gray-400 font-semibold ">
          <li>
            <Link
            
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              to=""
              onClick={() => setActiveMenu("Home")}
            >
              <p>Home</p>
              <span
                className={`h-1 w-full bg-pink-600 rounded-md ${
                  activeMenu === "Home" ? "block" : "hidden"
                }`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
            
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active"
              to="services"
              onClick={() => setActiveMenu("Services")}
            >
              <p>Services</p>
              <span
                className={`h-1 w-full bg-pink-600 rounded-md ${
                  activeMenu === "Services" ? "block" : "hidden"
                }`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
            
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active"
              to="about"
              onClick={() => setActiveMenu("About")}
            >
              <p>About Us</p>
              <span
                className={`h-1 w-full bg-pink-600 rounded-md ${
                  activeMenu === "About" ? "block" : "hidden"
                }`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
            
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active"
              to="specialists"
              onClick={() => setActiveMenu("Specialists")}
            >
              <p>Our Specialists</p>
              <span
                className={`h-1 w-full bg-pink-600 rounded-md ${
                  activeMenu === "Specialists" ? "block" : "hidden"
                }`}
              ></span>
            </Link>
          </li>
          <li>
            <Link
            
              spy={true}
              smooth={true}
              offset={-50}
              duration={500}
              activeClass="active"
              to="contact"
              onClick={() => setActiveMenu("Contact")}
            >
              <p>Contact</p>
              <span
                className={`h-1 w-full bg-pink-600 rounded-md ${
                  activeMenu === "Contact" ? "block" : "hidden"
                }`}
              ></span>
            </Link>
          </li>
        </ul>
        <Link
        
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          to="appointment"
          className="hidden lg:block"
        >
          <Button text="Book Appointment" />
        </Link>

        <div className="lg:hidden" onClick={() => setIsMenuOpen(!isMenuOpen)}>
          {isMenuOpen ? <CloseSharpIcon /> : <MenuSharpIcon />}
        </div>
      </div>

      {/* mobile menu*/}
      <ul 
        className={`gap-6 space-y-3 ${
          isMenuOpen ? "block" : "hidden"
        } lg:hidden flex flex-col text-gray-700 py-4 px-12 font-semibold bg-pink-200`}
      >
        <li>
          <Link
          
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active"
            to="home"
            onClick={() => setActiveMenu("Home")}
          >
            <p
              className={`h-1 w-full block rounded-md ${
                activeMenu === "Home" ? "text-pink-600" : "text-gray-700"
              }`}
            >
              Home
            </p>
          </Link>
        </li>
        <li>
          <Link
          
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active"
            to="services"
            onClick={() => setActiveMenu("Services")}
          >
            <p
              className={`h-1 w-full block rounded-md ${
                activeMenu === "Services" ? "text-pink-600" : "text-gray-700"
              }`}
            >
              Services
            </p>
          </Link>
        </li>
        <li>
          <Link
          
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active"
            to="about"
            onClick={() => setActiveMenu("About")}
          >
            <p
              className={`h-1 w-full block rounded-md ${
                activeMenu === "About" ? "text-pink-600" : "text-gray-700"
              }`}
            >
              About Us
            </p>
          </Link>
        </li>
        <li>
          <Link
          
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active"
            to="specialists"
            onClick={() => setActiveMenu("Specialists")}
          >
            <p
              className={`h-1 w-full block rounded-md ${
                activeMenu === "Specialists" ? "text-pink-600" : "text-gray-700"
              }`}
            >
              Our Specialists
            </p>
          </Link>
        </li>
        <li>
          <Link
          
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
            activeClass="active"
            to="contact"
            onClick={() => setActiveMenu("Contact")}
          >
            <p
              className={`h-1 w-full block rounded-md ${
                activeMenu === "Contact" ? "text-pink-600" : "text-gray-700"
              }`}
            >
              Contact
            </p>
          </Link>
        </li>

        <Link
        
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
          activeClass="active"
          to="appointment"
          className="block lg:hidden"
        >
          <Button text="Book Appointment" />
        </Link>
      </ul>
    </>
  );
};

export default Navbar;
