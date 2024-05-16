// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import firebase from "firebase/compat/app";

const firebaseConfig = {
  apiKey: "AIzaSyAa-gi5bdvn5VQEcrcPsnTwGtYSgphUgoo",
  authDomain: "netflix-mirror-186cf.firebaseapp.com",
  projectId: "netflix-mirror-186cf",
  storageBucket: "netflix-mirror-186cf.appspot.com",
  messagingSenderId: "192534174229",
  appId: "1:192534174229:web:cdffb3e4a7c30ecc968c1c",
  measurementId: "G-89TZS6FH20"
};


const app = initializeApp(firebaseConfig);
export const firebaseAuth = getAuth(app);