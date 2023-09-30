import React from "react";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import { blue } from "tailwindcss/colors";




export default function FavouriteProjects() {
  return (

  //colore secondario
    <div className="-mt-40">
       <div className="">
          <img src={userData.sfondoUrl} alt="avatar" className="" />
          </div>

          <div className="bg-[#395756] dark:bg-gray-900">
      <div className="max-w-6xl mx-auto">
      
        <header className="flex flex-col md:flex-row justify-between items-center pt-20 mx-10 lg:my-0">
          <h1 className="text-6xl lg:text-9xl max-w-lg font-bold text-white my-20 md:my-0 md:text-white dark:text-gray-600 text-center">
           Progetti
          </h1>
          
          
        </header>

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
          {/* Single card */}
          <a
       href="/about"
            className="w-full block col-span-3 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              <img
                src="/tmk.jpg"
                alt="portfolio"
                className="transform hover:scale-125 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
Scopri il progetto
              </h1>
              
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                01
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
            href="/sondaggio"
            className="w-full block col-span-3  sm:col-span-2 shadow-2xl"
          >
            <div className="relative overflow-hidden">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/second.png"
                alt="sondaggio"
                className="transform hover:scale-110 transition duration-2000 ease-out"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Partecipa al sondaggio!
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                02
              </h1>
            </div>
          </a>
          {/* Single card */}
          <a
        href="/progetto"
            className="w-full block col-span-3 sm:col-span-1  object-cover"
          >
            <div className="relative overflow-hidden shadow-2xl">
              {/* <div className="overlay absolute inset-0 bg-black bg-opacity-70 z-10"></div> */}
              <img
                src="/portfolio.jpg"
                alt="coming soon"
                className="transform hover:scale-125 transition duration-2000 ease-out object-cover shadow-2xl"
              />
              <h1 className="absolute top-10 left-10 text-gray-50 font-bold text-xl bg-red-500 rounded-md px-2">
                Let's see (soon)
              </h1>
              <h1 className="absolute bottom-10 left-10 text-gray-50 font-bold text-xl">
                03
              </h1>
            </div>
          </a>
        </div>
      </div>
    </div>
    <div>      <img src={userData.sfondo2Url} alt="avatar" className="" /></div>
    </div>
    
  );
}
