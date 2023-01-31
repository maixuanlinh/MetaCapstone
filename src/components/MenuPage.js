import Offer from "./Offer";
import { HStack, SimpleGrid, Box, Text, Image, Stack } from "@chakra-ui/react";

function MenuPage() {
  const imageLink = require("../images/head_chef.jpg");

  return (
    <div>
      <Text align="center" as="H1" fontSize="40">
        Menu
      </Text>
      <SimpleGrid marginTop={50} minChildWidth="300px" spacing="50px">
        <Box>
          <Text align="center" fontWeight="bold" color="orange">
            Bruschetta
          </Text>
          <Text align="center">£11.00</Text>
        </Box>

        <Box>
          <Text align="center" fontWeight="bold" color="orange">
            Greek Salad
          </Text>
          <Text align="center">£9.00</Text>
        </Box>

        <Box>
          <Text align="center" fontWeight="bold" color="orange">
            Grill Fish
          </Text>
          <Text align="center">£15.00</Text>
        </Box>

        <Box>
          <Text align="center" fontWeight="bold" color="orange">
            Lemon Dessest
          </Text>
          <Text align="center">£12.00</Text>
        </Box>
        <Box>
          <Text align="center" fontWeight="bold" color="orange">
            Bruschetta
          </Text>
          <Text align="center">£11.00</Text>
        </Box>

        <Box>
          <Text align="center" fontWeight="bold" color="orange">
            Greek Salad
          </Text>
          <Text align="center">£9.00</Text>
        </Box>

        <Box>
          <Text align="center" fontWeight="bold" color="orange">
            Grill Fish
          </Text>
          <Text align="center">£15.00</Text>
        </Box>

        <Box>
          <Text align="center" fontWeight="bold" color="orange">
            Lemon Dessest
          </Text>
          <Text align="center">£12.00</Text>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default MenuPage;
