// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBH0TTcPXzcJuWiaa6Gk6urg_u7--JpcSc",
  authDomain: "piso-7304c.firebaseapp.com",
  databaseURL: "https://piso-7304c-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "piso-7304c",
  storageBucket: "piso-7304c.appspot.com",
  messagingSenderId: "1040893025835",
  appId: "1:1040893025835:web:1a1f1683a13ef71f5d946e"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);