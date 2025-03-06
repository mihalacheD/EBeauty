import { SimpleGrid } from "@chakra-ui/react";
import useProducts from "../hooks/useProducts";
import ProductCard from "../components/ProductCard";


const Products = () => {
 const { products, error} = useProducts()

 return (
  <>
    {error && <p>{error}</p>}
    <SimpleGrid columns={{ sm: 1, md: 2, lg: 3, xl: 5}} margin='2' gap={8}>
        {products.map(product => <ProductCard key={product.id} product={product}/>)}
    </SimpleGrid>
  </>
);
};


export default Products
