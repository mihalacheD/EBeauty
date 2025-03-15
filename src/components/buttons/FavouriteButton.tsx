import { Button, Text } from "@chakra-ui/react";
import { Heart } from "lucide-react";


  export const LargeFavouriteButton = () => {
    return (
        <Button size='2xl' color='#186bd8' width="100%" variant='outline'>
          <Heart style={{ height: '3em', width: '3em' }}/>
          <Text fontSize="xl" fontWeight='medium'>Add to Favourite</Text>
        </Button>
          );
        };

   export const SmallFavouriteButton = () => {
    return (
      <Button size='md' bg='#186bd8' color='white' width="full" >
        <Heart style={{ height: '1.8em', width: '1.8em' }} />
        <Text fontSize="xl" fontWeight='medium'>Wishlist</Text>
  </Button>
    );
  };



