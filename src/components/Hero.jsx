import { assets } from "../assets/assets";
import { Link } from "react-router-dom";

const Hero = () => {
  return (
    <div
      className="relative text-white bg-cover bg-center h-[80vh] flex items-center"
      style={{ backgroundImage: `url(${assets.BKG})` }}
    >
      <div className="px-10 lg:px-20 max-w-xl">
        <p className="uppercase tracking-widest text-teal-400 text-sm">
          Creative Agency
        </p>
        <h1 className="text-5xl lg:text-6xl font-extrabold leading-tight mt-2 md:mt-4">
          WE ARE <span className="text-teal-400">CREATIVE</span> <br /> DESIGN
          AGENCY
        </h1>
        <p className="mt-6 text-gray-400 text-base leading-relaxed">
          At GraphiXFlow, we don’t just create content — we create experiences.
          From shoot & edit videos and immersive CGI ads to impactful graphic
          design and smart web development, our work is built to inspire,
          engage, and drive growth.
        </p>
        <div className="mt-8 flex items-center space-x-4">
          <button className="flex items-center space-x-2 bg-teal-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-300 transition">
            <Link to="/about">About Us</Link>
          </button>
          <Link to="/portfolio" className="flex items-center space-x-2 bg-teal-400 text-black font-semibold px-6 py-3 rounded-full shadow-md hover:bg-teal-300 transition ">
            Portfolio
          </Link>
        </div>
      </div>
    </div>
  );
};
export default Hero;

