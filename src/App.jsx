import './App.css';
import Navbar from './componentes/navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Itemlistcontainer from './componentes/itemlistcontainer';
import 'bootstrap/dist/css/bootstrap.min.css';
import ItemDetail from './componentes/itemDetail';
// import Cartcontainer from './componentes/cartcontainer';
import Cart from './componentes/cart';

function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<Itemlistcontainer />} />
        <Route path="/Zapatillas" element={<Itemlistcontainer categoryFilter="zapatillas" />} />
        <Route path="/Zapatos" element={<Itemlistcontainer categoryFilter="zapato" />} />
        <Route path="/items/:title" element={<ItemDetail />} />
        <Route path="/cart" element={<Cart />} />
      </Routes>
    </Router>
  );
}



export default App;
