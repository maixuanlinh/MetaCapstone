import Offer from "./Offer";
import Body from "./Body";
import { HStack, SimpleGrid, Box, Text, Image, Stack } from "@chakra-ui/react";
import TableReservationForm from "./TableReservationForm";
function BookPage() {
    const imageLink = require("../images/restaurant-reservation.jpeg");
  return (
    <div>
      <SimpleGrid minChildWidth={400}>
        <Box paddingLeft="40px">
          <Text as="H1" fontSize="40">
            Make a reservation
          </Text>
          <TableReservationForm />
        </Box>
        <Box paddingRight="40px">
          <Image paddingTop="50px" w="100%" src={imageLink} />
        </Box>
      </SimpleGrid>
    </div>
  );
}

export default BookPage;
