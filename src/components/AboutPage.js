import Offer from "./Offer";
import {
    HStack, SimpleGrid, Box, Text, Image, Stack
} from '@chakra-ui/react'

function AboutPage() {
    const imageLink = require("../images/head_chef.jpg")

  return (
    <div>
      <SimpleGrid marginTop={50} minChildWidth="600px" spacing="50px">
        <Box>
          <Text as="H1" fontWeight="black">
            About Us
          </Text>
          <Text whiteSpace="pre-line" fontSize={18}>
            Based in Chicago, Illinois, Little Lemon is a family owned
            Mediterranean restaurant, focused on traditional recipes served with
            a modern twist. 
            
            The chefs draw inspiration from Italian, Greek, and
            Turkish culture and have a menu of 12-15 items that they rotate
            seasonally. The restaurant has a rustic and relaxed atmosphere with
            moderate prices, making it a popular place for a meal any time of
            the day. Little Lemon is owned by two Italian brothers, Mario and
            Adrian, who moved to the United States to pursue their shared dream
            of owning a restaurant. To craft the menu, Mario relies on family
            recipes and his experience as a chef in Italy. Adrian does all the
            marketing for the restaurant and led the effort to expand the menu
            beyond classic Italian to incorporate additional cuisines from the
            mediterranean region.
          </Text>
        </Box>
        <Box>
          <Stack w="100%" spacing={8}>
            <Image w="100%" marginTop={40} src={imageLink}></Image>
            <Text alignSelf="center" paddingTop="10px" fontSize="sm">
              Little Lemon owners Mario and Adrian.
            </Text>
          </Stack>
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default AboutPage;
