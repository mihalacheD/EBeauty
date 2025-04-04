import { useEffect, useState } from "react";
import { CredentialResponse } from "@react-oauth/google";
import { jwtDecode } from "jwt-decode";
import { useAuth } from "./useAuth";

export const useAuthHandlers = () => {
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

  const handleLogout = () => {
    localStorage.removeItem("user");
    dispatch({ type: "LOGOUT" });
    setIsLoggedIn(false);
  };

  const handleLoginFailure = () => {
    console.error("Login failed");
  };


  return {
    user,
    isLoggedIn,
    handleLoginSuccess,
    handleLoginFailure,
    handleLogout,
  };
};
