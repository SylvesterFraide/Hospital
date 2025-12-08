import React from "react";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import XIcon from "@mui/icons-material/X";
import YouTubeIcon from "@mui/icons-material/YouTube";
import PlaceIcon from "@mui/icons-material/Place";
import CallIcon from "@mui/icons-material/Call";
import EmailIcon from "@mui/icons-material/Email";
import AccessTimeIcon from "@mui/icons-material/AccessTime";
import Newsletter from "./Newslater";

const Footer = () => {
  return (
    <div className="h-[90vh] bg-gray-800">
      <div className="flex flex-col sm:flex-row justify-between px-8 py-8 text-white">
        <div className="w-[35rem]">
          <h3 className="text-md sm:text-lg font-semibold">Ganjala Clinic</h3>
          <p className="py-4 text-sm sm:text-md">
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam cum
            eveniet soluta officia, delectus sunt ullam, obcaecati eaque cumque
            possimus nesciunt? Maiores corrupti, vero modi consequatur quaerat
            voluptas? Suscipit, quis?
          </p>
          <div className="flex gap-4">
            <FacebookIcon className="text-blue-500 hover:text-blue-700" />
            <InstagramIcon className="text-pink-500 hover:text-pink-700" />
            <XIcon className="text-red-500 hover:text-red-700" />
            <YouTubeIcon className="text-red-600 hover:text-red-800" />
          </div>
        </div>
        <div className="">
          <h4 className="text-md sm:text-lg font-semibold">Quick Links</h4>
          <span className="h-1 w-2/4 bg-pink-600 rounded-md block"></span>
          <ul className="flex flex-col gap-2 text-sm sm:text-md py-4">
            <li className="hover:underline hover:text-pink-500">
              <a href="/">Home</a>
            </li>
            <li className="hover:underline hover:text-pink-500">
              <a href="/about">About Us</a>
            </li>
            <li className="hover:underline hover:text-pink-500">
              <a href="/services">Our Services</a>
            </li>
            <li className="hover:underline hover:text-pink-500">
              <a href="/specialists">Our Specialists</a>
            </li>
            <li className="hover:underline hover:text-pink-500">
              <a href="/contact">Contact Us</a>
            </li>
            <li className="hover:underline hover:text-pink-500">
              <a href="/appointment">Book Appointment</a>
            </li>
          </ul>
        </div>
        <div className="">
          <h4 className="text-md sm:text-lg font-semibold">Contact Us</h4>
          <span className="h-1 w-1/6 bg-pink-600 rounded-md block"></span>
          <div className="text-sm sm:text-md">
            <div className="flex items-center gap-4 py-2">
              <PlaceIcon className="text-pink-800" />
              <p>123 Main St, Anytown, USA</p>
            </div>
            <div className="flex items-center gap-4 py-2">
              <CallIcon className="text-green-800" />
              <p>(123) 456-7890</p>
            </div>
            <div className="flex items-center gap-4 py-2">
              <EmailIcon className="text-blue-800" />
              <p>info@ganjalaclinic.com</p>
            </div>
            <div className="flex items-center gap-4 py-2">
              <AccessTimeIcon className="text-yellow-800" />
              <p>Mon-Fri: 9:00AM-5:00PM, Sat-Sun: 10:00AM-4:00PM</p>
            </div>
          </div>
        </div>
      </div>

      <div className="py-8">
        <Newsletter />
      </div>

      <hr className="my-10 border-gray-700 w-[95vw] mx-auto" />

      <div className="mt-[-12px] px-6">
        <p className="text-sm text-gray-400">
          © 2025 Ganjala Clinic. All rights reserved.
        </p>
      </div>
    </div>
  );
};
export default Footer;
