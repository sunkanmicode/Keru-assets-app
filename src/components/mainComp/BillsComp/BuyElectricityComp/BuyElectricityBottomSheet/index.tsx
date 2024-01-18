import React from "react";
import { View, Text, TouchableOpacity, Image } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const BuyElectricityBottomSheet = () => {
  const navigation = useNavigation();
  return (
    <View className=" p-[20px]">
      <View className=" w-[233px] h-[19px]">
        <Text className="text-[16px] font-[500] font-[Archivo] leading-[17px]">
          Payment Method
        </Text>
      </View>
      <View className=" my-10 mx-auto">
        <TouchableOpacity
          className=" w-[344px] h-[56px] px-[16px] bg-[#F0F0FF] rounded-full flex-row items-center justify-between my-6"
          onPress={() => {
            navigation.navigate("ElectricityEnterPin");
          }}
        >
          <Text className="text-[14px] font-[400] font-[Archivo] leading-[16px] ">
            Pay with Wallet
          </Text>
          <View>
            <MaterialIcons
              name="account-balance-wallet"
              size={24}
              color="#BAAFE9"
            />
          </View>
        </TouchableOpacity>

        <TouchableOpacity className=" w-[344px] h-[56px] px-[16px] bg-[#FCFCFD] border border-[#DFDFE6] rounded-full flex-row items-center justify-between">
          <Text className="text-[14px] font-[400] font-[Archivo] leading-[16px] ">
            Pay with Paystack
          </Text>
          <View className=" w-[26px] h-[27px]">
            <Image
              source={require("../../../../../../assets/images/paypal.png")}
              style={{
                width: "100%",
                height: "100%",
                //   borderRadius: 100,
              }}
            />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default BuyElectricityBottomSheet;
