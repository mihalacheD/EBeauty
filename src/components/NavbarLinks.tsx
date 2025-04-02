import { Badge, Box, Flex  } from "@chakra-ui/react"
import { Heart, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";
import WishlistContext from "../state-managment/WishlistContext";
import { useContext } from "react";
import { useCart } from "../hooks/useCart";
import Login from "./Login";


const NavbarLinks = () => {

  const wishlistContext = useContext(WishlistContext);
  const wishlistCount = wishlistContext?.wishlist.length || 0;

  const { cart } = useCart();
  const cartCount = cart.reduce((total, item) => total + item.quantity, 0); // Calculăm totalul produselor


  return (
    <Flex gap={10} alignItems='center'>

      {/* Login NavLink */}
      <Login/>

              {/* Wishlist NavLink */}
      <Link to="/wishlist" style={{ position: "relative" }}>
        <Box display="flex" alignItems="center">
        <Heart style={{ height: '2em', width: '2em' }} />
          {wishlistCount > 0 && (
            <Badge
              position="absolute"
              top="-5px"
              right="-10px"
              bg="white"
              color="red"
              fontSize="0.8rem"
              borderRadius="full"
              fontWeight='bold'
              px={2}
            >
              {wishlistCount}
            </Badge>
          )}
        </Box>
      </Link>

        {/* Cart NavLink */}
      <Link to="/cart" style={{ position: "relative" }}>
        <Box display="flex" alignItems="center">
          <ShoppingCart style={{ height: "2em", width: "2em" }} />
          {cartCount > 0 && (
            <Badge
              position="absolute"
              top="-5px"
              right="-10px"
              bg="white"
              color="red"
              fontSize="0.8rem"
              borderRadius="full"
              fontWeight="bold"
              px={2}
            >
              {cartCount}
            </Badge>
          )}
        </Box>
      </Link>

        </Flex>
  )
}

export default NavbarLinks;

