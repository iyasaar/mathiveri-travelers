// components/Navbar.js
import React from "react";

export default function Navbar() {
  return (
    <nav className="absolute top-0 left-0 w-full flex items-center justify-between px-6 py-4 bg-opacity-50 z-20">
      <div className="flex items-center space-x-4">
        {/* Hamburger Menu */}
        <button className="space-y-1 focus:outline-none">
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
          <div className="w-6 h-0.5 bg-white"></div>
        </button>
        {/* Language Selector */}
        <div className="flex space-x-4 text-sm text-white">
          <a href="#" className="hover:underline">
            english
          </a>
          <span>|</span>
          {/* <a href="#" className="hover:underline">
            italiano
          </a> */}
        </div>
      </div>
      <div className="flex items-center space-x-6">
        {/* Social Media Icons */}
        <div className="flex space-x-4 text-white">
          <a href="#" className="hover:text-gray-300" aria-label="Facebook">
            <i className="fab fa-facebook-f"></i>
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="Instagram">
            <i className="fab fa-instagram"></i>
          </a>
          <a href="#" className="hover:text-gray-300" aria-label="Email">
            <i className="far fa-envelope"></i>
          </a>
        </div>
        {/* Book Now Button (Uncomment if needed) */}
        {/* <button className="bg-white text-black px-4 py-2 rounded hover:bg-gray-200">
          Book Now
        </button> */}
      </div>
    </nav>
  );
}
