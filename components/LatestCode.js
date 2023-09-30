import React, { useEffect, useState } from "react";
import Link from "next/link";
import getLatestRepos from "@lib/getLatestRepos";
import userData from "@constants/data";


export default function LatestCode({ repositories }) {
  const [repos, setRepos] = useState(repositories);
  
//colore terziario
  return (
    <section className="-mt-30">


          <div className="bg-[#aac4a7]  dark:bg-gray-900 pb-20">
      <div className="max-w-6xl mx-auto">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 mx-10 pt-20">
          <h1 className="text-7xl lg:text-9xl max-w-lg font-bold text-[#395756] my-0 md:my-0 dark:text-gray-600 text-center lg:text-left">
          HEJ!*
          </h1>
          
          <div className="max-w-6xl mx-auto ">
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 mx-10">
        




     {userData.about.description?.map((desc, idx) => (
              <p
                key={idx}
                className="text-xl text-gray-700 mb-4 dark:text-gray-300 "
              >
              </p>
            ))}
        </div>
      </div>    


      <a
            href={`/about`}
            className="mb-20 md:mb-0 px-8 py-4 rounded-md bg-white shadow-lg text-xl font-semibold flex flex-row space-x-4 items-center dark:text-gray-700"
          >

            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              className="bi bi-arrow-up-right-square"
              stroke="4"
              strokeWidth="4"
              viewBox="0 0 16 16"
            >
              <path
                fillRule="evenodd"
                d="M15 2a1 1 0 0 0-1-1H2a1 1 0 0 0-1 1v12a1 1 0 0 0 1 1h12a1 1 0 0 0 1-1V2zM0 2a2 2 0 0 1 2-2h12a2 2 0 0 1 2 2v12a2 2 0 0 1-2 2H2a2 2 0 0 1-2-2V2zm5.854 8.803a.5.5 0 1 1-.708-.707L9.243 6H6.475a.5.5 0 1 1 0-1h3.975a.5.5 0 0 1 .5.5v3.975a.5.5 0 1 1-1 0V6.707l-4.096 4.096z"
              />
            </svg>
            
            <p>Scopri di +</p>
            
          </a>
    
        </div>

       

      </div>
   <div className="max-w-6xl mx-auto">
   <p
              className="text-[#395756] leading-loose text-1xl md:text-1xl font-semibold mx-4 ml-10"

            >
       *molto in breve ⏱️
              
              </p>
        <div className="flex flex-col md:flex-row justify-between items-center md:pt-20 mx-10">
          <p className="text-xl lg:text-xl text-gray-800 md:my-0 dark:text-gray-600 text-left">
      
          L'obiettivo del progetto è quello di   <span className="font-semibold">raccogliere e analizzare dati riguardanti la percezione della popolazione in merito al clima </span>e <span className="font-semibold">all'influenza delle notizie provenienti da fonti attendibili sul pensiero individuale.</span> La portata del progetto copre la           <span className="font-semibold">comprensione dell'atteggiamento della popolazione riguardo alla problematica climatica</span>, analizzando  <span className="font-semibold">l'impatto del Bias cognitivo </span>sul pensiero umano e  <span className="font-semibold">la sicurezza o la diffidenza nei confronti di notizie pubblicate su testate note di pensiero opposto a quello manifestato. </span>
          
          
          
          
  </p>



 
        </div>
      </div>    
      </div>

 
    </section>
  );


}

