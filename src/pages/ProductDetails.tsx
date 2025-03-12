import { Box, Spinner, Text, Image, Flex,Badge } from "@chakra-ui/react"
import { useParams } from "react-router-dom"
import useProductDetails from "../hooks/useProductDetails";


const ProductDetails = () => {

  const { id } = useParams<{id: string}>()
  const productId = Number(id)
  const { product, error, isLoading} = useProductDetails(productId)

  const discountedPrice = product
  ? product.price - (product.price * (product.discountPercentage / 100))
  : 0;


  if (isLoading) return <Spinner/>
  if (error) return <Text color="red.500">Error: {error}</Text>;


  return (
    <Box padding={8} maxW="800px" margin="auto">
       {product ? (
      <>
      <Image src={product.thumbnail} alt={product.title} borderRadius="md" mb={4} /><Text fontSize="2xl" fontWeight="bold">{product.title}</Text><Text color="gray.600" mb={4}>{product.description}</Text><Flex gap={4} alignItems="center">
          <Text fontSize="xl" fontWeight="bold" color="#ff1d25">
            ${discountedPrice.toFixed(2)}
          </Text>
          {product.discountPercentage > 0 && (
            <Text fontSize="md" color="gray.500" textDecoration="line-through">
              ${product.price}
            </Text>
          )}
          {product.discountPercentage > 0 && (
            <Badge colorScheme="blue" fontSize="0.8em">
              -{product.discountPercentage}%
            </Badge>
          )}
        </Flex><Text mt={4}>Brand: <Badge colorScheme="red">{product.brand}</Badge></Text><Text>Category: {product.category}</Text><Text>Stock: {product.stock} left</Text></>
    ) : (
      <Text>No product found.</Text>
    )}
    </Box>
  );
  
};

export default ProductDetails
