import React, { useState } from "react";

const Button = ({ text }) => {
  return (
    <div>
      <button
       className="bg-pink-800 text-white text-sm py-2 rounded-[50px] w-[10rem] cursor-pointer">
        {text}
      </button>
    </div>
  );
};

export default Button;
