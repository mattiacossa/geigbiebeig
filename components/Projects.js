import React from "react";
import userData from "@constants/data";
import {addDoc, collection} from 'firebase/firestore'
import {db} from '../firebaseConfig'
import{useState} from 'react'
import Confetti from "react-confetti";


export default function Projects() {
  const [showConfetti, setShowConfetti] = useState(false);
  const [buttonPressed, setButtonPressed] = useState(false);
  
  const [formData, setFormData] = useState({}); // initialize form data
  const [showText, setShowText] = useState(false);

  const[primo,setPrimo] = useState('0');

  const userCollectionRef = collection(db, "CONTATTI")


 //SUBMIT TOALE
 
 
 
 const handleSubmit2 =(event) => {

  event.preventDefault(); // prevent page reload
  setShowConfetti(true);
     
//PRIMA PARTE mia a caso, SECONDA Parte codice
addDoc(userCollectionRef, {
  primo:primo,
  

}



    )
    setShowText(true);


}

  return (
    <div>
      <img src={userData.sfondofinale}></img>
      
      <section className="biglietto">
        
       
       
  
  
        <div className="dark:bg-gray-900 linea">
          
          <div className="text-container max-w-6xl mx-auto pt-10">
            <p
              className="leading-loose text-2xl md:text-3xl font-semibold mx-4 text-center text-gray-100 sopra"
              style={{lineHeight: "35px"}}
            >
         Hey, inserisci la tua mail per ricevere un aggiornamento appena pubblicheremo i risultati della ricerca.*
              
              </p>

              <p
              className="leading-loose text-1xl md:text-1xl font-semibold mx-4 text-center text-gray-100"
              style={{lineHeight: "20px"}}
            >
       *questo è l'unico dato non anonimo che registriamo e lo usiamo solo per aggiornarti sul progetto finale. 😏
              
              </p>


</div>
</div>
<div className="linea4" style={{ display: "flex", justifyContent: "center", alignItems: "center", }}>
  <div className="linea3">
    <form onSubmit={handleSubmit2}>
    
      <div className="mt-3">
        <div style={{ display: "flex", justifyContent: "center" }}>
          <input
            type="text"
            placeholder="Indirizzo email"
            className="inputt"
            onChange={(event) => {
              setPrimo(event.target.value);
            }}
          />




<button type="submit" className="bottoneprimario1 spazio">
  <div style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="16"
      height="16"
      fill="currentColor"
      className="bi bi-arrow-right-circle-fill"
      viewBox="0 0 16 16"
    >
       <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zM7 6.5c0 .501-.164.396-.415.235C6.42 6.629 6.218 6.5 6 6.5c-.218 0-.42.13-.585.235C5.164 6.896 5 7 5 6.5 5 5.672 5.448 5 6 5s1 .672 1 1.5zm5.331 3a1 1 0 0 1 0 1A4.998 4.998 0 0 1 8 13a4.998 4.998 0 0 1-4.33-2.5A1 1 0 0 1 4.535 9h6.93a1 1 0 0 1 .866.5zm-1.746-2.765C10.42 6.629 10.218 6.5 10 6.5c-.218 0-.42.13-.585.235C9.164 6.896 9 7 9 6.5c0-.828.448-1.5 1-1.5s1 .672 1 1.5c0 .501-.164.396-.415.235z"/>
    </svg>
  </div>
</button>

        </div>
       
   
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

    {showText &&      <p  className="leading-loose text-1xl md:text-2xl font-semibold mx-4 text-center sottot"
              >
                
                
                Houston, abbiamo ricevuto! Chiudo 🎉</p>}
    
      </div>
    </form>
  </div>
</div>


    
      
      </section>
      </div>
    );
}


