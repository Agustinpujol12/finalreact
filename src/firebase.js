// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBsLeB10C-yGlEAHV7Qavv0KXEC_i2kExk",
  authDomain: "react1-37473.firebaseapp.com",
  projectId: "react1-37473",
  storageBucket: "react1-37473.appspot.com",
  messagingSenderId: "2586554844",
  appId: "1:2586554844:web:99fab600d9e46d1a559f19",
  measurementId: "G-QX22F1JX2H"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);