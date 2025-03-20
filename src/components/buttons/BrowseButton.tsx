import { Button, Text} from "@chakra-ui/react"
import { Link } from "react-router-dom";

const BrowseButton = () => {
  return (
  <Link to='/all-products'>
    <Button bg='#186bd8' color='white' width="fit-content">
      <Text fontSize="xl" fontWeight='medium'>Browse products</Text>
    </Button>
  </Link>
  )
}

export default BrowseButton;
