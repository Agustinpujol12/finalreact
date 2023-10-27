import { Button, FormControl, FormLabel, Input, Grid, GridItem } from "@chakra-ui/react";

function BuyerForm({ onSubmit, values, handleChange }) {
  return (
    <form onSubmit={onSubmit}>
      <Grid templateColumns="repeat(2, 1fr)" gap={6}>
        <GridItem colSpan={2}>
          <FormControl id="name">
            <FormLabel>Nombre</FormLabel>
            <Input
              value={values.name}
              name="name"
              type="text"
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl id="lastName">
            <FormLabel>Apellido</FormLabel>
            <Input
              value={values.lastName}
              name="lastName"
              type="text"
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl id="phone">
            <FormLabel>Teléfono</FormLabel>
            <Input
              value={values.phone}
              name="phone"
              type="text"
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl id="email">
            <FormLabel>Email</FormLabel>
            <Input
              value={values.email}
              name="email"
              type="email"
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <FormControl id="email2">
            <FormLabel>Repita email por favor</FormLabel>
            <Input
              value={values.email2}
              name="email2"
              type="email"
              onChange={handleChange}
            />
          </FormControl>
        </GridItem>
        <GridItem colSpan={2}>
          <Button colorScheme="teal" size="lg" w="100%" mt="8" type="submit">
            Comprar
          </Button>
        </GridItem>
      </Grid>
    </form>
  );
}

export default BuyerForm;
