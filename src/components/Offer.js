import React from 'react';
import { Box, Image, HStack, VStack, Link, Text, Button } from "@chakra-ui/react";


function Offer() {
    const imageLink = require("../images/restaurant_inside.jpg");
    return (
      <VStack
        marginTop={20}
        paddingBottom={40}
        bgImage={imageLink}
        bgColor="grey"
        bgBlendMode="darken"
        bgSize="cover"
        spacing={10}
      >
        <Text
          color="white"
          h="20"
          fontWeight="bold"
          fontFamily="Sketchup Regular"
          fontSize="60"
        >
          SPECIAL OFFER
        </Text>
        <Text
          color="white"
          paddingBottom="20px"
          fontWeight="bold"
          fontSize="30"
        >
          30% Off This Weekend
        </Text>
        <Link href="/book" >
          <Button
            _focus={{}}
            fontSize="25"
            fontWeight="bold"
            bg="transparent"
            textColor="white"
            borderColor="white"
            borderWidth="3px"
            h="50"
            paddingStart={50}
            paddingEnd={50}
            variant="outline"
          >
            Book now
          </Button>
        </Link>
      </VStack>
    );
}

export default Offer;