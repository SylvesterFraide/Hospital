import React from "react";
import Hyrdra from "../assets/Hero/HeroImg.jpeg";
import mensHydrafacial from "../assets/Images/mens-hydrafacial.webp";
import serviceImg from "../assets/Images/ServiceImg.jpg";

const Specialists = () => {
  return (
    <div id="specialists" className="w-[80vw] mx-auto pt-8">
      <h1 className="text-center text-3xl font-bold">
        Meet Our <span className="text-pink-600">Expert Team</span>{" "}
      </h1>
      <p className="text-center text-lg text-gray-600">
        Lorem ipsum dolor sit, amet consectetur adipisicing elit. Harum quis
        quam sequi,
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 gap-8 py-4 w-[80vw] mx-auto">
        <div className="h-120  w-90 bg-white rounded-lg shadow-lg relative">
          <img
            src={Hyrdra}
            alt="Hydra"
            className="w-90 rounded-md h-60 absolute hover:contrast-80"
          />
          <div className="bg-pink-100 shadow-md rounded-md h-60 w-70 mx-auto mt-52 relative hover:scale-110 transition-transform duration-300">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="h-120 w-90 bg-white rounded-lg shadow-lg relative" >
          <img
            src={mensHydrafacial}
            alt="mensHyrafacial"
            className="w-90 rounded-md h-60 absolute hover:contrast-80"
          />
          <div className="bg-pink-100 shadow-md rounded-md h-60 w-70 mx-auto mt-52 relative hover:scale-110 transition-transform duration-300">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>

        <div className="h-120 w-90 bg-white rounded-lg shadow-lg relative">
          <img
            src={serviceImg}
            alt="serviceImg"
            className="w-90 rounded-md h-60 absolute hover:contrast-80"
          />
          <div className="bg-pink-100 shadow-md rounded-md h-60 w-70 mx-auto mt-52 relative hover:scale-110 transition-transform duration-300">
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit.</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
