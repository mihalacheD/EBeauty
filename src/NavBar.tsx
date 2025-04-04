import { useState } from "react";
import { motion } from "framer-motion";
import logo from "./assets/ebeauty.svg";
import {
  Flex,
  Image,
  Text,
  Button,
  Drawer,
  Portal,
  CloseButton,
  Grid,
  GridItem,
} from "@chakra-ui/react";
import { X, Menu, ShoppingCart } from "lucide-react";
import CategoryList from "./components/CategoryList";
import NavbarLinks from "./components/NavbarLinks";
import { SmallFavouriteButton } from "./components/buttons/FavouriteButton";
import LoginButton from "./components/buttons/LoginButton";
import SearchInput from "./components/SearchInput";
import { useContext } from "react";
import SearchContext from "./state-managment/SearchContext";
import { Link } from "react-router-dom";


const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const { setSearchText } = useContext(SearchContext); // Folosim contextul pentru a actualiza searchText

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex direction="column" height="auto">
      {/* Logo + Search */}
      <Grid templateColumns={{ base: "1fr", xl: "1fr 2fr" }} gap={6} alignItems="center" my={3}>
        {/* Mobile Menu Button */}
        <GridItem display={{ base: "flex", xl: "none" }}>
          <motion.div whileTap={{ scale: 0.9 }} transition={{ duration: 0.3 }}>
            <Button onClick={toggleMenu} size="2xl" color='black'>
              {isOpen ? <X /> : <Menu />}
            </Button>
          </motion.div>
        </GridItem>

        {/* Logo */}
        <GridItem boxSize="fit-content" display="flex" justifyContent={{ base: "center", xl: "flex-start" }}>
          <Link to='/'><Image src={logo} alt="logo" /></Link>
        </GridItem>

        {/* Search Input */}
        <GridItem width={{ base: "90%", xl: "80%" }} margin={{ base: "auto", xl: "0" }}>
          <SearchInput onSearch={(text) => setSearchText(text)} /> {/* Transmiterea funcției de căutare */}
        </GridItem>
      </Grid>

      {/* Desktop Menu */}
      <Flex justify="space-around" display={{ base: "none", xl: "flex" }} paddingX={8} paddingY={4} bg="linear-gradient(to right, #1E3A8A, #ff4C4C)" color="white">
        <Flex gap={6}>
          <CategoryList />
        </Flex>
        <NavbarLinks />
      </Flex>

      {/* Mobile Drawer */}
      <Drawer.Root placement="start" open={isOpen} onOpenChange={(e) => setIsOpen(e.open)}>
        <Portal>
          <Drawer.Backdrop bg="rgba(0, 0, 0, 0.5)" />
          <Drawer.Positioner>
            <Drawer.Content bg="white" color="black" pt={5}>
              <Drawer.Header>
                <Drawer.CloseTrigger asChild>
                  <CloseButton size="lg" color="black" />
                </Drawer.CloseTrigger>
              </Drawer.Header>
              <Drawer.Body>
                <Flex direction="column" gap={4}>
                  <CategoryList />
                  <LoginButton />
                  <SmallFavouriteButton productId={0} />
                  <Link to= '/cart'>
                    <Button bg='#186bd8' color='white' width="full">
                    <ShoppingCart style={{ height: '1.8em', width: '1.8em' }}/>
                    <Text fontSize="xl" fontWeight='medium'>Cart</Text>
                    </Button>
                  </Link>
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
