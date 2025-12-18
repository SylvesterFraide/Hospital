import React from "react";
import HeroImg from "../assets/Hero/HeroImg.jpeg";
import mensHydrafacial from  '../assets/Images/mens-hydrafacial.webp';

const Contact = () => {
  return (
    <div className="w-[90vw] mx-auto">
      <h1 className="text-3xl font-bold text-center mt-4">
        Contact <span className="text-pink-600">Our Clinic</span>
      </h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="my-4 flex flex-col lg:flex-row gap-[2vw] w-[90vw] mx-auto">
        <div className="bg-white w-full lg:w-[35vw] pt-6 hover:contrast-95">
          <section className=" w-full lg:w-[30vw] px-11 lg:px-0 mx-0 lg:mx-auto">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="flex gap-6 py-4">
              <p className="">Icon1</p>
              <div className="">
                <h5 className="font-semibold">Our Location</h5>
                <p className="text-gray-600">
                  123 Nameless Avenue, CBD Nairobi
                </p>
              </div>
            </div>
            <div className="flex gap-6 pb-4">
              <p className="">Icon2</p>
              <div className="">
                <h5 className="font-semibold">Phone Number</h5>
                <p className="text-gray-600">Appointments: +254 700 000 000</p>
                <p className="text-gray-600">Emergency: +254 712 000 000</p>
              </div>
            </div>
            <div className="flex gap-6">
              <p className="">Icon3</p>
              <div className="">
                <h5 className="font-semibold">Email</h5>
                <p className="text-gray-600">clinic@gmail.com</p>
                <p className="text-gray-600">infor@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-6 py-4">
              <p className="">Icon4</p>
              <div className="">
                <h5 className="font-semibold">Working Ours</h5>
                <p className="text-gray-600">Mon-Fri: 9:00AM-5:00PM</p>
                <p className="text-gray-600">Sat-Sun: 10:00AM-4:00PM</p>
              </div>
            </div>
            <img src={mensHydrafacial} alt="" className="w-85 h-50 rounded-lg pb-2" />
          </section>
        </div>

        <div className="bg-white w-full lg:w-[53vw] py-4 hover:contrast-95">
          <form action="" className=" w-full lg:w-[36vw] px-11 lg:px-auto pt-4">
            <fieldset>
              {" "}
              <legend className="font-semibold text-lg py-2">
                Send Us A Message
              </legend>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-15">
                <div className="flex flex-wrap  flex-col gap-1">
                  <label htmlFor="name" className="block mb-">
                    Full Name:
                  </label>
                  <input
                    type="text"
                    placeholder="Your name"
                    name="name"
                    required
                    className="border outline-none rounded-md px-4 py-1"
                  />
                </div>
                <div className="flex flex-wrap gap-1 flex-col ">
                  <label htmlFor="number">Phone Number</label>
                  <input
                    type="number"
                    name="number"
                    placeholder="+254 XX XXX XXX"
                    required
                    className="border outline-none rounded-md mb-4 px-4 py-1"
                  />
                </div>
              </div>
              <label htmlFor="email" className="block mb-1 mt-4">
                Email Address
              </label>
              <input
                type="email"
                placeholder="your@gmail.com"
                name="email"
                required
                className="border outline-none rounded-md w-full mb-6 px-4 py-1"
              />
              <label htmlFor="message" className="block mb-1">
                Your message
              </label>
              <textarea
                name="message"
                required
                className="border outline-none rounded-md w-full px-4 mb-6 px-4"
              ></textarea>
              <label htmlFor="" className="block mb-1">
                Services Interested In:
              </label>
              <select className="border outline-none rounded-md w-full">
                <option value="botox">Select a service</option>

                <option value="laser" id="laser" className="text-gray-600">
                  Laser Treatments
                </option>
                <option value="botox" id="botox" className="text-gray-600">
                  Botox & Filters
                </option>
                <option value="botox" id="body" className="text-gray-600">
                  Body Contouring
                </option>
                <option value="botox" id="tummy" className="text-gray-600">
                  Tummy Tuck
                </option>
                <option value="botox" id="other" className="text-gray-600">
                  Other
                </option>
              </select>
              <button
                type="submit"
                className="bg-pink-800 hover:bg-pink-600 text-white rounded-full px-4 py-2 my-8"
              >
                Send Message
              </button>
            </fieldset>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
