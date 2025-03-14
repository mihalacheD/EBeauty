import {Text, Flex, Box, Badge} from "@chakra-ui/react"
import RenderStar from "./RenderStar"
import { ProductDetails } from "../hooks/useProductDetails";

interface Props {
  product: ProductDetails;
}

const ProductDetailsInfo = ({product}: Props) => {
  return (

      <Box
      textAlign='left'
      bg="white"
      py={9}
      px={5}
      display="flex"
      flexDirection="column"
      justifyContent="space-between"
      height="100%"
      >
      {/* Categorie */}
      <Text fontSize="larger" fontWeight="bold" my={3}>
        Category: <Badge bg="purple" fontSize="medium" p={2}>
                      {product.category}
                  </Badge>
      </Text>

      {/* Rating cu stele */}
      <RenderStar rating={product.rating} />

      {/* Disponibilitate */}
      <Flex alignItems="center" my={3} gap={2}>
        <Text fontSize="larger">Availability:</Text>
        <Badge fontSize="medium" p={2} bg={product.availabilityStatus === "In Stock" ? "green" : "red"}>
          {product.availabilityStatus}
        </Badge>
      </Flex>

      {/* Dimensiuni & Greutate */}
      <Text mt={3} fontSize="larger" color="gray.600" py={2}>
        Dimensions: {product.dimensions.width} x {product.dimensions.height} x {product.dimensions.depth} cm
      </Text>
      <Text fontSize="larger" color="gray.600">Weight: {product.weight} kg</Text>

      {/* Garanție & Livrare */}
      <Text mt={3} fontSize="larger" color="gray.600">
        <strong>Warranty:</strong> {product.warrantyInformation}
      </Text>
      <Text fontSize="larger" color="gray.600">
        <strong>Shipping:</strong> {product.shippingInformation}
      </Text>

      {/* Politica de returnare */}
      <Box mt={4} py={3} borderRadius="md">
        <Text fontSize="larger" fontWeight="medium" >Return Policy:</Text>
        <Text fontSize="md" color="gray.600" py={2}>{product.returnPolicy}</Text>
      </Box>
      </Box>

        )
      }

export default ProductDetailsInfo
