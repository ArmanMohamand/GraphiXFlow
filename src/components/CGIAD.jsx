import React from "react";
import { videos } from "../assets/assets";

const CGIAD = () => {
  return (
    <section className="px-4 py-10 text-white bg-black">
      <h2 className="text-3xl font-bold text-center mb-8 tracking-wide">
        FEATURED PROJECTS
      </h2>

      <div className="grid grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-1 justify-items-center">
        {videos.map((video, index) => (
          <div
            key={index}
            className="w-[180px] h-[280px] transition-transform duration-300 hover:scale-105 hover:shadow-lg hover:shadow-teal-400/50"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              controls
              className="w-full h-full object-cover rounded-md shadow-md"
            />
          </div>
        ))}
      </div>

      <div className="mt-10 text-center">
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

export default CGIAD;
