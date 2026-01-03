import React from "react";
import AboutImg from "../assets/Hero/HeroImg.jpeg";
import Hyrda from "../assets/Images/Hyrda.webp";
import Button from "../Component/Button";
import { Link } from "react-scroll";
import { motion } from "motion/react";
import { useGSAP } from "@gsap/react";
import gsap from "gsap";

const About = () => {
  useGSAP(() => {
    gsap.fromTo(
      ".aboutImg",
      {
        x: -120,
        borderRadius: "100%",
      },
      {
        ease: "power1.inOut",
        duration: 2, 
        delay: 0.5,
        borderRadius: "3%",
        x: 0,
      }
    );

    gsap.fromTo(
      ".aboutSection",
      {
        opacity: 0,
        y: 30,
        x: 50,
      },
      {
        opacity: 1,
        y: 0,
        x: 0,
        delay: 1,
        stagger: 0.7,
      }
    );
  }, []);

  return (
    <div
      id="about"
      className=" flex flex-col md:flex-row gap-5 md:gap-20 w-[80vw] mx-auto py-6 md:py-10"
    >
      <img
        src={Hyrda}
        alt=""
        className="aboutImg w-[25rem] h-[28rem] rounded-xl"
        // whileHover={{ scale: 1.1 }}
        // whileTap={{ scale: 0.9 }}
        // transition={{duration:0.5, ease:"easeInOut"}}
      />

      <div className="aboutSection">
        <h1 className="aboutSection font-bold text-3xl pb-2 md:pb-8">
          About <span className="text-pink-600">Ganjala Clini</span>
        </h1>
        <p className="aboutSection pb-4 md:pb-6 text-lg text-gray-500">
          Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
          obcaecati labore consequatur assumenda reiciendis soluta dignissimos,
          impedit eius quae quos, eaque molestias harum dolores tempora rem
          nulla odio ab quibusdam!
        </p>
        <h3 className="aboutSection font-semibold text-xl">Our Approach</h3>
        <ul className="px-8 pt-2 pb-8 text-gray-600">
          <li className="aboutSection">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </li>
          <li className="aboutSection">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </li>
          <li className="aboutSection">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit.
          </li>
        </ul>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 py-4 md:py-8 gap-4">
          <span className="bg-white w-65 lg:w-80 py-2 rounded-lg shadow-md px-4">One</span>
          <span className="bg-white w-65 lg:w-80 py-2 rounded-lg shadow-md px-4">Two</span>
          <span className="bg-white w-65 lg:w-80 py-2 rounded-lg shadow-md px-4">Three</span>
          <span className="bg-white w-65 lg:w-80 py-2 rounded-lg shadow-md px-4">Four</span>
        </div> */}
        <Link
          className="aboutSection"
          to="specialists"
          spy={true}
          smooth={true}
          offset={-50}
          duration={500}
        >
          <Button text="Meet our Specialists" />
        </Link>
      </div>
    </div>
  );
};

export default About;
