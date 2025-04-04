import { Box, Button, Avatar, Text, Icon } from "@chakra-ui/react";
import { GoogleLogin } from "@react-oauth/google";
import { FaUser } from 'react-icons/fa'; // Icon pentru utilizator
import { useAuthHandlers } from "../hooks/useAuthHandlers";


const Login = () => {

  const { user, isLoggedIn, handleLoginSuccess, handleLogout, handleLoginFailure  } = useAuthHandlers();

  return (
    <Box display="flex" alignItems="center" gap={3}>
      {!isLoggedIn ? (
        <>
          <Icon as={FaUser} w={6} h={6} />
          <GoogleLogin
            onSuccess={handleLoginSuccess}
            onError={handleLoginFailure}
            useOneTap
          />
        </>
      ) : (
        <Box display="flex" alignItems="center" gap={3}>
          <Avatar.Root>
            <Avatar.Image src={user?.picture}/>
          </Avatar.Root>
          <Text fontSize="xl" fontWeight='medium'>{user?.name}</Text>
          <Button variant='subtle' bg='transparent' size='md' color='white' onClick={handleLogout}>Log Out</Button>
        </Box>
      )}
    </Box>
  );
};

export default Login;
