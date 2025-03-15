import { Button, Text } from "@chakra-ui/react"
import { LogIn } from "lucide-react"


const LoginButton = () => {
  return (
    <Button size='md' bg='#186bd8' color='white'>
        <LogIn style={{ height: '1.8em', width: '1.8em' }}/>
        <Text fontSize="xl" fontWeight='medium'>Log In</Text>
    </Button>
  )
}

export default LoginButton
