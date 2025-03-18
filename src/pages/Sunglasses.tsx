import { Container, SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";

const Sunglasses= () => {
  const { data: products, error, isLoading } = useProducts("sunglasses");
  const skeleton = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10]

  return (
    <>
      {error && <p>{error.message}</p>}
      <Container my={12}>
      <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5}}  gap={6}>
          {isLoading && skeleton.map(skeleton => <ProductCardSkeleton key={skeleton}/>)}
          {products?.map(product => <ProductCard key={product.id} product={product}/>)}
      </SimpleGrid>
        </Container>
      </>
    );
  };


export default Sunglasses;