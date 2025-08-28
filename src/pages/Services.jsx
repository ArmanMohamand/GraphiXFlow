import React from "react";
import {
  FaPencilRuler,
  FaLaptopCode,
  FaDrawPolygon,
  FaVideo,
} from "react-icons/fa";
import { Link } from "react-router-dom";

const Services = () => {
  return (
    <section className="bg-black text-white py-20 px-6 lg:px-20" id="services">
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
        <div>
          <p className="text-teal-400 uppercase tracking-widest">
            Our Services
          </p>
          <h2 className="text-4xl lg:text-5xl font-extrabold mt-4">
            What We <span className="text-teal-400">Do.</span>
          </h2>
          <div className="w-52 sm:w-96 h-1 bg-teal-400 mt-4"></div>
          <p className="text-gray-400 mt-6 leading-relaxed">
            Here we provide wide range of services to our clients. This are some
            of our main services. Website design, Brand's logo creation, UI & UX
            design, Video editing. We bring the right people together to make
            best product.
          </p>
          <p className="text-gray-400 mt-4 leading-relaxed ">
            we are committed to delivering exceptional results that exceed
            expectations. We understand that every project is unique, and we
            tailor our approach to meet the specific needs of each client.
          </p>
        </div>

        {/* <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to="/video">
            <div className="bg-gradient-to-b from-black to-gray-900 p-8 rounded-lg shadow-md hover:scale-105 transition transform">
              <FaVideo className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Editing </h3>

              <p className="text-gray-400 text-sm">
                We bring the right people together to best make product
              </p>
            </div>
          </Link>
          <Link to="/CGI">
            <div className=" bg-gradient-to-b from-black to-gray-900 p-8 rounded-lg shadow-md hover:scale-105 transition transform">
              <FaPencilRuler className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2"> CGI ADS </h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to make best product
              </p>
            </div>
          </Link>
          <Link to="/web">
            <div className=" bg-gradient-to-b from-black to-gray-900 p-8 rounded-lg shadow-md hover:scale-105 transition transform">
              <FaLaptopCode className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2"> Website Design </h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to make best product
              </p>
            </div>
          </Link>
          <Link to="/UIUX">
            <div className=" bg-gradient-to-b from-black to-gray-900 p-8 rounded-lg shadow-md hover:scale-105 transition transform">
              <FaDrawPolygon className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to make best product
              </p>
            </div>
          </Link>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
          <Link to="/video">
            <div className="bg-gradient-to-b from-black from-10% via-red-800 via-40% to-gray-900 to-90% p-8 rounded-lg shadow-md hover:scale-105 transition transform">
              <FaVideo className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Video Editing </h3>

              <p className="text-gray-400 text-sm">
                We bring the right people together to best make product
              </p>
            </div>
          </Link>
          <Link to="/CGI">
            <div className=" bg-gradient-to-b from-black from-10% via-red-800 via-40% to-gray-900 to-90% p-8 rounded-lg shadow-md hover:scale-105 transition transform">
              <FaPencilRuler className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2"> CGI ADS </h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to make best product
              </p>
            </div>
          </Link>
          <Link to="/web">
            <div className=" bg-gradient-to-b from-black from-10% via-red-800 via-40% to-gray-900 to-90% p-8 rounded-lg shadow-md hover:scale-105 transition transform">
              <FaLaptopCode className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2"> Website Design </h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to make best product
              </p>
            </div>
          </Link>
          <Link to="/UIUX">
            <div className=" bg-gradient-to-b from-black from-10% via-red-800 via-40% to-gray-900 to-90% p-8 rounded-lg shadow-md hover:scale-105 transition transform">
              <FaDrawPolygon className="text-4xl text-teal-400 mb-4" />
              <h3 className="text-xl font-bold mb-2">Graphic Design</h3>
              <p className="text-gray-400 text-sm">
                We bring the right people together to make best product
              </p>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Services;
