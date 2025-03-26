import { Badge, Box, Card, Flex, Image, Text } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'
import RenderStar from './RenderStar';
import ExpandableText from './ExpandableText';
import { useNavigate } from 'react-router-dom';
import { SmallShoppingButton } from './buttons/ShoppingButton';
import { calculateDiscountedPrice } from '../utils/calculateDiscountedPrice';



interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {

  const navigate = useNavigate()
  const handleCardClick = () => {
    navigate(`/product/${product.id}`)
  }

  const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercentage);
  // Logica pentru a verifica dacă produsul este "NEW" pe baza categoriei
  const isNew = () => {
    const newCategories = ["beauty", "bags", "fashion"]; // Lista de categorii considerate "noi"
    return newCategories.includes(product.category); // Verificăm dacă produsul face parte din categoria "nouă"
  };
  const isBestSeller = product.stock < 10;

  return (
    <Card.Root
      borderRadius="lg"
      borderColor="gray.100"
      bg="white"
      boxShadow="sm"
      height="100%"
      display="flex"
      flexDirection="column"
      maxW="sm"
      _hover={{ boxShadow: 'lg' }}
      position="relative"
      onClick={handleCardClick}
    >


       {/* Brand Badge - Top Left */}
       {product.brand && (
        <Badge
          position="absolute"
          top="2"
          left="2"
          bg="rgba(255, 29, 37, 0.8)"
          color="white"
          fontSize="medium"
          fontWeight="medium"
          px={3}
          py={2}
          zIndex="1"
        >
          {product.brand}
        </Badge>
      )}

        {/* Badge pentru "NEW" sau "Best Seller" */}
        {(isNew() || isBestSeller) && (
        <Badge
          bg={isNew() ? '#7ecc7e' : '#186bd8'}
          position="absolute"
          top="2"
          right="2"
          color="white"
          width='fit-content'
          px={3}
          py={2}
          zIndex="1"
          fontSize="sm"
        >
          {isNew() ? 'NEW' : 'TOP'}
        </Badge>
      )}


      <Image
        src={product.thumbnail}
        alt={product.title}
        objectFit="cover"
        borderRadius="md"
        mx="auto"
        _hover={{ transform: 'scale(1.1)', transition: '0.3s' }}
      />



      <Card.Body textAlign="center" paddingX={5} paddingBottom={5} paddingTop={1} display="flex" flexDirection="column" justifyContent="space-between" flex="1">
        <Flex direction="column" gap={4} alignItems="center">
           <ExpandableText children={product.title}/>
          <RenderStar rating={product.rating} />

        </Flex>

         {/* Price + Discount */}
         <Box mt={4}>
          {product.discountPercentage ? (
            <Flex justifyContent="center" alignItems="baseline" gap={2}>
              <Text fontSize="xl" fontWeight="bold" color="#ff1d25">
                ${discountedPrice.toFixed(2)}
              </Text>
              <Text fontSize="sm" color="gray.500" textDecoration="line-through">
                ${product.price}
              </Text>
              <Badge bg="#1dc1ff" fontSize="0.8em">
                -{product.discountPercentage}%
              </Badge>
            </Flex>
          ) : (
            <Text fontSize="2xl" fontWeight="bold" color="#ff1d25" >
              ${product.price}
            </Text>
          )}
        </Box>

        {/* Add to cart button */}
        <Box mt={4}>
            <SmallShoppingButton product={product} />
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default ProductCard
