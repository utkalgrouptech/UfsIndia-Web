import { serviceArr } from "@/src/utils/home/Index";
import React from "react";

const Services = () => {
  return (
    <section className="flex flex-col items-center justify-center gap-2 py-14">
      <div>
        <h1 className="text-xl font-bold text-blue-900 text-center">
          WHAT MAJOR SERVICES WE ARE PROVIDING
        </h1>
      </div>
      <div className="h-1 w-14 bg-green-600 mb-12"></div>

      <div className="flex lg:flex-row flex-col gap-1 ">
        {serviceArr.map((item, index) => (
          <div className="lg:w-72 w-80 h-44 bg-white flex items-end relative overflow-hidden " key={index}>
            <img src={item.img.src} alt=""  className="transform  transition-transform  duration-500 hover:scale-105" />
            <div className="w-full h-16 bg-neutral-800 opacity-90 text-center pt-5 z-10 absolute  ">
              <p className="text-white font-bold">{item.title}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
