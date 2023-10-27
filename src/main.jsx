import ReactDOM from "react-dom/client";
import App from "./App.jsx";
import "./index.css";
import { initializeApp } from "firebase/app";
import CartProvider from "./context/cart.provider.jsx";
import { ChakraProvider } from "@chakra-ui/react";

const firebaseConfig = {
  apiKey: "AIzaSyBSHc-YWITIWMFkTqHXW1MPXLmJKBMT_tU",
  authDomain: "react-final-agu.firebaseapp.com",
  projectId: "react-final-agu",
  storageBucket: "react-final-agu.appspot.com",
  messagingSenderId: "1056717137384",
  appId: "1:1056717137384:web:cbdf3d1134c6cffebaf05d",
  measurementId: "G-MEC792PBDL"
};

  initializeApp(firebaseConfig);

  ReactDOM.createRoot(document.getElementById("root")).render(
    <ChakraProvider>
      <CartProvider>
        <App />
      </CartProvider>
    </ChakraProvider>
  );
