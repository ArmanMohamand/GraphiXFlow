import React from "react";
import { servicesData } from "../assets/assets";
const WEb = () => {
  return (
    <section className="bg-black text-white px-6 py-16">
      <h2 className="text-4xl font-bold text-center mb-6">OUR SERVICES</h2>
      <p className="text-center max-w-3xl mx-auto text-lg mb-12">
        At <span className="text-green-400 font-semibold">GraphicXflow</span>,
        we craft digital solutions that blend design, functionality, and
        performance. Explore our featured services below.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-10">
        {servicesData.map((service, index) => (
          <div
            key={index}
            className="  rounded-lg p-6 shadow-lg hover:shadow-xl transition-transform  duration-300 hover:scale-105 hover:shadow-teal-400/50"
          >
            <img
              src={service.image}
              alt={service.title}
              className="max-w-full h-[180px] object-cover rounded-md mb-4 pl-0"
            />
            <h4 className="text-xl font-bold mb-2">{service.title}</h4>
            <p className="text-sm text-gray-300">{service.description}</p>
          </div>
        ))}
      </div>
      <div className="mt-16 text-center">
        <p className="text-lg mb-2">
          Whether it's design, development, or strategy — we bring your ideas to
          life.
        </p>
      </div>
    </section>
  );
};
export default WEb;
