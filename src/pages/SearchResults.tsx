import { useLocation } from "react-router-dom";
import { Container, SimpleGrid, Text } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";
import AllProducts from "./AllProducts";

const SearchResults = () => {
  const location = useLocation();
  const searchParams = new URLSearchParams(location.search); // Obținem parametrii din URL
  const searchText = searchParams.get("q") || ""; // Extragem valoarea "q" din URL

  const { data: products, error, isLoading } = useProducts();
  const filteredProducts = products?.filter((product) =>
    product.title.toLowerCase().includes(searchText.toLowerCase())
  );

  const skeleton = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

  return (
    <>
    {error && <p>{error.message}</p>}
    <Container my={12}>
      {filteredProducts?.length === 0 && !isLoading ? (
        <>
        <Text fontSize="2xl" color="gray.500" mx='9'>
            No item found
        </Text>
        <AllProducts />
        </>
      ) : (
        <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5 }} gap={6}>
          {isLoading &&
            skeleton.map((skeleton) => <ProductCardSkeleton key={skeleton} />)}

          {filteredProducts?.map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </SimpleGrid>
      )}
    </Container>
  </>
);
};

export default SearchResults;
