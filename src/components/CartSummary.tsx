
import { Box, Button, Flex, Text } from "@chakra-ui/react";
import { useCart } from "../hooks/useCart";

const CartSummary = () => {
  const { cart, total } = useCart();

  const shippingCost = total > 0 ? 5 : 0; // Simulăm o taxă de livrare fixă ($5)
  const discount = total > 50 ? 10 : 0; // Exemplu: 10$ reducere pentru comenzile de peste 50$
  const finalTotal = total - discount + shippingCost;

  return (
    <Box p={6} bg="white" boxShadow="sm" borderRadius="md" width="100%" maxW="400px">
      <Text fontSize="xl" fontWeight="bold" mb={4}>Order Summary</Text>

      <Flex justify="space-between" mb={2}>
        <Text>Subtotal:</Text>
        <Text fontWeight="bold">${total.toFixed(2)}</Text>
      </Flex>

      <Flex justify="space-between" mb={2}>
        <Text>Discount:</Text>
        <Text fontWeight="bold" color={discount > 0 ? "green.500" : "gray.500"}>
          -${discount.toFixed(2)}
        </Text>
      </Flex>

      <Flex justify="space-between" mb={2}>
        <Text>Shipping:</Text>
        <Text fontWeight="bold">${shippingCost.toFixed(2)}</Text>
      </Flex>

      <Box borderBottom="1px solid" borderColor="gray.200" my={4} />


      <Flex justify="space-between" mb={4}>
        <Text fontSize="lg" fontWeight="bold">Total:</Text>
        <Text fontSize="lg" fontWeight="bold">${finalTotal.toFixed(2)}</Text>
      </Flex>

      <Button bg='#186bd8' color='white' size="lg" width="100%" disabled={cart.length === 0}>
        <Text fontSize="xl" fontWeight='medium'>Continue to Checkout</Text>
      </Button>
    </Box>
  );
};

export default CartSummary;

