import { useEffect, useState } from "react";
import { Box, Button, Avatar, Text, Icon } from "@chakra-ui/react";
import {CredentialResponse, GoogleLogin } from "@react-oauth/google";
import { FaUser } from 'react-icons/fa'; // Icon pentru utilizator
import { useAuth } from "../hooks/useAuth";
import { jwtDecode } from "jwt-decode";



const Login = () => {
  const { user, dispatch } = useAuth();
  const [isLoggedIn, setIsLoggedIn] = useState(false);


  useEffect(() => {
    const storedUser = localStorage.getItem("user");
    if (storedUser) {
      dispatch({ type: "LOGIN", payload: JSON.parse(storedUser) });
      setIsLoggedIn(true);
    }
  }, [dispatch]);


  const handleLoginSuccess = (credentialResponse: CredentialResponse) => {
    if (credentialResponse.credential) {
      const decoded = jwtDecode<{ name: string; email: string; picture: string }>(
        credentialResponse.credential
      );

      const userData = {
        name: decoded.name,
        email: decoded.email,
        picture: decoded.picture,
      };

      localStorage.setItem("user", JSON.stringify(userData));

      dispatch({ type: "LOGIN", payload: userData });
      setIsLoggedIn(true);
    }
  };



  const handleLoginFailure = () => {
    console.log("Autentificare eșuată");
  };

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    setIsLoggedIn(false);
  };


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
