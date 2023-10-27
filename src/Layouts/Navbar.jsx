import { Box, Menu, MenuButton, MenuList, MenuItem, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import CartWidget from "../components/cartWidget";
import { useLocation } from "react-router-dom";
import { Brand } from "../components/brand";

function Navbar({ children }) {
  const location = useLocation();
  return (
    <Box bg="blue.500" color="white" p={4} pb={6}>
      <nav>
        <Box as="ul" display="flex" gap="5" listStyleType="none">
          <li>
            {/* Reemplaza el texto "Inicio" con el componente Brand */}
            <Brand />
          </li>
          <li>
            <Menu>
              <MenuButton as={Button} variant="link" color="white">
                Productos
              </MenuButton>
              <MenuList color="black">
                <MenuItem as={Link} to="/category/zapatillas" color="black">
                  Zapatillas
                </MenuItem>
                <MenuItem as={Link} to="/category/zapato" color="black">
                  Zapatos
                </MenuItem>
              </MenuList>
            </Menu>
          </li>
          <Box marginLeft="auto">
            {location.pathname !== "/cart" && <CartWidget />}
          </Box>
        </Box>
      </nav>
      {children}
    </Box>
  );
}

export default Navbar;
