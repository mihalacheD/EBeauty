import { Button, Text } from "@chakra-ui/react";
import { Heart } from "lucide-react";
import { useContext } from "react";
import { Link } from "react-router-dom";
import WishlistContext from "../../state-managment/WishlistContext";


  export const LargeFavouriteButton = ({ productId }: { productId: number }) => {

    const wishlistContext = useContext(WishlistContext);
    if (!wishlistContext) return null;

    const { wishlist, setWishlist } = wishlistContext;


    const handleWishlistToggle = () => {

      if (productId && !wishlist.includes(productId)) {
        setWishlist((prev) => [...prev, productId]);
      } else {
        setWishlist((prev) => prev.filter((id) => id !== productId));
      }
    };



    return (
      <Link to='/wishlist'>
        <Button
           size='2xl'
           color='#186bd8'
           width="100%"
           variant='outline'
           onClick={handleWishlistToggle} colorScheme={wishlist.includes(productId) ? "red" : "blue"}>
          <Heart style={{ height: '3em', width: '3em' }}/>
          <Text fontSize="xl" fontWeight='medium'>Add to Favourite</Text>
        </Button>
      </Link>
          );
        };




   export const SmallFavouriteButton = ({ productId }: { productId: number }) => {

    const wishlistContext = useContext(WishlistContext);
    if (!wishlistContext) return null;

    const { wishlist, setWishlist } = wishlistContext;


    const handleWishlistToggle = () => {

      if (productId && !wishlist.includes(productId)) {
        setWishlist((prev) => [...prev, productId]);
      } else {
        setWishlist((prev) => prev.filter((id) => id !== productId));
      }
    };

    return (
    <Link to='/wishlist'>
      <Button
          size='md'
          bg='#186bd8'
          color='white'
          width="full"
          onClick={handleWishlistToggle} colorScheme={wishlist.includes(productId) ? "red" : "blue"}>
        <Heart style={{ height: '1.8em', width: '1.8em' }} />
        <Text fontSize="xl" fontWeight='medium'>Wishlist</Text>
      </Button>
  </Link>
    );
  };



