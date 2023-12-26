/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import logo from '../assets/r-logo.png';

const Navbar = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <nav className="fixed w-full bg-white border-b border-gray-200">
      <div className="max-w-screen-xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="flex items-center">
          {/* Logo */}
          <img src={logo} alt="Logo" className="h-8 mr-2" />
          <a href="#hero" className="flex items-center space-x-3 rtl:space-x-reverse">
            <span className="self-center text-xl font-semibold text-rPrimary">Ryo Codes</span>
          </a>
        </div>

        {/* Desktop Menu */}
        <div className="hidden md:flex flex-grow items-center justify-center space-x-6">
          <a href="#about">About</a>
          <a href="#projects">Projects</a>
          <a href="#resume">Resume</a>
        </div>

        {/* Get Started Button */}
        <div className="flex md:order-2 space-x-3 md:space-x-0 rtl:space-x-reverse">
          <button
            type="button"
            className="text-white bg-rPrimary hover:bg-orange-300 focus:ring-4 focus:outline-none focus:ring-blue-300 font-medium rounded-lg text-sm px-4 py-2 text-center "
          >
            Get started
          </button>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
