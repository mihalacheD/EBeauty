import { Flex } from "@chakra-ui/react"
import { Tooltip } from "../components/ui/tooltip";
import { LogIn, Heart, ShoppingCart } from "lucide-react"
import { Link } from "react-router-dom";


const NavbarLinks = () => {
  return (
    <Flex gap={10} alignItems='center'>
          <Tooltip content="Log In">
            <LogIn style={{ height: '2em', width: '2em' }} />
          </Tooltip>
        <Link to='/wishlist'>
          <Tooltip content="Wishlist">
            <Heart style={{ height: '2em', width: '2em' }} />
          </Tooltip>
        </Link>
          <Tooltip content="Shopping Bag">
            <ShoppingCart style={{ height: '2em', width: '2em' }} />
          </Tooltip>
        </Flex>
  )
}

export default NavbarLinks
