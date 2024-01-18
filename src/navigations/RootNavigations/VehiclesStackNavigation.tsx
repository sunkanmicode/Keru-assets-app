import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import VehiclesScreen from "../../screens/MainScreens/VehiclesScreen/Index";
import VehicleDetailsScreen from "../../screens/MainScreens/VehiclesScreen/VehicleDetailsScreen";
import SetVehicleLocationScreen from "../../screens/MainScreens/VehiclesScreen/SetVehicleLocationScreen";
import VehicleSeeOrderScreen from "../../screens/MainScreens/VehiclesScreen/VehicleSeeOrderScreen";
import ReviewServiceComp from "../../components/mainComp/VehiclesComp/ReviewServiceComp";
import ManuallyDetails from "../../components/mainComp/VehiclesComp/ManuallyDetails";
import RecommandedVehicle from "../../screens/MainScreens/VehiclesScreen/RecommandedVehicle";
import DriverDetailsComp from "../../components/mainComp/VehiclesComp/VehicleDetailsComp/Drivers";
import FleetSuccess from "../../components/mainComp/VehiclesComp/FleetSuccess";

const VehicleStack = createNativeStackNavigator();

const VehicleStackNavigation = () => {
  return (
    <VehicleStack.Navigator>
      <VehicleStack.Group>
        <VehicleStack.Screen
          name="VehiclesScreen"
          component={VehiclesScreen}
          options={{ headerShown: false }}
        />
        <VehicleStack.Screen
          name="VehicleDetailsScreen"
          component={VehicleDetailsScreen}
          options={{ headerShown: false }}
        />
        <VehicleStack.Screen
          name="DriverDetailsComp"
          component={DriverDetailsComp}
          options={{ headerShown: false }}
        />
        <VehicleStack.Screen
          name="FleetSuccess"
          component={FleetSuccess}
          options={{ headerShown: false }}
        />

        <VehicleStack.Screen
          name="SetVehicleLocationScreen"
          component={SetVehicleLocationScreen}
          options={{ headerShown: false }}
        />
        <VehicleStack.Screen
          name="VehicleSeeOrderScreen"
          component={VehicleSeeOrderScreen}
          options={{ headerShown: false }}
        />
        <VehicleStack.Screen
          name="ReviewServiceComp"
          component={ReviewServiceComp}
          options={{ headerShown: false }}
        />
        <VehicleStack.Screen
          name="ManuallyDetails"
          component={ManuallyDetails}
          options={{ headerShown: false }}
        />
        <VehicleStack.Screen
          name="RecommandedVehicle"
          component={RecommandedVehicle}
          options={{ headerShown: false }}
        />
      </VehicleStack.Group>
    </VehicleStack.Navigator>
  );
};

export default VehicleStackNavigation;
