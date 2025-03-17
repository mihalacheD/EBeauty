import { useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/ebeauty.svg";
import {
  Flex,
  Image,
  Button,
  Drawer,
  Portal,
  CloseButton,
} from "@chakra-ui/react";
import { X, Menu } from "lucide-react";
import CategoryList from "./components/CategoryList";
import NavbarLinks from "./components/NavbarLinks";
import { SmallShoppingButton } from "./components/buttons/ShoppingButton";
import { SmallFavouriteButton } from "./components/buttons/FavouriteButton";
import LoginButton from "./components/buttons/LoginButton";

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex direction="column" height="auto">
      {/* Logo */}
      <Flex paddingY={6} h='7em' alignContent='flex-start'>
        <Image src={logo} alt="logo" height="auto"/>
      </Flex>

      {/* Desktop Menu */}
      <Flex
        justify="space-around"
        display={{ base: "none", xl: "flex" }}
        paddingX={8}
        paddingY={4}
        bg= 'linear-gradient(to right, #186bd8, #ff1d25)'
        color='white'
      >
        <Flex gap={6} >
          <CategoryList />
        </Flex>
        <NavbarLinks/>
      </Flex>

      {/* Mobile Menu Button */}
      <Flex
        justify="space-between"
        align="center"
        display={{ base: "flex", xl: "none" }}
        padding={4}
      >
        <motion.div whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>
          <Button onClick={toggleMenu} size="xl">
            {isOpen ? <X /> : <Menu />}
          </Button>
        </motion.div>
      </Flex>

      {/* Mobile Drawer */}
      <Drawer.Root placement="start" open={isOpen}  onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop  bg="rgba(0, 0, 0, 0.5)"/>
          <Drawer.Positioner>
            <Drawer.Content  bg="white" color="black" pt={5}>
              <Drawer.Header>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="lg" color='black'/>
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                <Flex direction="column" gap={4} >
                  <CategoryList />
                   <LoginButton />
                   <SmallFavouriteButton />
                   <SmallShoppingButton />
                </Flex>
              </Drawer.Body>
            </Drawer.Content>
          </Drawer.Positioner>
        </Portal>
      </Drawer.Root>
    </Flex>
  );
};

export default NavBar;
