// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBSHc-YWITIWMFkTqHXW1MPXLmJKBMT_tU",
  authDomain: "react-final-agu.firebaseapp.com",
  projectId: "react-final-agu",
  storageBucket: "react-final-agu.appspot.com",
  messagingSenderId: "1056717137384",
  appId: "1:1056717137384:web:cbdf3d1134c6cffebaf05d",
  measurementId: "G-MEC792PBDL"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);