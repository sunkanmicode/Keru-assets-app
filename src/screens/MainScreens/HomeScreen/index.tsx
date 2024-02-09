import { View, Text } from "react-native";
import React, { useRef, useCallback } from "react";
import HomeComp from "../../../components/mainComp/HomeComp";
import { useFocusEffect, useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getDashboard, getMeUser } from "../../../api_services/user_apis";

type QuicklinkType = {
  name: string;
  image: string;
  onPress: () => void;
}[];

const HomeScreen = () => {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const { data: getUserInfoQuery, refetch } = useQuery({
    queryKey: ["get-me"],
    queryFn: getMeUser,
  });

  const getDashboardQuery = useQuery({
    queryKey: ["get-dashboard"],
    queryFn: getDashboard,
  });

  console.log(getDashboardQuery, "getDashboardQuery");

  useFocusEffect(
    React.useCallback(() => {
      // Fetch the data first
      refetch();

      // Set the visibility based on the data
      if (
        getUserInfoQuery?.is_wallet_set == undefined ||
        (getUserInfoQuery?.is_wallet_set !== undefined &&
          getUserInfoQuery?.is_wallet_set) ||
        getUserInfoQuery?.is_pin_set
      ) {
        setVisible(false);
      } else {
        setVisible(true);
      }

      // No need to use a flag to avoid re-fetching on the first render
      // The effect will only run when the screen is focused and the dependencies change
    }, [refetch, getUserInfoQuery?.is_wallet_set, getUserInfoQuery?.is_pin_set])
  );

  const height = 580;

  const sheetRef = useRef(null);
  const quicklinkData: QuicklinkType = [
    {
      name: "Airtime",
      image: require("../../../../assets/images/phone-icon.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation", {
          screen: "BuyAirtimeComp",
          initial: false,
        });
      },
    },
    {
      name: "Data",
      image: require("../../../../assets/images/wifi.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation", {
          screen: "BuyDataComp",
          initial: false,
        });
      },
    },
    {
      name: "Cable Tv",
      image: require("../../../../assets/images/keyboardopen.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation", {
          screen: "BuyCableComp",
          initial: false,
        });
      },
    },
    {
      name: "Electricity",
      image: require("../../../../assets/images/blub.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation", {
          screen: "BuyElectricityComp",
          initial: false,
        });
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
      visible={visible}
      setVisible={setVisible}
      getUserInfoQuery={getUserInfoQuery}
      getDashboardQuery={getDashboardQuery}
    />
  );
};

export default HomeScreen;
