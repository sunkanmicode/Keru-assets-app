import React, { useState } from "react";
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import HomeNavigation from "./HomeNavigation";
import useAuthStore from "../stores/authStore";

const AppNavigation = () => {
  const isLoggedIn = useAuthStore((state) => state.isLoggedIn);

  const [isAuthenticated, setIsAuthenticated] = useState(isLoggedIn);

  React.useEffect(() => {
    setIsAuthenticated(isLoggedIn);
  }, [isLoggedIn]);
  return (
    <NavigationContainer>
      {isAuthenticated ? <HomeNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

export default AppNavigation;
