import React, { useState } from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button className="bg-pink-800 text-white text-sm sm:text-md px-4 py-2 rounded-[50px] w-full sm:w-[13rem] cursor-pointer">
        {text}
      </button>
    </div>
  );
};

export default Button;
