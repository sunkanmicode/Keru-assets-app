import { View, Text } from "react-native";
import React from "react";
import BillsComp from "../../../components/mainComp/BillsComp";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";


type billData={
  title:string,
  icon: React.ReactNode;
  onPress: ()=>void;

}[]

const BillsScreens = () => {
  const navigation = useNavigation()

const billData: billData = [
  {
    title: "Data",
    icon: <Ionicons name="chevron-forward" size={16} color="black" />,
    onPress: () => {
      navigation.navigate("BuyDataComp");
    },
  },
  {
    title: "Airtime Top-Up",
    icon: <Ionicons name="chevron-forward" size={16} color="black" />,
    onPress: () => {
      navigation.navigate("BuyAirtimeComp");
    },
  },
  {
    title: "Electricity",
    icon: <Ionicons name="chevron-forward" size={16} color="black" />,
    onPress: () => {
        navigation.navigate("BuyElectricityComp");
    },
  },
  {
    title: "Cable TV",
    icon: <Ionicons name="chevron-forward" size={16} color="black" />,
    onPress: () => {
       navigation.navigate("BuyCableComp");
    },
  },
  {
    title: "Internet",
    icon: <Ionicons name="chevron-forward" size={16} color="black" />,
    onPress: () => {
      navigation.navigate("BuyInternetComp");
    },
  },
  {
    title: "Exam Bills",
    icon: <Ionicons name="chevron-forward" size={16} color="black" />,
    onPress: () => {
      navigation.navigate("PayExamComp");
    },
  },
];



  return <BillsComp billData={billData} />;
};

export default BillsScreens;
