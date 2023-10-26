import { Brand } from './brand';
import Cartcontainer from './cartcontainer';
import Menubutton from './menubutton';
import '../navbar.css'; // asegúrate de tener un archivo Navbar.css para estos estilos
import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
      <div className="container-fluid">
        <Brand />
        <Menubutton />
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          <ul className="navbar-nav me-auto mb-2 mb-lg-0">
            <li className="nav-item">
              <Link to="/Zapatillas" className="nav-link">
                Zapatillas
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/Zapatos" className="nav-link">
                Zapatos
              </Link>
            </li>
          </ul>
        </div>
        <Link to="/cart">
          <Cartcontainer color="blue" />
        </Link>
      </div>
    </nav>
  );
};

export default Navbar;
