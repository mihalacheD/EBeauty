import { Card, Flex, Box } from "@chakra-ui/react";
import { ProductDetails } from "../hooks/useProductDetails";
import { LargeShoppingButton } from "./buttons/ShoppingButton";
import { LargeFavouriteButton } from "./buttons/FavouriteButton";
import { calculateDiscountedPrice } from "../utils/calculateDiscountedPrice";


interface Props {
  product: ProductDetails;
}

const ProductDetailsCard = ({product}: Props) => {

  if (!product) return null;

  const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercentage);

  return (
        <Box textAlign={{ sm: "center", md: "left" }} >
          <Card.Root
            borderRadius="lg"
            borderColor="gray.50"
            bg="white"
            boxShadow="xs"
            height="100%"
            minHeight="500px"
            display="flex"
            flexDirection="column"
            flex="1"
           >
          <Card.Body>
              {product.discountPercentage > 0 && (
                <Card.Title fontSize="2xl" color="gray.500" textDecoration="line-through" my={4} >
                ${product.price}
                </Card.Title>
              )}
              <Card.Title fontSize="4xl" fontWeight="bold" color="#ff1d25" my={4}>
              ${discountedPrice.toFixed(2)}
              </Card.Title>


                <Card.Title fontSize="larger" color='#7ecc7e'>
                  Discount: {product.discountPercentage}%
                </Card.Title>
                {/* Brand */}
                <Card.Title fontSize="larger" my={4} color="gray.600">
                  By: {product.brand}
                </Card.Title>
                <Card.Title fontSize="larger"  my={4} color={product.stock >= 10 ? 'gray.600' : "#ff1d25"}>
                  Items left: {product.stock}
                </Card.Title>
          </Card.Body>

          <Card.Footer p={4}>
            <Flex direction='column' gap={4} width='full'>
                <LargeShoppingButton product={product}/>
                <LargeFavouriteButton productId={product.id}/>
            </Flex>
          </Card.Footer>

          </Card.Root>
        </Box>
  )
}

export default ProductDetailsCard
