import React from "react";
import {
  Box,
  Image,
  HStack,
  VStack,
  Link,
  Text,
  Button,
} from "@chakra-ui/react";

function Footer() {
    const imageLink = require("../images/logo_footer.png");
    return (
      <HStack marginTop="40px" w="100%" h="100px" bg="#EDEFEE">
        <Box w="50%">
          <Image src={imageLink} />
        </Box>
        <VStack w="50%">
          <Box bg="black" w="100%" h="2px" marginBottom="10px" marginRight="30px"/>
          <Text w="100%" align="right" paddingRight="30px" fontSize="1.2rem">
            Copyright Little Lemon
          </Text>
        </VStack>
      </HStack>
    );
}

export default Footer;
