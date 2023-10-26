import { Link } from 'react-router-dom'; // Importa Link desde React Router

function ItemList({ items }) {
  return (
    <div>
      <h1>Lista de Items</h1>
      <ul className="item-list">
        {items.map((item, index) => (
          <li key={index} className="item-list-item">
            <h2>{item.name}</h2>
            <p>Precio: ${item.price}</p>
            {/* Utiliza Link para crear un enlace a la página de detalle de producto */}
            <Link to={`/item/${index + 1}`}>Ver detalle</Link>
            <img
              src={item.image}
              alt={item.name}
              className="item-list-image"
            />
          </li>
        ))}
      </ul>
    </div>
  );
}

export default ItemList;