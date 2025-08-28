import React, { useContext } from "react";
import { graphics } from "../assets/assets";
const FeaturedProjects = () => {
  // const { graphics } = useContext(StoreContext);

  return (
    <section className="px-6 py-12 text-white bg-black">
      <h2 className="text-3xl font-bold text-center mb-10 tracking-wide">
        FEATURED PROJECTS
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(180px,1fr))] gap-8 justify-items-center">
        {graphics.map((graphic, index) => (
          <div
            key={index}
            className="w-[180px] h-[280px] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/50"
          >
            <img
              src={graphic}
              alt={`Graphic ${index + 1}`}
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>

      <div className="mt-12 text-center">
        <p className="text-lg mb-2">Interested in working together?</p>
        <a
          href="#footer"
          className="text-xl font-semibold text-green-400 hover:underline"
        >
          Contact us
        </a>
      </div>
    </section>
  );
};

export default FeaturedProjects;
