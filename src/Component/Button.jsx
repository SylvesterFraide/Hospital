import React, { useState } from "react";
import { motion } from "motion/react";

const Button = ({ text }) => {
  return (
    <div>
      <motion.button
        whileHover={{ scale: 1.05, y: -2 }}
        whileTap={{ scale: 0.9, y: 1 }}
        transition={{ type: "spring", stiffness: 300, damping: 15 }}
        className="bg-pink-800 text-white text-sm py-2 rounded-[50px] w-[10rem] cursor-pointer"
      >
        {text}
      </motion.button>
    </div>
  );
};

export default Button;