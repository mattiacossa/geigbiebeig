import React from "react";
import Link from "next/link";
import { RoughNotation, RoughNotationGroup } from "react-rough-notation";
import { RainbowHighlight } from "./RainbowHighlight";
import userData from "@constants/data";
import { blue } from "tailwindcss/colors";
import{useState, useRef} from 'react'
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import Confetti from "react-confetti";






export default function FavouriteProjects() {

  const [progress, setProgress] = useState(0);

 


  const imageGroups = [
    {
      name: "Group A",
      images1: [
        userData.gruppounonotiziauno,
        userData.gruppounonotiziadue,
        userData.gruppounonotiziatre,
      ],
      images2: [
        userData.gruppounonotiziaunobad,
        userData.gruppounonotiziaduebad,
        userData.gruppounonotiziatrebad,
      ],
    },
    {
      name: "Group B",
      images1: [
        userData.gruppoduenotiziauno,
        userData.gruppoduenotiziadue,
        userData.gruppoduenotiziatre,
      ],
      images2: [
        userData.gruppoduenotiziaunobad,
        userData.gruppoduenotiziaduebad,
        userData.gruppoduenotiziatrebad,
      ],
    },
  ];

  const [showConfetti, setShowConfetti] = useState(false);
  const [step, setStep] = useState(1); // initial step is 1
  const [formData, setFormData] = useState({}); // initialize form data
  

  
  const[primo,setPrimo] = useState('3');
  const[secondo,setSecondo] = useState('3');
  const[terzo,setTerzo] = useState('3');
  const[quarto,setQuarto] = useState('un');
  const[quinto,setQuinto] = useState('un');
  const[domanda,setDomanda] = useState('un');
  const[domanda2,setDomanda2] = useState('un');
  const[domanda3,setDomanda3] = useState('un');
  const[domanda4,setDomanda4] = useState('un');

  

  const userCollectionRef = collection(db, "DEFINITIVOdeidef")
  const userCollectionRef2 = collection(db, "continua")

  const [position, setPosition] = useState(0);
  
  
  const [selectedGroup, setSelectedGroup] = useState(imageGroups[0]);
  const [selectedImages, setSelectedImages] = useState([
    selectedGroup.images1[0],
    selectedGroup.images1[1],
  ]);
  const [useAlternativeImages, setUseAlternativeImages] = useState(false);



  const imageStyle = {
    position: 'relative',
    width: '15vw',
    top: '50%',
    left: position,
    transform: 'translate(-50%, -50%)',
    transition: 'left 0.5s ease-in-out',
    zIndex: 2,
  };
  
  
  const imageStyle2 = {
    position: 'relative',
    width: '6vw',
    top: '20%',
    right: '0px',
    transform: 'translate(-50%, -50%)',
  
  };


  

  



  
//SUBMIT TOALE
  const handleSubmit =(event) => {
  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step
  setShowConfetti(true);
//PRIMA PARTE mia a caso, SECONDA Parte codice
addDoc(userCollectionRef, {
  primo:primo,
  secondo:secondo,
  terzo:terzo,
  domanda:domanda,

}


    )

    setProgress(progress => progress + 25);
}



const handleCheckboxChange =(event) => {
  setUseAlternativeImages(event.target.checked);
}

//SUBMIT TERZIARIO
const handleSubmit3 =(event) => {
  event.preventDefault(); // prevent page reload

  setProgress(progress => 0);

  const randomGroupIndex = Math.floor(Math.random() * imageGroups.length);
  const randomGroup = imageGroups[randomGroupIndex];
  setSelectedGroup(randomGroup);

  const useAlternativeImages = terzo > 3;
  const images = useAlternativeImages ? randomGroup.images2 : randomGroup.images1;
  const randomImageIndex1 = Math.floor(Math.random() * images.length);
  let randomImageIndex2 = Math.floor(Math.random() * images.length);
  while (randomImageIndex2 === randomImageIndex1) {
    randomImageIndex2 = Math.floor(Math.random() * images.length);
  }
  setSelectedImages([images[randomImageIndex1], images[randomImageIndex2]]);
  setUseAlternativeImages(useAlternativeImages);


  setStep(step + 1); // increase the step
}


//SUBMIT SECONDARIO 
const handleSubmit2 =(event) => {
  setProgress(progress => progress + 25);

  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step
  
  const screenWidth = window.innerWidth;
  const newPosition = position + screenWidth * 0.2; // move image 20% to the right
  setPosition(newPosition);
}



const handleSubmit6 =(event) => {


  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step

}


/////QUIIIII////////
const handleSubmit4 =(event) => {

  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step
  
  setProgress(progress => progress + 15);

}


const handleSubmit5 =(event) => {

  event.preventDefault(); // prevent page reload
  setStep(step + 1); // increase the step
  setShowConfetti(true);
  setProgress(progress => progress + 10);
    


    addDoc(userCollectionRef2, {
      primo:primo,
      secondo:secondo,
      terzo:terzo,
      domanda:domanda,
      gruppo:selectedGroup.name,
      domanda2: domanda2,
      quarto:quarto,
      quinto:quinto,
      domanda3:domanda3,
      domanda4:domanda4,
    
    })
    
}










  return (

  //colore secondario
 // <div className="block lg:hidden relative w-full md:w-1/2 -mr-40 mt-20">
 <div>
    

    <div className="complete">
          <img src={userData.principale} alt="avatar" className="" />
          </div>




       

            


          <div className="bg-[#395756] dark:bg-gray-900">
      <div>
      
        <header className="flex-row md:flex-row justify-between items-center pt-20 mx-2 md:mx-20 lg:my-0">
      
   
        <div className="borderblue"> 
   
          <div className="text-gray-700 p-2 pt-10 pb-10 md:p-20">
 

          <div className="progress-bar-container">
      <progress value={progress} max="100"></progress>
      
    </div>


     


  <div className="mt-6 bordergeneral">
 

 


      {step === 1 && (
        <form onSubmit={handleSubmit6}>
      <div className="mt-3 grande texttt grande">
        <h1 className="font-medium centrale inferiore2">Polly ha fame! </h1>

        
     
   <h1 className="centrale">
       Il sondaggio è completamente anonimo, le risposte inserite sono memorizzate esclusivamente per fini di ricerca.
        </h1>
    <button type="submit" className="bottoneprimario">SALVIAMO POLLY!</button>
     


</div>





</form>
      )}
  {step === 2 && (
        <form onSubmit={handleSubmit2}>

      
      <div className="mt-3">
      <div class="container">
        <label htmlFor="range" className="grande textt block font-medium text-sm text-gray-700 mb-2">
Secondo te, è incorso un cambiamento climatico?

        </label>
        </div>

        <div className="radio-buttons">
      <div className="radio-button">
        <input type="radio" id="yes" name="climate-articles" value="yes" onChange={() => setDomanda("yes")} />
        <label htmlFor="yes" className="grande">Sì</label>
      </div>
      <div className="radio-button">
        <input type="radio" id="no" name="climate-articles" value="no" onChange={() => setDomanda("no")} />
        <label htmlFor="no" className="grande">No</label>
      </div>
    </div>
            <button type="submit"   className="bottoneprimario">Prosegui (1/4)</button>
           </div>
          </form>
          
          
      )
      }



      
    {step === 3 && (
      
        <form onSubmit={handleSubmit2}>
      
      <div className="mt-3">
      
        <div className="azzurro">
      <div class="container">
        <label htmlFor="range" className="grande textt block font-medium text-sm text-gray-700 mb-2">
        Hai letto articoli sulla situazione climatica? 
        </label>
      

        
    

        </div>
        <div className="sotto">
        <input
          type="range"
          className="slider"
          min="1"
          max="5"
          onChange={(event) => {
            setPrimo(event.target.value);
          }}
      
        />

        
        </div>


       
        <div style={{ display: 'flex' }}>
      <h1 style={{ flex: 1 }}>Mai</h1>
      <h1 style={{ flex: 1, textAlign: 'right' }}>Certo!</h1>
    </div>
    </div>
     
            <button type="submit"   className="bottoneprimario spazio">Prosegui (2/4)</button>
           
           </div>
           
          </form>




          
          
      )
      }





{step === 4 && (
<form onSubmit={handleSubmit2}>
      <div className="mt-3">
      <div className="azzurro">
        <label htmlFor="range" className=" grande textt block font-medium text-sm text-gray-700 mb-2">
          Pensi di star tutelando l'ambiente?
        </label>
        <div className="sotto">
        <input
          type="range"
          className="slider"
          min="1"
          max="5"
          onChange={(event) => {
            setSecondo(event.target.value);
          }}

        />


        </div>
        
<div style={{ display: 'flex' }}>
      <h1 style={{ flex: 1 }}>Mai</h1>
      <h1 style={{ flex: 1, textAlign: 'right' }}>Certo!</h1>
    </div>
    </div>
     
            <button type="submit"   className="bottoneprimario spazio">Prosegui (2/4)</button>
        
        </div>

</form>
      )}
      

      {step === 5 && (
        <form onSubmit={handleSubmit}>
      <div className="mt-3">
      <div className="azzurro">
        <label htmlFor="range" className="grande textt block font-medium text-sm text-gray-700 mb-2">
       In base alla tua esperienza, scommetteresti su un futuro climatico migliore?
        </label>
        <div className="sotto">
        <input
          type="range"
          className="slider"
          min="1"
          max="5"
          onChange={(event) => {
            setTerzo(event.target.value);
          }}
      
        />
        </div>

        <div style={{ display: 'flex' }}>
      <h1 style={{ flex: 1 }}>Mai</h1>
      <h1 style={{ flex: 1, textAlign: 'right' }}>Certo!</h1>
    </div>    
    </div>
    
    <button type="submit" className="bottoneprimario">Prosegui (4/4)</button>
     


</div>

</form>
      )}
      


      {step === 6 && (
        <form onSubmit={handleSubmit3}>
          {showConfetti && (
      <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      numberOfPieces={200}
      gravity={0.5}
   

   
      onConfettiComplete={() => setShowConfetti(false)}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }}
    />
)}
      <div className="mt-3 grande texttt grande">
        <h1 className="font-medium centrale inferiore2">EVVAIIII! </h1>

        
     
   <h1 className="centrale">
          Se hai altri 60 secondi saremmo curiosi di raccogliere altri dati
        </h1>
    <button type="submit" className="bottoneprimario">Sicuro!</button>
  


</div>





</form>

      )}
      


      {step === 7 && (
  <form onSubmit={handleSubmit4}>
    <div className="mt-3 grande">
      <div className="image-wrapper">
        <img src={selectedImages[0]} alt="random image 1" />
      </div>
      <button type="submit" className="bottoneprimario">Prosegui (1/7)</button>
    </div>
  </form>
)}
        

        {step === 8 && (
  <form onSubmit={handleSubmit4}>
    <div className="mt-3 grande">
      <div className="image-wrapper">
        <img src={selectedImages[1]} alt="random image 2" />
      </div>
      <button type="submit" className="bottoneprimario">Prosegui (2/7)</button>
    </div>
  </form>
)}


{step === 9 && (
        <form onSubmit={handleSubmit4}>
      <div className="mt-3 ">
      <div className="azzurro">
      <label htmlFor="range" className="grande textt block font-medium text-sm text-gray-700 mb-2">
          Scommetteresti su un futuro climatico migliore?
            </label>
            <div className="sotto">
     
        <input
          type="range"
          className="slider"
          min="1"
          max="5"
          onChange={(event) => {
            setQuarto(event.target.value);
          }}
      
        />
   </div>
<div style={{ display: 'flex' }}>
      <h1 style={{ flex: 1 }}>Mai</h1>
      <h1 style={{ flex: 1, textAlign: 'right' }}>Certo!</h1>
      </div>
    </div>

    <button type="submit" className="bottoneprimario">Prosegui (3/7)</button>
     



</div>

</form>
      )}




{step === 10 && (
        <form onSubmit={handleSubmit4}>

      
      <div className="mt-3">
      <div class="container">
        <label htmlFor="range" className="grande textt block font-medium text-sm text-gray-700 mb-2">
        Credi che le notizie che hai letto corrispondano alla realtà?

        </label>
        </div>

        <div className="radio-buttons">
      <div className="radio-button">
        <input type="radio" id="yes" name="climate-articles" value="yes" onChange={() => setDomanda2("yes")} />
        <label htmlFor="yes" className="grande">Sì</label>
      </div>
      <div className="radio-button">
        <input type="radio" id="no" name="climate-articles" value="no" onChange={() => setDomanda2("no")} />
        <label htmlFor="no" className="grande">No</label>
      </div>
    </div>
            <button type="submit"   className="bottoneprimario">Prosegui (4/7)</button>
           </div>
          </form>
          
          
      )
      }



{step === 11 && (
        <form onSubmit={handleSubmit4}>
      <div className="mt-3">
     <div className="azzurro">

      {terzo > 3 ? (
          <label htmlFor="range" className="textt grande block font-medium text-sm text-gray-700 mb-2">
          Quanto pensi che i media siano pessimisti sul futuro?
            </label>
      ) : (
        <label htmlFor="range" className="textt grande block font-medium text-sm text-gray-700 mb-2">
    Quanto pensi che i media siano ottimisti sul futuro?
          </label>
      )}
        <div className="sotto">
        <input
          type="range"
          className="slider"
          min="1"
          max="5"
          onChange={(event) => {
            setQuinto(event.target.value);
          }}
      
        />
        </div>

        <div style={{ display: 'flex' }}>
      <h1 style={{ flex: 1 }}>Mai</h1>
      <h1 style={{ flex: 1, textAlign: 'right' }}>Troppo!</h1>
    </div>    
    </div>  
    <button type="submit" className="bottoneprimario">Prosegui (5/7)</button>
     


</div>

</form>
      )}












     



{step === 12 && (
        <form onSubmit={handleSubmit4}>

      
      <div className="mt-3">
      <div class="container">
      {terzo > 3 ? (
          <label htmlFor="range" className="textt grande block font-medium text-sm text-gray-700 mb-2">
          Hai una visione più negativa per il futuro?
            </label>
      ) : (
        <label htmlFor="range" className="textt grande block font-medium text-sm text-gray-700 mb-2">
     Hai una visione più positiva sul futuro?
          </label>
      )}

        </div>

        <div className="radio-buttons">
      <div className="radio-button">
        <input type="radio" id="yes" name="climate-articles" value="yes" onChange={() => setDomanda3("yes")} />
        <label htmlFor="yes" className="grande">Sì</label>
      </div>
      <div className="radio-button">
        <input type="radio" id="no" name="climate-articles" value="no" onChange={() => setDomanda3("no")} />
        <label htmlFor="no" className="grande">No</label>
      </div>
    </div>
            <button type="submit"   className="bottoneprimario">Prosegui (6/7)</button>
           </div>
          </form>
          
          
      )
      }

 

   {step === 13 && (
        <form onSubmit={handleSubmit5}>

      
      <div className="mt-3">
      <div class="container">
        <label htmlFor="range" className="grande textt block font-medium text-sm text-gray-700 mb-2">
        Credi di poter essere influenzato dalle notizie che leggi?

        </label>
        </div>

        <div className="radio-buttons">
      <div className="radio-button">
        <input type="radio" id="yes" name="climate-articles" value="yes" onChange={() => setDomanda4("yes")} />
        <label htmlFor="yes" className="grande">Sì</label>
      </div>
      <div className="radio-button">
        <input type="radio" id="no" name="climate-articles" value="no" onChange={() => setDomanda4("no")} />
        <label htmlFor="no" className="grande">No</label>
      </div>
    </div>
            <button type="submit"   className="bottoneprimario">Prosegui (7/7)</button>
           </div>
          </form>
          
          
      )
      }



      {step === 14 && (
        <form>
          {showConfetti && (
      <Confetti
      width={window.innerWidth}
      height={window.innerHeight}
      recycle={false}
      numberOfPieces={200}
      gravity={0.5}
   

   
      onConfettiComplete={() => setShowConfetti(false)}
      style={{ position: "fixed", top: 0, left: 0, zIndex: 100 }}
    />
)}
      <div className="mt-3 grande textt grande">
        <h1 className="font-medium centrale">GRAZIE MILLE, davvero!</h1>
      <br></br>
        <h1 className="centrale"> Senza il tuo contributo il nostro progetto non potrebbe esistere
        </h1>
     

     


</div>





</form>
      )}



       


    </div>
  </div>
</div>





        </header>
        

        {/* Grid starts here */}
        <div className="grid md:grid-cols-3 gap-8 lg:-mt-8 pb-40">
          {/* Single card */}
         
          
        </div>
      </div>
    </div>

   


    <div>      <img src={userData.sfondo2Url} alt="avatar" className="" /></div>
    </div>
    
  );
}