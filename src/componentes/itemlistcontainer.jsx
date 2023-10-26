import { useEffect, useState } from 'react';
import { getFirestore, collection, query, where, getDocs } from 'firebase/firestore';
import ItemCard from './ItemCard';

const Itemlistcontainer = ({ categoryFilter }) => {
  const [items, setItems] = useState([]);

  useEffect(() => {
    const fetchItems = async () => {
      const db = getFirestore();
      const itemsCollection = collection(db, 'items');
      let q = query(itemsCollection);
      if (categoryFilter) {
        q = query(itemsCollection, where('categoryId', '==', categoryFilter));
      }
      try {
        const querySnapshot = await getDocs(q);
        const itemsArray = [];
        querySnapshot.forEach((doc) => {
          itemsArray.push(doc.data());
        });
        setItems(itemsArray);
      } catch (error) {
        console.log('Error getting documents: ', error);
      }
    };

    fetchItems();
  }, [categoryFilter]);

  const handleAddToCart = (item) => {
    console.log('Item added to cart:', item);
  };

  const handleViewDetail = (itemId) => {
    console.log('View item detail:', itemId);
  };

  return (
    <div className="contenedor_items">
      {items.map((item, index) => (
        <ItemCard
          key={index}
          item={item}
          onAddToCart={handleAddToCart}
          onViewDetail={handleViewDetail}
        />
      ))}
    </div>
  );
};

export default Itemlistcontainer;
