import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Home from "./Pages/Home";
import Navbar from "./Layouts/Navbar";
import Cart from "./Pages/Cart";
import Item from "./Pages/Item";
import Category from "./Pages/Category";
import Checkout from "./Pages/Checkout";


function App() {
  return (
    <BrowserRouter>
      <Navbar>
        <Routes>
          <Route index path="/" element={<Home />} />
          <Route exact path="/category/:id" element={<Category/>}/>
          <Route path="/item/:itemId" element={<Item />} />
          <Route path="/cart" element={<Cart />} />
          <Route path="/checkout" element={<Checkout />} />
        </Routes>
      </Navbar>
    </BrowserRouter>
  );
}

export default App;
