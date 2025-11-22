import React from "react";
import {
  FaPhone,
  FaEnvelope,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
  FaGithub,
} from "react-icons/fa";

const Footer = () => {
  return (
    <footer
      className="bg-black/70 backdrop-blur-md text-gray-300 py-8 px-6 sm:px-10"
      id="footer"
    >
      <div className="max-w-6xl mx-auto flex flex-col gap-8 md:flex-row md:items-start md:justify-between">
        <div className="text-center md:text-left">
          <h2 className="text-teal-400 font-bold text-xl mb-2">GraphiXflow</h2>
          <p className="text-sm text-gray-400">
            We create experiences that inspire, engage, and grow.
          </p>
        </div>
        <div className="flex flex-col gap-4 text-sm items-center md:items-start">
          <a
            href="tel:+918949297382"
            className="flex items-center space-x-2 hover:text-teal-400"
          >
            <FaPhone />
            <span>+91 9034950134</span>
          </a>
          <a
            href="mailto:graphixflow0134@gmail.com"
            className="flex items-center space-x-2 hover:text-teal-400"
          >
            <FaEnvelope />
            <span>graphixflow0134@gmail.com</span>
          </a>
          <div className="flex space-x-4 mt-2">
            <a
              href="https://www.instagram.com/_graphix.flow?igsh=MXM0azc0cXV1M2trOQ=="
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaInstagram />
            </a>
            <a
              href="https://www.linkedin.com/in/pankaj-saharan-432657284"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaLinkedin />
            </a>
            <a
              href="https://github.com/ArmanMohamand"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-teal-400"
            >
              <FaGithub />
            </a>
          </div>
        </div>
      </div>
      
      <div className="mt-8 text-center text-xs text-gray-500">
        © {new Date().getFullYear()} GraphiXflow. All Rights Reserved.
      </div>
    </footer>
  );
};

export default Footer;
