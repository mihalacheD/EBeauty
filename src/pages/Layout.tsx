import { Outlet } from "react-router-dom"
import NavBar from "../NavBar"
import SearchContext from "../state-managment/SearchContext"
import { useEffect, useState } from "react";
import WishlistContext from "../state-managment/WishlistContext";
import { CartProvider } from "../state-managment/CartProvider";
import { GoogleOAuthProvider } from "@react-oauth/google";
import { AuthProvider } from "../state-managment/AuthProvider";


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
    <GoogleOAuthProvider clientId={import.meta.env.VITE_GOOGLE_CLIENT_ID || ""}>
       <AuthProvider>
        <CartProvider>
          <WishlistContext.Provider value={{ wishlist, setWishlist}}>
            <SearchContext.Provider value={{ searchText, setSearchText }}>
              <NavBar/>
              <Outlet/>
            </SearchContext.Provider>
          </WishlistContext.Provider>
        </CartProvider>
      </AuthProvider>
    </GoogleOAuthProvider>
  )
}

export default Layout
