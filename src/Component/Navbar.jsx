import React from "react";
import { NavLink } from "react-router-dom";

const Navbar = ({ LiveScore }) => {
  return (
    <div className="bg-gray-300  font-medium p-2 px-4 sm:px-[5vw] md:px-[7vw] lg:px-[9vw]">
      <NavLink to="/">
        <p>{LiveScore}</p>
      </NavLink>
    </div>
  );
};

export default Navbar;
