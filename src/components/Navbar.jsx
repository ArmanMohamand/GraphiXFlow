import { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { assets } from "../assets/assets";
const Navbar = () => {
  const location = useLocation();
  const currentPath = location.pathname;
  return (
    <header className="flex flex-col sm:flex-row justify-between items-center px-6 sm:px-10 py-4 sm:py-6 bg-black text-white ">
      <div className="flex items-center space-x-1 mb-4 sm:mb-0">
        <h1 className="text-xl sm:text-2xl font-bold text-teal-400">Graphi</h1>
        <span className="text-pink-500 transform rotate-12 text-2xl sm:text-3xl">
          X
        </span>
        <h1 className="text-xl sm:text-2xl font-bold text-teal-400">flow</h1>
        <img
          src={assets.agencyIMG}
          alt="Agency Graphic"
          className="h-10 w-auto ml-2"
        />
      </div>
      <nav className="flex flex-wrap justify-center sm:justify-end space-x-4 sm:space-x-8 text-xs sm:text-sm uppercase font-medium">
        <Link
          to="/"
          className={`transition ${
            currentPath === "/" ? "text-teal-400" : "hover:text-teal-400"
          }`}
        >
          Home
        </Link>
        <Link
          to="/about"
          className={`transition ${
            currentPath === "/about" ? "text-teal-400" : "hover:text-teal-400"
          }`}
        >
          About Us
        </Link>
        <Link
          to="/services"
          className={`transition ${
            currentPath === "/services"
              ? "text-teal-400"
              : "hover:text-teal-400"
          }`}
        >
          Services
        </Link>
        <a
          href="#footer"
          className={`transition ${
            currentPath === "/contact" ? "text-teal-400" : "hover:text-teal-400"
          }`}
        >
          Contact Us
        </a>
      </nav>
    </header>
  );
};

export default Navbar;
