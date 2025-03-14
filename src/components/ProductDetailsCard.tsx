import { Card, Button, Flex, Box, Text} from "@chakra-ui/react";
import { Heart, ShoppingCart } from "lucide-react";
import { ProductDetails } from "../hooks/useProductDetails";

interface Props {
  product: ProductDetails;
}

const ProductDetailsCard = ({product}: Props) => {

  if (!product) return null;

  const discountedPrice = product
  ? product.price - (product.price * (product.discountPercentage / 100))
  : 0;

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
                <Card.Title fontSize="larger" my={4} color="black">
                  By: {product.brand}
                </Card.Title>
                <Card.Title fontSize="larger"  my={4} color={product.stock >= 10 ? 'black' : "#ff1d25"}>
                  Items left: {product.stock}
                </Card.Title>
          </Card.Body>

          <Card.Footer p={4}>
            <Flex direction='column' gap={4} width='full'>
              <Button size='2xl' bg='#186bd8' color='white' width="100%">
                 <ShoppingCart style={{ height: '40px', width: '40px' }}/>
                 <Text fontSize="xl" fontWeight='medium'>Add to cart</Text>
              </Button>
              <Button size='2xl' color='#186bd8' width="100%" variant='outline'>
                 <Heart size={16} style={{ height: '40px', width: '40px' }}/>
                 <Text fontSize="xl" fontWeight='medium'>Add to Favourite</Text>
              </Button>
            </Flex>
          </Card.Footer>

          </Card.Root>
        </Box>
  )
}

export default ProductDetailsCard
