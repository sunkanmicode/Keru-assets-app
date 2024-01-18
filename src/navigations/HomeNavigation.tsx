import { View, Text } from "react-native";
import React from "react";
import { MaterialCommunityIcons } from "@expo/vector-icons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { HomeStackParamList } from "./navigationTypes";
import HomeStackNavigation from "./RootNavigations/HomeStackNavigation";
import {
  BillsIcon,
  HomeActiveIcon,
  HomeIcon,
  StoreIcon,
  TransactionsIcon,
  VehicleIcon,
} from "../helper/Icons";
import VehicleStackNavigation from "./RootNavigations/VehiclesStackNavigation";
import StoreStackNavigation from "./RootNavigations/StoreStackNavigation";
import BillsStackNavigation from "./RootNavigations/BillsStackNavigation";
import TransactionsStackNav from "./RootNavigations/TransactionsStackNav";
import Icon2 from "../helper/CustomIcon";
import { getFocusedRouteNameFromRoute } from "@react-navigation/native";

const HomeStack = () => {};
const Tab = createBottomTabNavigator<HomeStackParamList>();

function DummyScreen() {
  return (
    <View className="flex-1 items-center justify-center bg-green-500">
      <Text>Am a Dummy Screen</Text>
    </View>
  );
}

const HomeNavigation = () => {

   const getTabBarVisibility = (route) => {
     const routeName =
       getFocusedRouteNameFromRoute(route) ?? "VehicleStackNavigation";
     if (
       routeName === "VehicleDetailsScreen" ||
       routeName === "DriverDetailsComp"
     
     ) {
       return "none";
     }
     return "flex";
   };



  return (
    <>
      <Tab.Navigator
        initialRouteName="HomeScreen"
        screenOptions={({ route }) => ({
          header: () => null,

          tabBarIcon: ({ focused, size, color, type, tabBarLabel }) => {
            let iconName;
            if (route.name === "HomeStackNavigation") {
              iconName = focused ? "HomeActiveIcon" : "HomeIcon";
              tabBarLabel = "Home";
              type = focused ? "HomeActiveIcon" : "HomeIcon";
            } else if (route.name === "VehicleStackNavigation") {
              iconName = focused ? "VehicleActiveIcon" : "VehicleIcon";
              type = focused ? "VehicleActiveIcon" : "VehicleIcon";
              tabBarLabel = focused ? "Vehicle" : null;
            } else if (route.name === "StoreStackNavigation") {
              iconName = focused ? "StoreActiveIcon" : "StoreIcon";
              tabBarLabel = focused ? "Store" : null;

              type = focused ? "StoreActiveIcon" : "StoreIcon";
            } else if (route.name === "BillsStackNavigation") {
              iconName = focused ? "BillSActiveIcon" : "BillsIcon";
              type = focused ? "BillSActiveIcon" : "BillsIcon";
              tabBarLabel = focused ? "Store" : null;
            } else if (route.name === "TransactionsStackNav") {
              iconName = focused
                ? "TransactionsActiveIcon"
                : "TransactionsIcon";
              type = focused ? "TransactionsActiveIcon" : "TransactionsIcon";
              tabBarLabel = focused ? "Transactions" : null;
            }
            return <Icon2 type={type} name={iconName} />;
          },
          tabBarActiveTintColor: "#BAAFE9",
          // // tabBarInactiveTintColor: "gray",
          // tabBarActiveBackgroundColor: "rgba(175, 94, 65, 0.2)",
          // tabBarLabelPosition: "beside-icon",
        })}
      >
        <Tab.Screen
          name="HomeStackNavigation"
          component={HomeStackNavigation}
          options={({ route }) => ({
            tabBarLabel: "Home",
          })}
        />
        <Tab.Screen
          name="VehicleStackNavigation"
          component={VehicleStackNavigation}
          options={({ route }) => ({
            tabBarLabel: "Fleets",
            tabBarStyle: { display: getTabBarVisibility(route) },
          })}
        />
        <Tab.Screen
          name="StoreStackNavigation"
          component={StoreStackNavigation}
          options={({ route }) => ({
            tabBarLabel: "Store",
          })}
        />
        <Tab.Screen
          name="BillsStackNavigation"
          component={BillsStackNavigation}
          options={({ route }) => ({
            tabBarLabel: "Bills",
          })}
        />
        <Tab.Screen
          name="TransactionsStackNav"
          component={TransactionsStackNav}
          options={({ route }) => ({
            tabBarLabel: "Transactions",
          })}
        />
      </Tab.Navigator>
    </>
  );
};

export default HomeNavigation;
