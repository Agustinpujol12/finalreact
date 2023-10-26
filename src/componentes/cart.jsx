import { useContext } from "react";
import CartContext from "../context/cart.context";
import { Button, Flex, Heading, Text } from "@chakra-ui/react";
import { useNavigate } from "react-router-dom";
import CartSummaryTable from "./cartsummarytable";

function Cart() {
  const { cart } = useContext(CartContext);
  const navigate = useNavigate();

  // Verifica si cart es undefined o si no tiene la propiedad items
  if (!cart || !cart.items) {
    return <Text>El carrito está vacío</Text>;
  }

  return (
    <Flex flexDir={"column"}>
      <Heading>Resumen del carrito</Heading>
      <CartSummaryTable cart={cart} />
      <Button onClick={() => navigate("/checkout")}>Finalizar Compra</Button>
    </Flex>
  );
}

export default Cart;