import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import SearchContext from "../state-managment/SearchContext"
import { useEffect, useState } from "react";
import WishlistContext from "../state-managment/WishlistContext";
import { CartProvider } from "../state-managment/CartProvider";


const Layout = () => {

  const [searchText, setSearchText] = useState<string>("");
  const [wishlist, setWishlist] = useState<number[]>(() => {
    const savedWishlist = localStorage.getItem("wishlist");
    return savedWishlist ? JSON.parse(savedWishlist) : [];
  });

  useEffect(() => {
    localStorage.setItem("wishlist", JSON.stringify(wishlist));
  }, [wishlist]);


  return (
    <CartProvider>
      <WishlistContext.Provider value={{ wishlist, setWishlist}}>
        <SearchContext.Provider value={{ searchText, setSearchText }}>
          <NavBar/>
          <Outlet/>
        </SearchContext.Provider>
      </WishlistContext.Provider>
    </CartProvider>
  )
}

export default Layout
