import { View, Text } from "react-native";
import React, { useRef } from "react";
import HomeComp from "../../../components/mainComp/HomeComp";
import { useNavigation } from "@react-navigation/native";

type QuicklinkType = {
  name: string;
  image: string;
  onPress: ()=>void;
}[];

const HomeScreen = () => {
  const navigation = useNavigation()
  const height = 580;

  

  const sheetRef = useRef(null);
  const quicklinkData: QuicklinkType = [
    {
      name: "Airtime",
      image: require("../../../../assets/images/phone-icon.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation",{screen: "BuyAirtimeComp"});
      },
    },
    {
      name: "Data",
      image: require("../../../../assets/images/wifi.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation",{screen:"BuyDataComp"});
      },
    },
    {
      name: "Cable Tv",
      image: require("../../../../assets/images/keyboardopen.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation",{screen:"BuyCableComp"});
      },
    },
    {
      name: "Electricity",
      image: require("../../../../assets/images/blub.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation",{screen:"BuyElectricityComp"});
      },
    },
    {
      name: "Deposit",
      image: require("../../../../assets/images/walletadd1.png"),
      onPress: () => {
        navigation.navigate("FundWalletComp");
      },
    },
    {
      name: "Transfar",
      image: require("../../../../assets/images/Vector.png"),
      onPress: () => {
        navigation.navigate("SendMoneyScreen");
      },
    },
    // {
    //   name: "Widthdraw",
    //   image: require("../../../../assets/images/directsend.png"),
    //   onPress: () => {
    //     // navigation.navigate("");
    //   },
    // },
  ];

  const closeSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.close();
    }
  };
  const openSheet = () => {
    if (sheetRef.current) {
      sheetRef.current.open();
    }
  };

  return (
    <HomeComp
      quicklinkData={quicklinkData}
      sheetRef={sheetRef}
      openSheet={openSheet}
      height={height}
    />
  );
};

export default HomeScreen;
