import React from "react";
import Hyrdra from "../assets/Hero/HeroImg.jpeg";
import mensHydrafacial from "../assets/Images/mens-hydrafacial.webp";
import serviceImg from "../assets/Images/ServiceImg.jpg";
import HeroImg from "../assets/Hero/HeroImg.jpeg";
import { Link } from "react-scroll";

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
      <div className="flex flex-wrap gap-5 py-10 w-[80vw] mx-auto justify-center">
        <div className="flex h-120  w-80 bg-white rounded-lg shadow-lg relative">
          <img
            src={Hyrdra}
            alt="Hydra"
            className="w-80 rounded-md h-60 absolute hover:contrast-80"
          />
          <div className="bg-pink-100 px-2 shadow-md rounded-md h-60 w-70 mx-auto mt-52 relative hover:scale-110 transition-transform duration-300">
            <h2 className="font-bold text-2xl py-2">Dr. Jade Caden</h2>
            <h3 className="text-pink-600 text-xl font-semibold">
              Aesthetic Physician
            </h3>
            <p className="text-lg text-gray-600 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in
              laudantium nihil eius.
            </p>
            <div className=" flex justify-evenly items-center cursor-pointer">
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Hydrafacial
              </p>
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Thread
              </p>
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Sculpting
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-120 w-80 bg-white rounded-lg shadow-lg relative">
          <img
            src={mensHydrafacial}
            alt="mensHydrafacial"
            className="w-80 rounded-md h-60 absolute hover:contrast-80"
          />
          <div className="bg-pink-100 px-2 shadow-md rounded-md h-60 w-70 mx-auto mt-52 relative hover:scale-110 transition-transform duration-300">
            <h2 className="font-bold text-2xl py-2">Dr. Rinah Fraide</h2>
            <h3 className="text-pink-600 text-xl font-semibold">
              Plastic Sagion
            </h3>
            <p className="text-lg text-gray-600 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in
              laudantium nihil eius.
            </p>
            <div className=" flex justify-evenly items-center cursor-pointer">
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Botox
              </p>
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Filter
              </p>
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Laser
              </p>
            </div>
          </div>
        </div>

        <div className="flex h-120 w-80 bg-white rounded-lg shadow-lg relative">
          <img
            src={serviceImg}
            alt="serviceImg"
            className="w-80 rounded-md h-60 absolute hover:contrast-80"
          />
          <div className="bg-pink-100 px-2 shadow-md rounded-md h-60 w-70 mx-auto mt-52 relative hover:scale-110 transition-transform duration-300">
            <h2 className="font-bold text-2xl py-2">Dr. Jaylan Lamine</h2>
            <h3 className="text-pink-600 text-xl font-semibold">
              Dermatologiest
            </h3>
            <p className="text-lg text-gray-600 py-4">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel in
              laudantium nihil eius.
            </p>
            <div className=" flex justify-evenly items-center cursor-pointer">
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Facelifts
              </p>
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Rhinoplasty
              </p>
              <p className="text-md text-pink-600 font-semibold hover:underline">
                Sculpting
              </p>
            </div>
          </div>
        </div>
      </div>

      <div
        className="text-center py-10 my-10 contrast-70 rounded-md"
        style={{
          backgroundImage: `url(${HeroImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <h2 className="text-xl font-bold pb-4 ">
          Ready to Consult with our Specialists.?
        </h2>
        <p className="font-semibold text-md">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Eum, qui
          odit.
        </p>

        <div className=" flex flex-col md:flex-row items-center gap-4 justify-center">
          <button className="bg-pink-800 text-white py-2 px-6 rounded-full hover:bg-pink-600">
            Book Your Consultation Now{" "}
          </button>

          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-50}
            duration={500}
          >
            <button className=" bg-pink-800 text-white py-2 px-6 rounded-full hover:bg-pink-600">
              Contact us
            </button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Specialists;
