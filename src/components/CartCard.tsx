import { Box, Card, Flex, Image, Text, IconButton, Stack } from "@chakra-ui/react";
import { Trash2, Plus, Minus } from "lucide-react";
import { useCart } from "../hooks/useCart";
import { CartItem } from "../state-managment/CartContext";
import { calculateDiscountedPrice } from "../utils/calculateDiscountedPrice";
import RenderStar from "./RenderStar";

interface CartCardProps {
  item: CartItem;
}

const CartCard = ({ item }: CartCardProps) => {
  const { updateQuantity, removeFromCart } = useCart();

  const discountedPrice = calculateDiscountedPrice(item.product.price, item.product.discountPercentage);

  return (
    <Card.Root bg="white" p={4} boxShadow="sm" border="none" width="100%" _hover={{ boxShadow: "lg" }}>
      <Flex direction={{ base: "column", md: "row" }} align="center" justify="space-between" gap={4}>
        {/* Image Section */}
        <Box>
          <Image
            src={item.product.thumbnail}
            alt={item.product.title}
            borderRadius="md"
            objectFit="cover"
            width="100%"
            height="150px"
          />
        </Box>

        {/* Product Info */}
        <Box flex="1">
          <Card.Body>
            <Stack gap={2}>
              <Text fontSize="xl" fontWeight="bold">{item.product.title}</Text>
              <RenderStar rating={item.product.rating} />
              <Text color="gray.600">${item.product.price.toFixed(2)}</Text>
              <Text fontSize="xl" fontWeight="bold" color="red.500"> ${discountedPrice.toFixed(2)}</Text>

        {/* Shipping Info */}
          {item.product.shippingInformation && (
           <Box fontSize="md" color="gray.600">
              <strong>Shipping:</strong> {item.product.shippingInformation}
           </Box>
          )}
          </Stack>
       </Card.Body>
       </Box>

        {/* Quantity Controls */}
        <Flex align="center" gap={2}>
          <IconButton
            aria-label="Decrease quantity"
            size="lg"
            onClick={() => updateQuantity(item.product.id, item.quantity - 1)}
            disabled={item.quantity <= 1}
          >
              {<Minus color="black" />}
          </IconButton>
          <Text fontWeight="bold" fontSize='lg'>{item.quantity}</Text>
          <IconButton
            aria-label="Increase quantity"
            size="lg"
            onClick={() => updateQuantity(item.product.id, item.quantity + 1)}
          >
              {<Plus color="black"/>}
          </IconButton>
        </Flex>

        {/* Remove Button */}
        <IconButton
          aria-label="Remove item"
          size="2xl"
          colorScheme="red"
          onClick={() => removeFromCart(item.product.id)}
        >
             {<Trash2 color="black"/>}
        </IconButton>
      </Flex>
    </Card.Root>
  );
};

export default CartCard;

