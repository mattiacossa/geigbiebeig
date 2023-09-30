import React from "react";
import userData from "@constants/data";

export default function AboutMe() {
  return (
    <section className="bg-[#eaf0ea] dark:bg-gray-800">
      
      
        <h1 className=" text-5xl md:text-9xl font-bold py-10 text-center md:text-center">
          About Me.
        </h1>
    

  
      <div className="complete">
          <img src={userData.sopra} alt="avatar" className="" />
          </div>

<div className="bg-[#aac4a7] linea7">

      <div className="bg-[#aac4a7] dark:bg-gray-900">
        
        <div className="text-container max-w-6xl mx-auto pt-10 ">
          <p
            className="text-gray-800 leading-loose text-2xl md:text-3xl font-semibold mx-4 sopraspazio"
            style={{ lineHeight: "3rem" }}
          >
            {userData.about.title}Il nostro mondo è in
            
            
            <a
              className="bg-red-500 rounded-md ml-1 px-2 py-1 text-white"
            
            >
              {userData.about.currentProject}fiamme.
            </a>
        
            
            </p>
  
  <p
            className="leading-loose text-2xl md:text-3xl  mx-4 text-gray-700"
            style={{ lineHeight: "3rem" }}
          >   
            
            
            Il 2022 è stato il <span className="font-semibold">sesto anno più caldo mai registrato dal 1880.</span> I 10 anni più caldi da 143 anni si sono tutti verificati dal 2010, con gli ultimi nove anni (2014-2022) classificati come i nove anni <span className="font-semibold">più caldi </span>mai registrati.{" "}
    
          </p>
        </div>
      </div>
      
      <div className="bg-[#aac4a7] dark:bg-gray-900 px-4 ">
        <div className="pt-20 grid grid-cols-1 md:grid-cols-3 max-w-6xl mx-auto gap-y-20 gap-x-20">
          {/* Social Buttons */}
          <div className="inline-flex flex-col">
            <div>
              <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
               Job opportunities* 📨
              </h1>

              <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
              *(scherziamo)
              </p>
              <p className="text-lg text-gray-700 mt-4 dark:text-gray-300">
                Per darci una mano o qualsiasi curiosità scrivici una{" "}
                <a
                  href={`mailto:pio@pollyclimate.it`}
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  mail.
                </a>{" "}
                Risponderemo in fretta. Promesso.
              </p>
            </div>
            <div className="mt-8">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-gray-200">
Abbiamo bisogno di te!*  
            </h1>


            <p className="text-xs font-semibold text-gray-800 dark:text-gray-200">
              *SERIAMENTE!
              </p>


              <p className="text-lg text-gray-700 mt-4 dark:text-gray-300">
               Partecipa al 
               
               {" "}
                <a
                  href="/sondaggio"
                  target="sondaggio"
                  className="text-gray-800 border-b-2 border-gray-800 dark:border-gray-300 font-bold dark:text-gray-300"
                >
                  sondaggio!
                </a>{" "}


         Il nostro progetto funziona solo se ne prendi parte anche te!
              </p>
            </div>

            
          </div>
          {/* Text area */}
          <div className="col-span-1 md:col-span-2">
  
           <p className="text-xl text-gray-800 mb-4 dark:text-gray-300">Le temperature sono in <span className="font-semibold"> costante aumento</span>,
i gas serra innescano <span className="font-semibold">fenomeni naturali sempre più devastanti </span> e gli scienziati prevedono presto il <span className="font-semibold"> raggiungimento di un punto di non ritorno.</span> Durante l’ultimo anno, la Cina ha emesso il 28,3% delle emissioni globali di CO2, nulla di paragonabile al 6,5% dell’Unione Europea. 
<br></br><br></br>
Nonostante numerosi Paesi stiano lavorando per ridurre le emissioni, l’impatto ambientale di Cina, India, Indonesia e Brasile è notevolmente aumentato nell’ultimo periodo, risultato di <span className="font-semibold">pratiche ambientali scorrette, dannose o non sufficientemente implementate. </span>
<br></br><br></br>
Il danno ambientale odierno è stato in larga misura causato dalle <span className="font-semibold">rivoluzioni industriali </span> avvenute in Occidente alla fine dell’Ottocento (Paesi ad oggi largamente sviluppati e in possesso di tecnologie e risorse tali da contrastare il cambiamento climatico). 
Tuttavia, sono i Paesi <span className="font-semibold">in via di sviluppo </span>a detenere, ad oggi, il <span className="font-semibold">primato per essere i più inquinanti.</span>
<br></br><br></br>
Il recente <span className="font-semibold">COP 26 </span>è considerato da molti un <span className="font-semibold">fallimento</span>: i Paesi ad oggi con  maggiori emissioni totali (Russia, India e Cina) sono gli <span className="font-semibold">unici che non hanno concordato misure per limitare le emissioni entro il 2030.</span>
<br></br><br></br>
Il risultato è quindi un dibattito e uno scontro tra Paesi ad oggi sviluppati e Paesi in via di sviluppo: è impossibile per l’Europa (sviluppata, con infrastrutture implementate)<span className="font-semibold"> impedire lo sviluppo di Paesi come l’India </span>, anche se ciò comporta notevoli <span className="font-semibold"> danni ambientali.</span>
<br></br><br></br>
<span className="qwerty">
"Non possiamo aspettarci che i Paesi in via di sviluppo rinuncino al loro diritto a svilupparsi e a migliorare la qualità della vita dei loro cittadini. Ma possiamo lavorare insieme, in modo collaborativo e solidale, per ridurre le emissioni di gas serra e prevenire i peggiori effetti del cambiamento climatico."
</span>

<br></br><br></br>
<span className="font-semibold">
Ma in Italia, qual è la percezione del clima? 
</span>

              </p>
          

            
            
          </div>
        </div>
      </div>
      </div>
    </section>
  );
}
