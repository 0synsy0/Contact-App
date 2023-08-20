// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAvMauHmNOXazxRpiq5_CpM9nOe2nLTHWc",
  authDomain: "vite-contact-38430.firebaseapp.com",
  projectId: "vite-contact-38430",
  storageBucket: "vite-contact-38430.appspot.com",
  messagingSenderId: "855540103312",
  appId: "1:855540103312:web:09a8ae0bd4c4e0a1f68015",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
