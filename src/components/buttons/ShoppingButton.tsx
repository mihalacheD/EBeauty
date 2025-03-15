import { Button, Text} from "@chakra-ui/react"
import { ShoppingCart } from "lucide-react"


export const LargeShoppingButton = () => {
  return (
      <Button size='2xl' bg='#186bd8' color='white' width="100%">
        <ShoppingCart style={{ height: '3em', width: '3em' }}/>
        <Text fontSize="xl" fontWeight='medium'>Add to cart</Text>
      </Button>
        );
      };

 export const SmallShoppingButton = () => {
  return (
      <Button bg='#186bd8' color='white' width="full">
        <ShoppingCart style={{ height: '1.8em', width: '1.8em' }}/>
         <Text fontSize="xl" fontWeight='medium'>Add to cart</Text>
      </Button>
  );
};

