import { Container, Flex, Spinner, Text } from "@chakra-ui/react";
import WishlistProductCard from "../components/WishlistProductCard";
import useWishlistProducts from "../hooks/useWishlistProducts";
import { useContext } from "react";
import WishlistContext from "../state-managment/WishlistContext";
import { Product } from "../hooks/useProducts";
import EmptyWishlist from "../components/EmptyWishlist";

const Wishlist = () => {
  const wishlistContext = useContext(WishlistContext);

  // Apelăm useWishlistProducts întotdeauna, chiar dacă wishlistContext este null
  const queries = useWishlistProducts(wishlistContext?.wishlist || []);

  // Verificăm dacă datele sunt încărcate
  const isLoading = queries.some((query) => query.isLoading);

  // Extragem datele produselor, filtrăm valorile `undefined`
  const products = queries
    .map((query) => query.data)
    .filter((product): product is Product => product !== undefined); // Filtrăm valorile `undefined`

  if (isLoading) return <Spinner />;

  return (
    <Container my={9}>
      <Text fontSize="2xl" fontWeight="bold" color="gray.600">
          Favourite Products ({products.length} {products.length === 1 ? "item" : "items"})
      </Text>
      {products.length === 0 ? (
        <EmptyWishlist/>
      ) : (
        <Flex wrap="wrap" gap={6} mt={4}>
          {products.map((product) => (
            <WishlistProductCard key={product?.id} product={product} />
          ))}
        </Flex>
      )}
    </Container>
  );
};

export default Wishlist;
