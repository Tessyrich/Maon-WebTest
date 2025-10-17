/** @format */

import React from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-center p-4 bg-[#0E0D13]">
      <Link
        to="/"
        className="flex items-center space-x-2">
        <img
          src="/assets/BLOTT.png"
          alt="Blott Logo"
          className="h-10 w-auto object-contain"
          loading="lazy"
        />
      </Link>
    </div>
  );
};

export default Navbar;
