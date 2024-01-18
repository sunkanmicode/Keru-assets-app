import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import StoreScreen from "../../screens/MainScreens/StoreScreen";
import DetailsScreen from "../../screens/MainScreens/StoreScreen/DetailsScreen";
import StoreCartScreen from "../../screens/MainScreens/StoreScreen/StoreCartScreen";
import StoreCheckoutScreen from "../../components/mainComp/StoreComp/StoreCheckoutScreen";
import StoreEnterPinScreen from "../../components/mainComp/StoreComp/StoreEnterPinScreen";
import OrderCompletedScreen from "../../components/mainComp/StoreComp/OrderCompletedScreen";


const StoreStack = createNativeStackNavigator();

const StoreStackNavigation = () => {
  return (
    <StoreStack.Navigator>
      <StoreStack.Group>
        <StoreStack.Screen
          name="StoreScreen"
          component={StoreScreen}
          options={{ headerShown: false }}
        />
        <StoreStack.Screen
          name="DetailsScreen"
          component={DetailsScreen}
          options={{ headerShown: false }}
        />
        <StoreStack.Screen
          name="StoreCartScreen"
          component={StoreCartScreen}
          options={{ headerShown: false }}
        />
        <StoreStack.Screen
          name="StoreCheckoutScreen"
          component={StoreCheckoutScreen}
          options={{ headerShown: false }}
        />
        <StoreStack.Screen
          name="StoreEnterPinScreen"
          component={StoreEnterPinScreen}
          options={{ headerShown: false }}
        />
        <StoreStack.Screen
          name="OrderCompletedScreen"
          component={OrderCompletedScreen}
          options={{ headerShown: false }}
        />
      </StoreStack.Group>
    </StoreStack.Navigator>
  );
};

export default StoreStackNavigation;
