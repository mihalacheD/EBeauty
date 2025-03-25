import { Button, Text} from "@chakra-ui/react"
import { ShoppingCart } from "lucide-react"
import { Link, useNavigate } from "react-router-dom";


export const LargeShoppingButton = () => {
  const navigate = useNavigate();

  return (
      <Button
         size='2xl' bg='#186bd8' color='white' width="100%"
         onClick={(e) => {e.stopPropagation(); navigate('/cart')}}>
        <ShoppingCart style={{ height: '3em', width: '3em' }}/>
        <Text fontSize="xl" fontWeight='medium'>Add to cart</Text>
      </Button>

        );
      };

 export const SmallShoppingButton = () => {
  const navigate = useNavigate();

  return (
    <Link to='/cart'>
      <Button
         bg='#186bd8' color='white' width="full"
         onClick={(e) => {e.stopPropagation(); navigate('/cart')}}>
        <ShoppingCart style={{ height: '1.8em', width: '1.8em' }}/>
         <Text fontSize="xl" fontWeight='medium'>Add to cart</Text>
      </Button>
    </Link>
  );
};

