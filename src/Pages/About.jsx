import React from "react";
import AboutImg from "../assets/Hero/HeroImg.jpeg";
import Hyrda from "../assets/Images/Hyrda.webp";
import Button from "../Component/Button";

const About = () => {
  return (
    
      <div id="about" className="flex flex-col lg:flex-row gap-5 lg:gap-20 w-[80vw] mx-auto py-6 lg:py-10">
        <img src={Hyrda} alt="" className="w-[25rem] h-[28rem] rounded-xl" />
        <div className="">
          <h1 className="font-bold text-3xl pb-2 md:pb-8">
            About <span className="text-pink-600">Ganjala Clini</span>
          </h1>
          <p className=" pb-4 md:pb-6 text-lg text-gray-500">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Iure
            obcaecati labore consequatur assumenda reiciendis soluta
            dignissimos, impedit eius quae quos, eaque molestias harum dolores
            tempora rem nulla odio ab quibusdam!
          </p>
          <h3 className="font-semibold text-xl">Our Approach</h3>
          <ul className="px-8 pt-2 pb-8 text-gray-600">
            <li className="">
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
            </li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
            <li>Lorem ipsum dolor sit amet consectetur, adipisicing elit.</li>
          </ul>

          {/* <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 py-4 md:py-8 gap-4">
          <span className="bg-white w-65 lg:w-80 py-2 rounded-lg shadow-md px-4">One</span>
          <span className="bg-white w-65 lg:w-80 py-2 rounded-lg shadow-md px-4">Two</span>
          <span className="bg-white w-65 lg:w-80 py-2 rounded-lg shadow-md px-4">Three</span>
          <span className="bg-white w-65 lg:w-80 py-2 rounded-lg shadow-md px-4">Four</span>
        </div> */}

          <Button text="Meet our Specialists" />
        </div>
      </div>
  );
};

export default About;
