import { useParams } from 'react-router-dom';
import { useState, useEffect } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';

function ItemDetail({ handleCartAddition }) {
  const { title } = useParams();
  const [product, setProduct] = useState(null);
  const [quantity, setQuantity] = useState(1);
  const [productNotFound, setProductNotFound] = useState(false);

  const handleAddToCart = () => {
    handleCartAddition(product); // Llamar a handleCartAddition con el producto correspondiente
    console.log(`Añadido ${quantity} ${product.title} al carrito`);
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  useEffect(() => {
    const fetchProduct = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items');
      const q = query(itemsCollection, where('title', '==', title));
      const querySnapshot = await getDocs(q);
      if (querySnapshot.empty) {
        setProductNotFound(true);
        console.log('No such document!');
      } else {
        querySnapshot.forEach((doc) => {
          setProduct(doc.data());
        });
      }
    };
    fetchProduct();
  }, [title]);

  if (productNotFound) {
    return null; // O bien puedes retornar un mensaje en lugar del "h2" según tus necesidades
  }

  if (!product) {
    return null; // Cambiado de <h2>Producto no encontrado</h2> a null para que no se muestre nada
  }

  return (
    <div className='itemDetail'>
      <div className='itemDetail__image'>
        <img className='itemDetail__img' src={product.imageUrl} alt={product.title} />
      </div>
      <div className='itemDetail__info'>
        <h2>{product.title}</h2>
        <p>Nombre: {product.title}</p>
        <p>Descripción: {product.description}</p>
        <p>Precio: ${product.price}</p>
        <p>Stock: {product.stock}</p>
        <div className='itemDetail__add-to-cart'>
          <button onClick={handleAddToCart}>Añadir al carrito</button>
          <input type='number' value={quantity} onChange={handleQuantityChange} />
        </div>
      </div>
    </div>
  );
}

export default ItemDetail;
