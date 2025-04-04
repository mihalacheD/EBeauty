import { Avatar, Flex, Text, Box } from "@chakra-ui/react"
import { LogIn } from "lucide-react"
import { useAuthHandlers } from "../../hooks/useAuthHandlers";
import { useAuth } from "../../hooks/useAuth";
import { useState } from "react";
import { GoogleLogin } from "@react-oauth/google";


const LoginButton = () => {
  const { isLoggedIn, handleLogout, handleLoginSuccess } = useAuthHandlers();
  const [showLogin, setShowLogin] = useState(false);
  const { user } = useAuth();

  const toggleLogin = () => setShowLogin((prev) => !prev);

  return (
    <Box>
    <Flex
      align="center"
      gap={3}
      cursor="pointer"
      _hover={{ opacity: 0.8 }}
      onClick={isLoggedIn ? handleLogout : toggleLogin}
    >
      {isLoggedIn ? (
        <>
          <Avatar.Root>
            <Avatar.Image src={user?.picture}/>
          </Avatar.Root>
          <Text fontSize="md" fontWeight="medium">
            Log out
          </Text>
        </>
      ) : (
        <>
          <LogIn size={20} />
          <Text fontSize="md" fontWeight="medium">
            Log In
          </Text>
        </>
      )}
    </Flex>

    {!isLoggedIn && showLogin && (
        <Box mt={2}>
          <GoogleLogin onSuccess={handleLoginSuccess} onError={() => console.log("Fail")} />
        </Box>
      )}
    </Box>
  );
};


export default LoginButton
