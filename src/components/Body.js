import React from "react";
import { Box, Image, Link, Stack, Flex, SimpleGrid, VStack, Grid, Text } from "@chakra-ui/react";

function Body() {
  const img1Link = require("../images/Grill.jpg");
   const img2Link = require("../images/salad.jpg");
    const img3Link = require("../images/head_chef.jpg");
  return (
    <SimpleGrid paddingTop={20} minChildWidth="400px" spacing="40px">
      <Box w="100%" height="auto">
        <VStack w="100%">
          <h2>Our New Menu</h2>
          <Image src={img1Link} w="100%" h="auto" />
          <Text paddingTop={10}>
            Our menu consists of 12-15 seasonal items based on Italian, Greek,
            and Turkish culture.
          </Text>
          <Text>
            <Link color="orange" textDecor="none" href="/menu/">
              See our new menu
            </Link>
          </Text>
        </VStack>
      </Box>
      <Box w="100%" height="auto">
        <VStack w="100%">
          <h2>Book a Table</h2>
          <Image src={img2Link} w="100%" h="auto" />
          <Text paddingTop={10} fontSize="medium">
            Reserve your table for an Italian, Greek, and Turkish dining
            experience.
          </Text>
          <Text>
            <Link color="orange" textDecor="none" href="/book/">
              Book your table now
            </Link>
          </Text>
        </VStack>
      </Box>
      <Box w="100%" height="auto">
        <VStack w="100%">
          <h2>Opening hours</h2>
          <Image src={img3Link} w="100%" h="auto" />
          <Text paddingTop={10}>
            The Little Lemon Restaurant is open 7 days a week, except for public
            holidays.
          </Text>

          <ul>
            <li>Mon - Fri: 2pm - 10pm</li>
            <li>Sat: 2pm - 11pm</li>
            <li>Sun: 2pm - 9pm</li>
          </ul>
        </VStack>
      </Box>
    </SimpleGrid>
  );
}

export default Body;
