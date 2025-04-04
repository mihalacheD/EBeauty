import { Grid, GridItem, Box, Text } from "@chakra-ui/react";
import TopProducts from "../components/TopProducts";

const HomePage = () => {
  return (
    <Grid
      templateColumns={["1fr", "1fr"]}
      gap={4}
      p={4}
      w="100%"
    >
      <GridItem colSpan={2} w="100%">
        <Box w="100%" p={0}>
          <TopProducts />
        </Box>
      </GridItem>

      <GridItem colSpan={1} w="100%">
        <Box w="100%" h="300px" bgColor="gray.100">
        <Text fontSize="lg" color="gray.500" mt={2} textAlign="center">
          *Inspirat din designul platformei eMAG, realizat în scop educațional, demonstrativ.
        </Text>
        </Box>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
