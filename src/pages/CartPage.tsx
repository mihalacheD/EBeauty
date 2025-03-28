import { Text, Container, Flex } from "@chakra-ui/react";
import CartCard from "../components/CartCard";
import { useCart } from "../hooks/useCart";

const CartPage = () => {
  const { cart } = useCart();


  return (
    <Container my={9}>
      <Text fontSize="2xl" fontWeight="bold" mb={4} color="gray.600">
          Shopping Cart ({cart.length} {cart.length === 1 ? "item" : "items"})
      </Text>
      {cart.length === 0 ? (
        <Text color="gray.500">Your cart is empty.</Text>
      ) : (
        <Flex wrap="wrap" gap={6} mt={4}>
          {cart.map((item) => (
            <CartCard key={item.product.id} item={item} />
          ))}
        </Flex>
      )}
    </Container>
  );
};

export default CartPage;
