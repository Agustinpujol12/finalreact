import { Box, Image, Text, Button } from '@chakra-ui/react';
import { Link } from 'react-router-dom';

const ItemCard = ({ item, onAddToCart }) => {
  return (
    <Box maxW="sm" borderWidth="1px" borderRadius="lg" overflow="hidden" m={4}>
      <Link to={`/items/${item.title}`}>
        <Image src={item.imageUrl} alt={item.title} boxSize="200px" objectFit="cover" />
      </Link>
      <Box p="6">
        <Box d="flex" alignItems="baseline">
          <Text fontSize="2xl" fontWeight="semibold" mr={2}>
            {item.title}
          </Text>
          <Text fontSize="xl" color="gray.500">
            ${item.price}
          </Text>
        </Box>

        <Button colorScheme="teal" variant="outline" mt={4} onClick={() => onAddToCart(item)}>
          Añadir al carrito
        </Button>
        <Link to={`/items/${item.title}`}>
          <Button colorScheme="blue" variant="outline" mt={4}>
            Ver detalle
          </Button>
        </Link>
      </Box>
    </Box>
  );
};

export default ItemCard;