import React from "react";
import HeroImg from "../assets/Hero/HeroImg.jpeg";
import mensHydrafacial from "../assets/Images/mens-hydrafacial.webp";
import Button from "../Component/Button";
import ServiceImg from "../assets/Images/ServiceImg.jpg";
import { motion } from "motion/react";
import FacebookSharpIcon from "@mui/icons-material/FacebookSharp";
import YouTubeIcon from "@mui/icons-material/YouTube";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import LocationOnIcon from "@mui/icons-material/LocationOn";
import PhoneIphoneIcon from "@mui/icons-material/PhoneIphone";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import { useForm } from "react-hook-form";

const schema = yup.object().shape({
  firstName: yup.string().required(),
  lastName: yup.string().required(),
  email: yup.string().email().required(),
  phone: yup.number().positive().integer().required(),
});

const Contact = () => {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm({
    resolver: yupResolver(schema),
  });

  const submit = (data) => console.log(data);

  return (
    <div id="contact" className="w-[80vw] py-4 mx-auto">
      <h1 className="text-3xl font-bold text-center mt-4">
        Contact <span className="text-pink-600">Our Clinic</span>
      </h1>
      <p className="text-center">
        Lorem, ipsum dolor sit amet consectetur adipisicing elit.
      </p>
      <div className="my-4 flex flex-wrap flex-col md:flex-row  gap-[2vw] w-[80vw] mx-auto">
        <div className="bg-white w-full md:w-[30vw] pt-6 hover:contrast-95">
          <section className=" w-full md:w-[25vw] px-11 md:px-0 mx-0 md:mx-auto">
            <h3 className="font-semibold text-lg">Get In Touch</h3>
            <div className="flex gap-6 py-4">
              <p className="">
                <LocationOnIcon />
              </p>
              <div className="">
                <h5 className="font-semibold">Our Location</h5>
                <p className="text-gray-600">
                  123 Nameless Avenue, CBD Nairobi
                </p>
              </div>
            </div>
            <div className="flex gap-6 pb-4">
              <p className="">
                <PhoneIphoneIcon />
              </p>
              <div className="">
                <h5 className="font-semibold">Phone Number</h5>
                <p className="text-gray-600">Appointments: +254 700 000 000</p>
                <p className="text-gray-600">Emergency: +254 712 000 000</p>
              </div>
            </div>
            <div className="flex gap-6">
              <p className="">
                <EmailIcon />
              </p>
              <div className="">
                <h5 className="font-semibold">Email</h5>
                <p className="text-gray-600">clinic@gmail.com</p>
                <p className="text-gray-600">infor@gmail.com</p>
              </div>
            </div>
            <div className="flex gap-6 py-4">
              <p className="">
                <AccessTimeIcon />
              </p>
              <div className="">
                <h5 className="font-semibold">Working Ours</h5>
                <p className="text-gray-600">Mon-Fri: 9:00AM-5:00PM</p>
                <p className="text-gray-600">Sat-Sun: 10:00AM-4:00PM</p>
              </div>
            </div>
            <img
              src={mensHydrafacial}
              alt=""
              className="w-85 h-50 rounded-lg pb-2"
            />
          </section>
        </div>

        <div className="bg-white w-full md:w-[48vw] py-4  hover:contrast-95">
          <form action="" className=" w-full md:w-[36vw] px-2 pt-4">
            <fieldset>
              {" "}
              <legend className="font-semibold text-lg py-2">
                Send Us A Message
              </legend>
              <div className="flex flex-col lg:flex-row gap-6 lg:gap-15">
                <div className="flex flex-wrap  flex-col gap-1">
                  <label className="block mb-">Full Name:</label>
                  <input
                    type="text"
                    placeholder="Your name"
                    id="name"
                    className="border  rounded-md px-4 py-1"
                  />
                </div>
                <div className="flex flex-wrap gap-1 flex-col ">
                  <label>Phone Number</label>
                  <input
                    type="number"
                    id="number"
                    placeholder="+254 XX XXX XXX"
                    className="border  rounded-md mb-4 px-4 py-1"
                  />
                </div>
              </div>
              <label className="block mb-1 mt-4">Email Address</label>
              <input
                type="email"
                placeholder="your@gmail.com"
                id="email"
                className="border  rounded-md w-full mb-6 px-4 py-1"
              />
              <label className="block mb-1">Your message</label>
              <textarea
                id="message"
                className="border  rounded-md w-full px-4 mb-6 px-4"
              ></textarea>
              <label htmlFor="services" className="block mb-1">
                Services Interested In:
              </label>
              <select className="border  rounded-md w-full">
                <option value="botox">Select a service</option>
                <option
                  value="laser"
                  id="laser"
                  name="laser"
                  className="text-gray-600"
                >
                  Laser Treatments
                </option>
                <option
                  value="botox"
                  id="botox"
                  name="botox"
                  className="text-gray-600"
                >
                  Botox & Filters
                </option>
                <option
                  value="body"
                  id="body"
                  name="body"
                  className="text-gray-600"
                >
                  Body Contouring
                </option>
                <option
                  value="tummy"
                  id="tummy"
                  name="tummy"
                  className="text-gray-600"
                >
                  Tummy Tuck
                </option>
                <option
                  value="botox"
                  id="other"
                  name="other"
                  className="text-gray-600"
                >
                  Other
                </option>
              </select>
              {/* <button
                type="submit"
                className="bg-pink-800 hover:bg-pink-600 text-white rounded-full px-4 py-2 my-8"
              >
                Send Message
              </button> */}
              <div className="pt-8">
                {" "}
                <Button text="Send Message" />
              </div>
            </fieldset>
          </form>
        </div>
      </div>

      {/* alternative contact */}
      <div
        className="flex gap-5 flex-col md:flex-row md:h-[90vh] w-[80vw] mx-auto "
        style={{
          backgroundImage: `url(${ServiceImg})`,
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="px-6 pb-6 content-end">
          <header>
            <h1 className="font-bold text-2xl text-pink-600 italic">
              Ganjala Clinic
            </h1>
          </header>
          <p className="py-4 text-lg">
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <section className="flex gap-4 flex-wrap cursor-pointer">
            <FacebookSharpIcon className="text-blue-600 hover:text-blue-800" />
            <YouTubeIcon className="text-red-600 hover:text-red-800" />
            <InstagramIcon className="text-pink-600 hover:text-pink-800" />
            <XIcon className="text-gray-600 hover:text-gray-800" />
          </section>
        </div>

        <div className="px-6 bg-white shadow-lg h-full md:h-auto w-full md:w-[42.5rem]">
          <h1 className="text-2xl font-bold pt-6">
            GET IN <span className="text-pink-600">TOUCH</span>{" "}
          </h1>
          <p className="py-4">
            {" "}
            Lorem, ipsum dolor sit amet consectetur adipisicing elit.
          </p>

          <form
            onSubmit={handleSubmit(submit)}
            action=""
            className="flex flex-col py-2"
          >
            <div className="flex flex-col md:flex-row flex-wrap">
              <input
                className="border-gray-200 md:w-1/2 py-2 shadow-md border  rounded-md px-4 mb-6"
                type="text"
                {...register("firstName")}
                placeholder="First Name"
              />
              <input
                className="border-gray-200 md:w-1/2 py-2 shadow-md border  rounded-md px-4 mb-6"
                type="text"
                {...register("lastName")}
                placeholder="Last Name"
              />
            </div>
            <input
              className="border-gray-200 pt-2 shadow-md border  rounded-md px-4"
              type="email"
              {...register("email", {
                pattern: {
                  value: /^.*@hygraph.com$/,
                  message: "email must end with a hygraph value",
                },
              })}
              placeholder="Email"
            />
            <span className="text-s text-red-700 pt-1">
              {errors.email?.message}
            </span>
            <input
              className="border-gray-200 py-2 shadow-md border  rounded-md px-4 mt-6"
              type="number"
              {...register("phone", {
                minLength: 1,
                maxLength: 10,
              })}
              placeholder="Phone"
            />
            <span className="text-s text-red-700 pt-1">
              {errors.phone?.message}
            </span>
            <textarea
              name="message"
              id="message"
              className="border border-gray-200 py-2 shadow-md border  rounded-md px-4 my-6"
              placeholder="Describe your issue"
            ></textarea>
            <motion.button
              // whileHover={{ scale: 1.05 }}
              // whileTap={{ scale: 0.95 }}
              whileHover={{ scale: 1.05, y: -2 }}
              whileTap={{ scale: 0.9, y: 1 }}
              transition={{ type: "spring", stiffness: 300, damping: 15 }}
              className="bg-pink-800 hover:bg-pink-600 text-white rounded-full px-4 py-2 my-8"
            >
              Send Message
            </motion.button>
          </form>
        </div>
      </div>
    </div>
  );
};

export default Contact;
