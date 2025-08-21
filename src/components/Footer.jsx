import React from "react";
import { FaFacebookF, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-gray-200 text-black py-6 border-t">
      <div className="max-w-7xl mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
        
        {/* Left Side */}
        <div className="text-center md:text-left mb-4 md:mb-0">
          <h1 className="text-lg font-bold">TalentNest</h1>
          <p className="text-sm text-gray-700">© 2024 Your Company. All rights reserved.</p>
        </div>

        {/* Right Side - Social Icons */}
        <div className="flex space-x-4 text-xl">
          <a href="#" className="hover:text-blue-600">
            <FaFacebookF />
          </a>
          <a href="#" className="hover:text-blue-400">
            <FaTwitter />
          </a>
          <a href="#" className="hover:text-blue-700">
            <FaLinkedinIn />
          </a>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
