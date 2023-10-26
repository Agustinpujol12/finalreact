import { useState } from 'react';
import Carticon from "./carticon";
import Cartitems from "./cartitems";
import ItemDetail from './itemDetail';

const Cartcontainer = () => {
    const [clickCount, setClickCount] = useState(0);
    const [cartItems, setCartItems] = useState([]);

    const handleCartAddition = (product) => {
        const newItem = {
            id: cartItems.length + 1,
            product: product // Agrega el producto completo al carrito
        };
        setCartItems([...cartItems, newItem]);
        setClickCount(clickCount + 1); // Incrementar el recuento de clics
        console.log("Click Count:", clickCount); // Verificar si clickCount se está actualizando correctamente
    };

    return (
        <div className="bg-secondary px-3">
            <Carticon color="blue"/>
            <Cartitems items={cartItems} />
            <ItemDetail handleCartAddition={handleCartAddition} />
        </div>
    );
}

export default Cartcontainer;
