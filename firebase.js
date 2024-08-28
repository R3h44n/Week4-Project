// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDDebJtIqiCZRszPFZWdDEWn0ZMmpp1oEI",
  authDomain: "flashcardsaas-b57e5.firebaseapp.com",
  projectId: "flashcardsaas-b57e5",
  storageBucket: "flashcardsaas-b57e5.appspot.com",
  messagingSenderId: "325514229659",
  appId: "1:325514229659:web:e8efed36d93be4a52f933e",
  measurementId: "G-463P4RJ9SV"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

export {db}