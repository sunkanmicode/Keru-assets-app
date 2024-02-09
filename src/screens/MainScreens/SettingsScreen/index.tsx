import { View, Text, Alert } from "react-native";
import React from "react";
import SettingsComp from "../../../components/mainComp/SettingsComp";
import {
  AntDesign,
  Ionicons,
  Feather,
  MaterialIcons,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import useAuthStore from "../../../stores/authStore";
import Toast from "react-native-toast-message";
import AsyncStorage from "@react-native-async-storage/async-storage";

type settingsType = {
  icon: React.ReactNode;
  title: string;
  desc: string;
  nextIcon: React.ReactNode;
  onPress: () => void;
}[];

const SettingsScreen = () => {
  const navigation = useNavigation();
  const { setIsLoggedIn, setAuthUser, isLoggedIn, authUser } = useAuthStore(
    (state) => ({
      setIsLoggedIn: state.setIsLoggedIn,
      setAuthUser: state.setAuthUser,
      isLoggedIn: state.isLoggedIn,
      authUser: state.authUser,
    })
  );

  console.log(isLoggedIn, authUser, "isLoggedIn");

  //LOG OUT LOGIC
  const handleLogout = async () => {
    console.log("click me");
    Alert.alert("Logout!", "Are you sure you want to logout?", [
      {
        text: "Cancel",
        onPress: () => {},
      },
      {
        text: "Ok",
        onPress: async () => {
          Toast.show({
            type: "success",
            text2: "You have logged out",
          });
          await AsyncStorage.removeItem("token");
          setIsLoggedIn(false);
          setAuthUser(null);

          console.log("removed");
        },
      },
    ]);
  };

  const otherMenu: settingsType = [
    {
      icon: <AntDesign name="wallet" size={20} color="#BAAFE9" />,
      title: "Bookings",
      desc: "See any booking on your asset",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
        navigation.navigate("Bookings");
      },
    },

    {
      icon: <Feather name="lock" size={20} color="#BAAFE9" />,
      title: "Requests",
      desc: "See your vehicle requests from drivers",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
        navigation.navigate("RequestComp");
      },
    },
    {
      icon: <AntDesign name="wallet" size={20} color="#BAAFE9" />,
      title: "Wallet",
      desc: "See any Paylow agent around you",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
        navigation.navigate("WalletComp");
      },
    },
    {
      icon: <Feather name="lock" size={20} color="#BAAFE9" />,
      title: "Fleet Order",
      desc: "See your vehicle requests from drivers",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
        navigation.navigate("OrderStatus");
      },
    },
  ];

  const securityData: settingsType = [
    {
      icon: <Feather name="lock" size={20} color="#BAAFE9" />,
      title: "Change Password",
      desc: "Change your password anytime",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
        navigation.navigate("ChangePasswordComp");
      },
    },
    {
      icon: <AntDesign name="wallet" size={20} color="#BAAFE9" />,
      title: "Change PIN",
      desc: "Change your  transaction anytime",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
        navigation.navigate("ChangePinComp");
      },
    },
    {
      icon: <Ionicons name="finger-print" size={20} color="#BAAFE9" />,
      title: "Use Fingerprint",
      desc: "You have virtual accounts created for you",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
        navigation.navigate("FingerPrintComp");
      },
    },
  ];

  const supportData: settingsType = [
    {
      icon: <Feather name="lock" size={20} color="#BAAFE9" />,
      title: "Refer & Earn",
      desc: "Invite your friends and get a bonus",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
        navigation.navigate("ReferAndEarnComp");
      },
    },
    {
      icon: <AntDesign name="wallet" size={20} color="#BAAFE9" />,
      title: "Help Center",
      desc: "Have an issue? Speak to out team",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {},
    },
    {
      icon: <MaterialIcons name="logout" size={20} color="#BAAFE9" />,
      title: "Logout",
      desc: "You have virtual accounts created for you",
      nextIcon: <Ionicons name="chevron-forward" size={20} color="black" />,
      onPress: () => {
          handleLogout();
          console.log("logged out");
      },
    },
  ];
  return (
    <SettingsComp
      otherMenu={otherMenu}
      securityData={securityData}
      supportData={supportData}
    />
  );
};

export default SettingsScreen;
