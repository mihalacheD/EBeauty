import { Badge, Box, Flex } from "@chakra-ui/react"
import { Tooltip } from "../components/ui/tooltip";
import { LogIn, Heart, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";
import WishlistContext from "../state-managment/WishlistContext";
import { useContext } from "react";


const NavbarLinks = () => {

  const wishlistContext = useContext(WishlistContext);
  const wishlistCount = wishlistContext?.wishlist.length || 0;

  return (
    <Flex gap={10} alignItems='center'>
          <Tooltip content="Log In">
            <LogIn style={{ height: '2em', width: '2em' }} />
          </Tooltip>

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

          <Tooltip content="Shopping Bag">
            <ShoppingCart style={{ height: '2em', width: '2em' }} />
          </Tooltip>
        </Flex>
  )
}

export default NavbarLinks;

