// Import React and useState hook
import React, { useState } from "react";

// Import NavigationContainer and other components from react-navigation
import { NavigationContainer } from "@react-navigation/native";
import AuthNavigation from "./AuthNavigation";
import TabNavigation from "./TabNavigation";

// Import useAuthStore hook from zustand
import useAuthStore from "../stores/authStore";

// Import AsyncStorage from react-native-async-storage
import AsyncStorage from "@react-native-async-storage/async-storage";

// Create an alias for the auth store state and actions
const useAuth = useAuthStore;

// Define the AppNavigation component
const AppNavigation = () => {
  // Get the isLoggedIn and setIsLoggedIn values from the auth store
  const { isLoggedIn, setIsLoggedIn } = useAuth((state) => ({
    isLoggedIn: state.isLoggedIn,
    setIsLoggedIn: state.setIsLoggedIn,
  }));

  // Define a function to get the user token from AsyncStorage
  const getUser = async () => {
    try {
      // Get the token from AsyncStorage
      const token = await AsyncStorage.getItem("token");

      // If the token exists, set isLoggedIn to true
      if (token) {
        setIsLoggedIn(true);
      } else {
        // Otherwise, set isLoggedIn to false
        setIsLoggedIn(false);
      }
    } catch (error) {
      // Log the error
      console.error(error);
    }
  };

  // Use the useEffect hook to call the getUser function when the component mounts or when isLoggedIn changes
  React.useEffect(() => {
    getUser();
  }, [isLoggedIn]);

  // Return the NavigationContainer component with the appropriate navigation based on the isLoggedIn value
  return (
    <NavigationContainer>
      {isLoggedIn ? <TabNavigation /> : <AuthNavigation />}
    </NavigationContainer>
  );
};

// Export the AppNavigation component
export default AppNavigation;
