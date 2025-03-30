import { Image, Text, Center} from "@chakra-ui/react"
import emptyCart from '../assets/emptyCart.png'
import BrowseButton from "./buttons/BrowseButton"

const EmptyCart = () => {
  return (
    <Center flexDirection="column" mt={8} gap={4}>
      <Image src={emptyCart} alt="Empty Cart" boxSize="400px" objectFit="cover"/>
      <Text fontSize="2xl" fontWeight="bold" color='gray.600'>Your Cart is Empty</Text>
      <Text fontSize="xl" fontWeight="medium" color='gray.600'>
        It looks like you haven't added any products. Here are some recommendations that might interest you.
      </Text>
      <BrowseButton/>
    </Center>
  )
}

export default EmptyCart
