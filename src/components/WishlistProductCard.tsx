import { Card, CardBody, Image, Box, Badge, Flex, Stack } from "@chakra-ui/react";
import { useContext } from "react";
import WishlistContext from "../state-managment/WishlistContext";
import { Product } from "../hooks/useProducts";
import { calculateDiscountedPrice } from "../utils/calculateDiscountedPrice";
import RenderStar from "./RenderStar";
import RemoveButton from "./buttons/RemoveButton";
import { SmallShoppingButton } from "./buttons/ShoppingButton";
import { useNavigate } from "react-router-dom";

interface WishlistProductCardProps {
  product: Product;
}

const WishlistProductCard: React.FC<WishlistProductCardProps> = ({ product }) => {
  const navigate = useNavigate(); // ✅ Mutăm useNavigate() înainte de orice return
  const wishlistContext = useContext(WishlistContext);

  if (!wishlistContext) return null;

  const { setWishlist } = wishlistContext;

   // Mutăm redirecționarea la detaliile produsului într-o funcție separată
  const handleCardClick = (e: React.MouseEvent) => {
    e.stopPropagation();  // Previne propagarea evenimentului de click, astfel încât să nu interfereze cu acțiunile de eliminare
    navigate(`/product/${product.id}`);
  }

  const removeFromWishlist = (e: React.MouseEvent) => {
    e.stopPropagation();  // Previne redirecționarea atunci când butonul de remove este apăsat
    setWishlist((prev) => prev.filter((id) => id !== product.id));
  };

  const discountedPrice = calculateDiscountedPrice(product.price, product.discountPercentage);


  return (
    <Card.Root bg="white" p={4} boxShadow='sm' border='none' width="100%" _hover={{ boxShadow: 'lg' }} onClick={handleCardClick}>
      <Flex
        direction={{ base: "column", md: "row" }}
        align="center"
        justify="space-between"
        gap={4}
      >
        {/* Image Section */}
        <Box>
          <Image
            src={product.thumbnail}
            alt={product.title}
            borderRadius="md"
            objectFit="cover"
            width="100%"
            height="150px"
          />
        </Box>

        {/* Details Section */}
        <Box flex="1">
          <CardBody>
            <Stack gap={2}>
              {/* Brand Badge */}
              {product.brand && (
                <Badge bg="red.500" color="white" fontSize="md" fontWeight="bold" px={3} py={1} width='fit-content'>
                  {product.brand}
                </Badge>
              )}

              {/* Title & Rating */}
              <Box fontSize="xl" fontWeight="bold" color="gray.700">
                {product.title}
              </Box>
              <RenderStar rating={product.rating} />

              {/* Price & Discount */}
              <Box>
                {product.discountPercentage > 0 && (
                  <Box fontSize="lg" color="gray.500" textDecoration="line-through">
                    ${product.price.toFixed(2)}
                  </Box>
                )}
                <Box fontSize="2xl" fontWeight="bold" color="red.500">
                  ${discountedPrice.toFixed(2)}
                </Box>
              </Box>

              {/* Shipping Info */}
              {product.shippingInformation && (
                <Box fontSize="md" color="gray.600">
                  <strong>Shipping:</strong> {product.shippingInformation}
                </Box>
              )}
            </Stack>
          </CardBody>
        </Box>

        {/* Buttons Section */}
        <Box display="flex" flexDirection="column" gap={3}>
          <RemoveButton onRemove={removeFromWishlist} />
          <SmallShoppingButton />
        </Box>
      </Flex>
    </Card.Root>
  );
};

export default WishlistProductCard;
