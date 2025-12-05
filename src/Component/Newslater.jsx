import React from "react";

const Newsletter = () => {
  return (
    <div className="flex sm:flex-row justify-between items-center bg-gray-600 rounded-lg p-4 w-[80vw] mx-auto px-8">
      <div className="">
        <h2 className="text-md sm:text-lg font-bold text-white">Subscribe to our Newsletter</h2>
        <p className="text-sm sm:text-base text-gray-400">Stay updated with our latest news and offers.</p>
      </div>
      <form className="flex flex-row sm:flex-row gap-4">
        <input type="email" placeholder="Your email address" className="bg-gray-500 text-white py-2 px-4 rounded-[50px] outline-none" />
        <button type="submit" className="bg-pink-500 text-white py-2 px-4 rounded-[50px]">Subscribe</button>
      </form>
    </div>
  );
};

export default Newsletter;