import { Card, Flex, Heading, Image } from '@chakra-ui/react'
import { Product } from '../hooks/useProducts'
import RenderStar from './RenderStar';

interface Props {
  product: Product
}

const ProductCard = ({ product }: Props) => {
  return (
    <Card.Root
      borderRadius="lg"
      borderColor='gray.100'
      bg="white"
      boxShadow="sm"
      p="4"
      gap={9}
      marginX={5}
    >
      <Image
        src={product.thumbnail}
        alt={product.title}
        objectFit="cover"
        borderRadius="md"
      />
      <Card.Body textAlign="center" padding="4">
        <Flex direction='column' gap={4} alignItems='center'>
            <Heading
            fontSize="4xl"
            fontFamily="'Poppins', cursive"
            fontWeight='light'
            color='gray.600'
            >{product.title}</Heading>
            <RenderStar rating={product.rating} />
        </Flex>
      </Card.Body>
    </Card.Root>
  );
};

export default ProductCard
