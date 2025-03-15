import { Flex } from "@chakra-ui/react"
import { Tooltip } from "../components/ui/tooltip";
import { Search, LogIn, Heart, ShoppingCart } from "lucide-react"


const NavbarLinks = () => {
  return (
    <Flex gap={10} alignItems='center'>
          <Tooltip content="Search...">
            <Search style={{ height: '35px', width: '35px' }}/>
          </Tooltip>
          <Tooltip content="Log In">
            <LogIn style={{ height: '35px', width: '35px' }} />
          </Tooltip>
          <Tooltip content="Wishlist">
            <Heart style={{ height: '35px', width: '35px' }} />
          </Tooltip>
          <Tooltip content="Shopping Bag">
            <ShoppingCart style={{ height: '35px', width: '35px' }} />
          </Tooltip>
        </Flex>
  )
}

export default NavbarLinks
