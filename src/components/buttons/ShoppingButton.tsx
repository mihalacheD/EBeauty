import { Button, Text} from "@chakra-ui/react"
import { ShoppingCart } from "lucide-react"
import { useNavigate } from "react-router-dom";
import { Product } from "../../hooks/useProducts";
import { useCart } from "../../hooks/useCart";


interface Props {
  product: Product;
}

export const LargeShoppingButton = ({ product }: Props) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    navigate("/cart");
  };


  return (
      <Button
         size='2xl' bg='#186bd8' color='white' width="100%"
         onClick={handleAddToCart}>
        <ShoppingCart style={{ height: '3em', width: '3em' }}/>
        <Text fontSize="xl" fontWeight='medium'>Add to cart</Text>
      </Button>

        );
      };

 export const SmallShoppingButton = ({ product }: Props) => {
  const { addToCart } = useCart();
  const navigate = useNavigate();

  const handleAddToCart = (e: React.MouseEvent) => {
    e.stopPropagation();
    addToCart(product);
    navigate("/cart");
  };

  return (
      <Button
         bg='#186bd8' color='white' width="full"
         onClick={handleAddToCart}>
        <ShoppingCart style={{ height: '1.8em', width: '1.8em' }}/>
         <Text fontSize="xl" fontWeight='medium'>Add to cart</Text>
      </Button>
  );
};

