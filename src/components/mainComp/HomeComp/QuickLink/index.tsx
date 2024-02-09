import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";
import { useNavigation } from "@react-navigation/native";

type QuicklinkType = {
  name: string;
  image: string;
  onPress: () => void;
}[];

const QuickLink = () => {
  const navigation = useNavigation();

  const quicklinkData: QuicklinkType = [
    {
      name: "Airtime",
      image: require("../../../../../assets/images/phone-icon.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation", {
          screen: "BuyAirtimeComp",
          initial: false,
        });
      },
    },
    {
      name: "Data",
      image: require("../../../../../assets/images/wifi.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation", {
          screen: "BuyDataComp",
          initial: false,
        });
      },
    },
    {
      name: "Cable Tv",
      image: require("../../../../../assets/images/keyboardopen.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation", {
          screen: "BuyCableComp",
          initial: false,
        });
      },
    },
    {
      name: "Electricity",
      image: require("../../../../../assets/images/blub.png"),
      onPress: () => {
        navigation.navigate("BillsStackNavigation", {
          screen: "BuyElectricityComp",
          initial: false,
        });
      },
    },
    {
      name: "Deposit",
      image: require("../../../../../assets/images/walletadd1.png"),
      onPress: () => {
        navigation.navigate("FundWalletComp");
      },
    },
    {
      name: "Transfar",
      image: require("../../../../../assets/images/Vector.png"),
      onPress: () => {
        navigation.navigate("SendMoneyScreen");
      },
    },
    // {
    //   name: "Widthdraw",
    //   image: require("../../../../../assets/images/directsend.png"),
    //   onPress: () => {
    //     // navigation.navigate("");
    //   },
    // },
  ];

  return (
    <>
      {/* <FlatList
        numColumns={4}
        data={quicklinkData}
        renderItem={({ item }) => (
          <TouchableOpacity
            className=""
            onPress={item.onPress}
          >
            <View className=" items-center mb-10 mr-8">
              <View className="w-[36] h-[36] bg-[#F2EFFE] rounded-full p-[8px] ">
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: 100,
                  }}
                />
              </View>
              <Text className="text-[14px] text-center pt-2 font-[500] font-[Archivo] leading-normal">
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      /> */}

      <View style={{ flexDirection: "row", flexWrap: "wrap" }}>
        {quicklinkData.map((item, index) => (
          <TouchableOpacity
            key={index}
            className="flex-row mr-8"
            onPress={item.onPress}
          >
            <View className=" items-center  mb-10">
              <View className="w-[36] h-[36] bg-[#F2EFFE] rounded-full p-[8px]">
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: 100,
                  }}
                />
              </View>
              <Text className="text-[14px] text-center pt-2 font-[500] font-[Archivo] leading-normal">
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </>
  );
};

export default QuickLink;
