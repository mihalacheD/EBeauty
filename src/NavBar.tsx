import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import logo from './assets/logo.svg';
import { Tooltip } from "./components/ui/tooltip"
import { Flex, Text, Image, Button } from "@chakra-ui/react";
import { X, Menu, Search, LogIn, Heart, ShoppingCart  } from 'lucide-react';

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  return (
    <Flex direction="column" height="auto">
      {/* Logo */}
      <Flex justify="center" paddingY={6}>
        <Image src={logo} alt="logo" />
      </Flex>

      {/* Desktop Menu */}
      <Flex justify="space-around" display={{ base: "none", xl: "flex" }} paddingX={8} paddingY={4}>
        <Flex gap={6} >
          <Text>New Arrivals</Text>
          <Text>Icons</Text>
          <Text>Clothing</Text>
          <Text>Bags</Text>
          <Text>Shoes</Text>
          <Text>Accessories</Text>
          <Text>Sport</Text>
          <Text>Gift Card</Text>
          <Text>Sale</Text>
        </Flex>
        <Flex gap={10} >
          <Tooltip content="Search..." ><Search size={25}/></Tooltip>
          <Tooltip content="Log In"><LogIn size={25}/></Tooltip>
          <Tooltip content="Wishlist"><Heart size={25}/></Tooltip>
          <Tooltip content="Shopping Bag"><ShoppingCart size={25}/></Tooltip>
        </Flex>
      </Flex>

      {/* Mobile Menu */}
      <Flex
        justify="space-between"
        align="center"
        display={{ base: "flex", xl: "none" }}
        padding={8}
      >

      <motion.div
            whileTap={{ scale: 0.9 }}
            transition={{ duration: 0.3 }}
          >
        <Button onClick={toggleMenu} variant="subtle" colorPalette='gray'>
          {isOpen ? <X size={24} color="black"/> : <Menu size={24} color="black"/>}
        </Button>
      </motion.div>


      <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -10 }}
              transition={{ duration: 0.3 }}
              style={{ display: "flex", gap: "1rem" }}
            >
          <Flex gap={6}  display={{ base: isOpen ? "none" : "flex", md: "flex" }}>
          <Tooltip content="Search..."><Search size={25}/></Tooltip>
          <Tooltip content="Log In"><LogIn size={25}/></Tooltip>
          <Tooltip content="Wishlist"><Heart size={25}/></Tooltip>
          <Tooltip content="Shopping Bag"><ShoppingCart size={25}/></Tooltip>
          </Flex>
        </motion.div>

      </Flex>

      {/* Burger Menu Dropdown */}
      <AnimatePresence>
          {isOpen && (
            <motion.div
              initial={{ opacity: 0, y: -20 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -20 }}
              transition={{ duration: 0.4 }}
              style={{  padding: "1rem", display: "flex", flexDirection: "column", gap: "1rem" }}
            >
        <Flex
          direction="column"
          paddingX={4}
          paddingY={6}
          gap={4}
        >
          <Text>New Arrivals</Text>
          <Text>Icons</Text>
          <Text>Clothing</Text>
          <Text>Bags</Text>
          <Text>Shoes</Text>
          <Text>Accessories</Text>
          <Text>Sport</Text>
          <Text>Gift Card</Text>
          <Text>Sale</Text>
        </Flex>
        </motion.div>
      )}
              </AnimatePresence>
    </Flex>
  );
};

export default NavBar;
