import React from "react";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <div className=" w-[90vw] mx-auto">
      <h1 className="text-2xl font-bold py-0.5 text-center pt-4">
        Our <span className="text-pink-600">Premium Services</span>
      </h1>
      <p className="text-center pb-10 w-[60vw] mx-auto">
        At Ganjala Clinic, we offer a wide range of medical services to cater to
        your health needs. Our team of experienced professionals is dedicated to
        providing the highest quality care.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 py-4">
        <div className="bg-white rounded shadow h-[24rem] w-full">
          <h1 className="font-bold text-2xl pl-4 text-pink-600 py-6">icon1</h1>
          <h2 className="font-bold pl-4 text-2xl italic mb-6">Laser Treatments</h2>
          <p className="text-md pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt, repellendus itaque nam ut totam ex repudiandae iure
            suscipit, eum eos exercitationem ullam est ipsa fugit? Est excepturi
            quaerat nobis?
          </p>
          <Link to="">
            <p className="text-md text-pink-600 hover:underline hover:text-pink-900 py-10 pl-4">
              Learn more <KeyboardArrowRightSharpIcon />
            </p>
          </Link>
        </div>
        <div className="bg-white rounded shadow h-[24rem] w-full">
          <h1 className="font-bold text-2xl pl-4 text-pink-600 py-6">icon2</h1>
          <h2 className="font-bold pl-4 text-2xl italic mb-6">Botox & Filters</h2>
          <p className="text-md pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt, repellendus itaque nam ut totam ex repudiandae iure
            suscipit, eum eos exercitationem ullam est ipsa fugit? Est excepturi
            quaerat nobis?
          </p>
          <Link to="">
            <p className="text-md text-pink-600 hover:underline hover:text-pink-900 py-10 pl-4">
              Learn more <KeyboardArrowRightSharpIcon />
            </p>
          </Link>
        </div>
        <div className="bg-white rounded shadow h-[24rem] w-full">
          <h1 className="font-bold text-2xl pl-4 text-pink-600 py-6">icon3</h1>
          <h2 className="font-bold pl-4 text-2xl italic mb-6">Body Contouring</h2>
          <p className="text-md pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt, repellendus itaque nam ut totam ex repudiandae iure
            suscipit, eum eos exercitationem ullam est ipsa fugit? Est excepturi
            quaerat nobis?
          </p>
          <Link to="">
            <p className="text-md text-pink-600 hover:underline hover:text-pink-900 py-10 pl-4">
              Learn more <KeyboardArrowRightSharpIcon />
            </p>
          </Link>
        </div>
        <div className="bg-white rounded shadow h-[24rem] w-full">
          <h1 className="font-bold text-2xl pl-4 text-pink-600 py-6">icon4</h1>
          <h2 className="font-bold pl-4 text-2xl italic mb-6">Tummy Tuck</h2>
          <p className="text-md pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt, repellendus itaque nam ut totam ex repudiandae iure
            suscipit, eum eos exercitationem ullam est ipsa fugit? Est excepturi
            quaerat nobis?
          </p>
          <Link to="">
            <p className="text-md text-pink-600 hover:underline hover:text-pink-900 py-10 pl-4">
              Learn more <KeyboardArrowRightSharpIcon />
            </p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default Services;
