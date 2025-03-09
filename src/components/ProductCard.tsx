import { Box, Card, Flex, Image, Text } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'
import RenderStar from './RenderStar';
import ExpandableText from './ExpandableText';

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
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
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        objectFit="cover"
        borderRadius="md"
        mx="auto" // Centrarea imaginii
      />
      <Card.Body textAlign="center" padding={5}  display="flex" flexDirection="column" justifyContent="space-between" flex="1">
        <Flex direction="column" gap={4} alignItems="center">
           <ExpandableText children={product.title}/>
          <RenderStar rating={product.rating} />
        </Flex>

        {/* Prețul fixat jos */}
        <Box>
          <Text
            fontSize={["sm", "md", "lg"]}
            fontFamily="'Poppins', cursive"
            fontWeight="bold"
            color="#ff1d25"
            textAlign="center"
            letterSpacing='wider'
          >
            ${product.price}
          </Text>
        </Box>
      </Card.Body>
    </Card.Root>
  );
};

export default ProductCard
