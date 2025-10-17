/** @format */

import React from "react";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <footer
      className="flex items-center justify-center p-4 bg-[#0E0D13] text-white"
      role="contentinfo">
      <p>© {year} Blott. All rights reserved.</p>
    </footer>
  );
};

export default Footer;
