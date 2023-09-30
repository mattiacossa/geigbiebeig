import React from "react";
import userData from "@constants/data";

export default function Footer() {
  return (
    <div className="bg-[#ebf0ea] dark:bg-gray-900">
<img src={userData.allora}></img>
      <div className="max-w-6xl  mx-auto px-4 py-10 md:py-20">
  




       
     
          
      <div className="flex flex-row ">
  <div>
    <p>&copy; Polly, the climate thinker.</p>
  </div>
  <div className="ml-auto">
    <p>
      <a
        href={`mailto:pio@pollyclimate.it`}
        className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
      >
        Scrivici!
      </a>{" "}
      Risponderemo, promesso!
    </p>
  </div>
</div>

        
      </div>
      
    </div>
  );
}
