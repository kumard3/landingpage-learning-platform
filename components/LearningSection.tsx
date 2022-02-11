/* eslint-disable @next/next/no-img-element */
import React from "react";

export default function LearningSection() {
  return (
    <>
      <div className=" py-[7rem] ">
        <div className="max-w-screen-2xl px-4 md:px-8 mx-auto">
          <div className="mb-10 md:mb-16">
            <h2 className="text-2xl lg:text-3xl font-bold text-center mb-4 md:mb-6">
              YOUR PERSONALIZED LEARNING IS JUST A CLICK AWAY
            </h2>
          </div>
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            <a
              href="#"
              className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="https://images.unsplash.com/photo-1554415707-6e8cfc93fe23?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-yellow-700 from-gray-800 via-transparent to-transparent opacity-80 absolute inset-0 pointer-events-none"></div>
              <div className="flex flex-col absolute top-[47%] left-[20%] text-center ">
                <span className="text-white text-5xl">Languages</span>
                {/* <span className="text-white text-xl font-semibold">
                  Decoration
                </span> */}
              </div>
            </a>
            <a
              href="#"
              className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <div className="flex flex-col relative">
                <span className="text-gray-300">Modern</span>
                <span className="text-white text-lg lg:text-xl font-semibold">
                  Furniture
                </span>
              </div>
            </a>
            <a
              href="#"
              className="group h-80 flex items-end bg-gray-100 rounded-lg overflow-hidden shadow-lg relative p-4"
            >
              <img
                src="https://images.unsplash.com/photo-1620241608701-94ef138c7ec9?auto=format&q=75&fit=crop&w=750"
                loading="lazy"
                alt="Photo by Fakurian Design"
                className="w-full h-full object-cover object-center absolute inset-0 group-hover:scale-110 transition duration-200"
              />

              <div className="bg-gradient-to-t from-gray-800 via-transparent to-transparent opacity-50 absolute inset-0 pointer-events-none"></div>

              <div className="flex flex-col relative">
                <span className="text-gray-300">Modern</span>
                <span className="text-white text-lg lg:text-xl font-semibold">
                  Furniture
                </span>
              </div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
}
