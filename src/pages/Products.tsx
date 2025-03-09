import { SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";
import ProductCardSkeleton from "../components/ProductCardSkeleton";


const Products = () => {
 const { products, error, isLoading} = useProducts()
 const skeleton = [ 1, 2, 3, 4, 5, 6, 7, 8, 9]

 return (
  <>
    {error && <p>{error}</p>}
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 4, xl: 5}}  gap={6}>
        {isLoading && skeleton.map(skeleton => <ProductCardSkeleton key={skeleton}/>)}
        {products.map(product => <ProductCard key={product.id} product={product}/>)}
    </SimpleGrid>
  </>
);
};


export default Products
