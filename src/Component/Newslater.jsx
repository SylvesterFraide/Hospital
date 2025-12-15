import React from "react";

const Newsletter = () => {
  return (
    <div className="bg-gray-600 rounded-lg w-[80vw] mx-auto px-8 py-4">
      <form className="flex flex-col lg:flex-row justify-between gap-4">
        <div className="text-center">
          <h2 className="text-md sm:text-lg font-bold text-white">
            Subscribe to our Newsletter
          </h2>
          <p className="text-sm sm:text-base text-gray-400">
            Stay updated with our latest news and offers.
          </p>
        </div>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          {" "}
          <input
            type="email"
            placeholder="Your email address"
            className="bg-gray-500 text-white py-2 px-4 rounded-[50px] outline-none"
          />
          <button
            type="submit"
            className="bg-pink-900 text-white py-2 px-4 rounded-[50px] hover:bg-pink-800"
          >
            Subscribe
          </button>
        </div>
      </form>
    </div>
  );
};

export default Newsletter;
