
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import { initializeApp } from 'firebase/app';

const firebaseConfig = {
    apiKey: "AIzaSyBsLeB10C-yGlEAHV7Qavv0KXEC_i2kExk",
    authDomain: "react1-37473.firebaseapp.com",
    projectId: "react1-37473",
    storageBucket: "react1-37473.appspot.com",
    messagingSenderId: "2586554844",
    appId: "1:2586554844:web:99fab600d9e46d1a559f19",
    measurementId: "G-QX22F1JX2H"
  };

  initializeApp(firebaseConfig);

ReactDOM.createRoot(document.getElementById('root')).render(

    <App />

)
