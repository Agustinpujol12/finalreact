import { useParams } from "react-router-dom";
import useItemById from "../hooks/useItemById";
import { Flex, Heading } from "@chakra-ui/react";
import { ProductCard } from "../components/ProductCard";
import { useContext } from "react";
import CartContext from "../context/cart.context";
import {useCounter} from "../hooks/useCounter.jsx";
import { Button, ButtonGroup, Text } from '@chakra-ui/react';

function Item() {
  const params = useParams();
  const { item, isLoading } = useItemById(params.itemId);
  const { addItem } = useContext(CartContext);
  const {counter, decrement, increment, reset} = useCounter(1,0,10)

  if (isLoading) {
    return <div>Cargando...</div>;
  }

  if (!item) return <div>No hay productos con la id: {params.itemId}</div>;

  return (
    <Flex flexDir={"column"}>
      <Heading>Producto</Heading>
      <ProductCard item={item} handleClick={addItem} />
      <ButtonGroup marginTop="1em">
        <Button onClick={decrement}>
          -
        </Button>
        <Text margin="3px" alignItems="center" display="flex">
          {counter}
        </Text>
        <Button onClick={increment}>
          +
        </Button>
        <Button onClick={reset}>
          Reset
        </Button>
        <Button
            variant="solid"
            onClick={() => addItem(item, counter)}
        >
          Agregar al carrito
        </Button>
      </ButtonGroup>
    </Flex>
  );
}

export default Item;