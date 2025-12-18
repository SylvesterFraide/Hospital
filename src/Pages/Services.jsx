import React from "react";
import KeyboardArrowRightSharpIcon from "@mui/icons-material/KeyboardArrowRightSharp";
import { Link } from "react-router-dom";
import ServiceImg from '../assets/Images/ServiceImg.jpg';

const Services = () => {
  return (
    <div id="services" className=" w-[80vw] mx-auto py-6">
      <h1 className="text-2xl font-bold py-0.5 text-center">
        Our <span className="text-pink-600">Premium Services</span>
      </h1>
      <p className="text-center pb-10 w-[60vw] mx-auto py-2 text-lg">
       fuga cumque natus nostrum eos ex minus enim. Totam dolor repellat hic facere optio sunt, tempora omnis amet.
      </p>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 py-4">
        <div className="bg-white rounded shadow h-[21rem] w-full cursor-pointer hover:contrast-90 transition ease-in-out shadow-md">
          <h1 className="font-bold text-md pl-4 text-pink-600 py-6">icon1</h1>
          <h2 className="font-bold pl-4 text-lg italic mb-6">
            Laser Treatments
          </h2>
          <p className="text-base pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt, repellendus itaque nam ut totam....
          </p>
          <Link to="">
            <p className="text-md text-pink-600 hover:underline hover:text-pink-900 py-10 pl-4">
              Learn more <KeyboardArrowRightSharpIcon />
            </p>
          </Link>
        </div>
        <div className="bg-white rounded shadow h-[21rem] w-full cursor-pointer hover:contrast-90 transition ease-in-out shadow-md">
          <h1 className="font-bold text-lg pl-4 text-pink-600 py-6">icon2</h1>
          <h2 className="font-bold pl-4 text-md italic mb-6">
            Botox & Filters
          </h2>
          <p className="text-md pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt, repellendus itaque nam ut totam....
          </p>
          <Link to="">
            <p className="text-md text-pink-600 hover:underline hover:text-pink-900 py-10 pl-4">
              Learn more <KeyboardArrowRightSharpIcon />
            </p>
          </Link>
        </div>
        <div className="bg-white rounded shadow h-[21rem] w-full cursor-pointer hover:contrast-90 transition ease-in-out shadow-md">
          <h1 className="font-bold text-lg pl-4 text-pink-600 py-6">icon3</h1>
          <h2 className="font-bold pl-4 text-md italic mb-6">
            Body Contouring
          </h2>
          <p className="text-md pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt, repellendus itaque nam ut totam....
          </p>
          <Link to="">
            <p className="text-md text-pink-600 hover:underline hover:text-pink-900 py-10 pl-4">
              Learn more <KeyboardArrowRightSharpIcon />
            </p>
          </Link>
        </div>
        <div className="bg-white rounded shadow h-[21rem] w-full cursor-pointer hover:contrast-90 transition ease-in-out shadow-md">
          <h1 className="font-bold text-lg pl-4 text-pink-600 py-6">icon4</h1>
          <h2 className="font-bold pl-4 text-md italic mb-6">Tummy Tuck</h2>
          <p className="text-md pl-6">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum
            incidunt, repellendus itaque nam ut totam....
          </p>
          <Link to="">
            <p className="text-md text-pink-600 hover:underline hover:text-pink-900 py-10 pl-4">
              Learn more <KeyboardArrowRightSharpIcon />
            </p>
          </Link>
        </div>
      </div>

      <div className="text-center py-10 my-10 contrast-60 rounded-md" style={{
        backgroundImage: `url(${ServiceImg})`,
        backgroundRepeat: 'no-repeat',
        backgroundSize: 'cover',
      }}>
        <h2 className="text-xl font-bold pb-4">
          Ready to transform your look?
        </h2>
        <Link>
          <button className="bg-pink-600 text-white py-2 px-6 rounded-full hover:bg-pink-700">
            {" "}
            Book Your Consultation Now{" "}
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Services;
