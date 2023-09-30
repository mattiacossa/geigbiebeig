import React from "react";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import { blue } from "tailwindcss/colors";
const divStyle = {
 

};
export default function Hero() {
  const colors = ["#F59E0B", "#84CC16", "#10B981", "#3B82F6"];
  return (
// ABBIAMO BISOGNO DI TE




  <div>
     <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center' }} className="gotopolly">
        <button>
        <a 
       href="/sondaggio"
       className="text-1xl md:text-2xl font-bold text-gray-100"

       


          >
        Abbiamo bisogno di te! Dedica 20 secondi per definire il nostro futuro. 🥺

  </a>
</button>   
</div>



    <div className="flex flex-row justify-center items-start overflow-hidden">
      {/* Text container */}
     
      <div className="w-full md:w-1/2 mx-auto text-center md:text-left lg:p-20">
        <RoughNotationGroup show={true}>
          <RainbowHighlight color={colors[0]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Tutelare.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[1]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Adattarsi.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[2]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Evolversi.
            </h1>
          </RainbowHighlight>
          <RainbowHighlight color={colors[3]}>
            <h1 className="text-4xl md:text-8xl font-bold text-gray-700 dark:text-gray-200 my-2">
              Innovarsi.
            </h1>
          </RainbowHighlight>
        </RoughNotationGroup>
      </div>
      {/* Image container */}
      
      <div className="hidden lg:block relative w-full md:w-1/2 -mr-40 mt-20">
        <div className="w-3/4 ">
        <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <div className="flex">
              <svg
           
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-left"
                viewBox="0 0 16 16"
                top="10"


      
              >
                <path
                  fillRule="evenodd"
                d="M14.854 4.854a.5.5 0 0 0 0-.708l-4-4a.5.5 0 0 0-.708.708L13.293 4H3.5A2.5 2.5 0 0 0 1 6.5v8a.5.5 0 0 0 1 0v-8A1.5 1.5 0 0 1 3.5 5h9.793l-3.147 3.146a.5.5 0 0 0 .708.708l4-4z"
      
                />
              </svg>
            </div>
            <div className="font-mono ciao">
              <p
   
              >+1.09°C dal 2011.</p>
              </div>
            </div>
          </div>
          <div className="sposta">
          <img src={userData.avatarUrl} alt="avatar" className="" />
          </div>
          <div className="flex flex-row justify-between mt-4">
            <div className="flex flex-row space-x-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="16"
                height="16"
                fill="currentColor"
                className="bi bi-arrow-90deg-up"
                viewBox="0 0 16 16"
                color="#A7C4A0"
              >
                <path
                  fillRule="evenodd"
                  d="M4.854 1.146a.5.5 0 0 0-.708 0l-4 4a.5.5 0 1 0 .708.708L4 2.707V12.5A2.5 2.5 0 0 0 6.5 15h8a.5.5 0 0 0 0-1h-8A1.5 1.5 0 0 1 5 12.5V2.707l3.146 3.147a.5.5 0 1 0 .708-.708l-4-4z"
                />
              </svg>
              <p className="font-mono text-[#A7C4A0]">Questa è la nostra casa.</p>
            </div>

  
          </div>
        </div>
      </div>
      </div>
    </div>
  );
}
