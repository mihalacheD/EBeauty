import { createContext } from "react";


interface WishlistContextType {
  wishlist: number[];
  setWishlist:  React.Dispatch<React.SetStateAction<number[]>>;
}


const WishlistContext = createContext<WishlistContextType | undefined>(undefined);

export default WishlistContext;

