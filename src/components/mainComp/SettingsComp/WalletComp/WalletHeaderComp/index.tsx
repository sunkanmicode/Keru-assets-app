import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { FundWallet, SendMoney, TransactionsIcon } from "../../../../../helper/Icons";


type HeaderDataType ={
  icon: React.ReactNode;
  title: string;
  onPress:()=>void;
}[]

const WalletHeaderComp = () => {
  const navigation = useNavigation()

  const headerData:HeaderDataType = [
    {
      // icon: <AntDesign name="wallet" size={20} color="#BAAFE9" />,
      icon:<FundWallet />,
      title: "Fund  Wallet",
      onPress: () => {
        navigation.navigate("FundWalletComp");

      },
    },
    {
      // icon: <AntDesign name="wallet" size={20} color="#BAAFE9" />,
      icon:<SendMoney />,
      title: "Send Money",
      onPress: () => {
        navigation.navigate("SendMoneyScreen")
      },
    },
    // {
    //   // icon: <AntDesign name="wallet" size={20} color="#BAAFE9" />,
    //   icon:<TransactionsIcon />,
    //   title: "Withdraw",
    //   onPress: () => {},
    // },
  ];
  return (
    <>
      <View className="py-10 px-6  bg-[#000]">
        <View className="py-6 mb-5 flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="white" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-white">
            Wallet
          </Text>
        </View>
        <View className="justify-center items-center">
          <View className="w-[172px] h-[51px]  items-center ">
            <Text className="text-[12px] font-[300] font-[Archivo] leading-[13px] text-white">
              Wallet Balance
            </Text>
            <View className=" flex-row items-end">
              <Text className="text-[28px] font-[600] font-[Archivo] leading-[30px] text-white">
                40,000.00 {}
              </Text>
              <Text className="text-[16px] font-[600] font-[Archivo] leading-[17px] text-white">
                NGN
              </Text>
            </View>
          </View>
          <View className="flex-row w-[285px] justify-around my-4">
            {headerData.map((item, index) => (
              <TouchableOpacity
              key={index}
                className=" items-center"
                onPress={item.onPress}
              >
                {item.icon}
                <Text className="text-[12px] font-[400] font-[Archivo] leading-[13px] text-white mt-1.5">
                  {item.title}
                </Text>
              </TouchableOpacity>
            ))}
          </View>
        </View>
      </View>
    </>
  );
};

export default WalletHeaderComp;
