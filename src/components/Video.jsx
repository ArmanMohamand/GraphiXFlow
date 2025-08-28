import React from "react";
import { cafeVideos } from "../assets/assets";
const Video = () => {
  return (
    <section className="bg-black text-white px-4 py-10">
      <h2 className="text-3xl lg:text-4xl font-bold text-center mb-6 lg:mb-8 tracking-wide">
        FEATURED PROJECTS
      </h2>

      <p className="text-center max-w-3xl mx-auto text-lg mb-8 lg:mb-12 hidden sm:block">
        Explore our creative video work — from cinematic edits to CGI-driven ads. Each project reflects our passion for storytelling and visual impact.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-[repeat(auto-fit,minmax(150px,1fr))] gap-6 justify-items-center">
        {cafeVideos.map((video, index) => (
          <div
            key={index}
            className="bg-gray-900 w-full sm:w-[180px] sm:h-[280px] rounded-lg p-2 shadow-lg hover:shadow-xl hover:shadow-teal-400/50 transition-all duration-300 ease-in-out hover:scale-105"
          >
            <video
              src={video}
              autoPlay
              muted
              loop
              controls
              className="w-full h-full object-cover rounded-md"
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

export default Video;
