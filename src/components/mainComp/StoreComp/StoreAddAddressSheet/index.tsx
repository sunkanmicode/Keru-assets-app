import { View, Text, TextInput, TouchableOpacity } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const StoreAddAddressSheet = () => {
  const navigation =  useNavigation()
  return (
    <>
      <View className="p-10 ">
        <Text className="font-[500] text-[16px] font-[Archivo] leading-[17px]">
          Add Addresst
        </Text>
        <View className=" w-[335px] h-[148px] mt-6">
          <Text>Address</Text>
          <View className="w-[335px] h-[127px] bg-[#E8E8E8]">
            <TextInput multiline className="  justify-start" />
          </View>
        </View>
      </View>
      <View className=" items-center justify-center bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/100">
        <TouchableOpacity
          className="w-[335px] h-[35px] px-[20px] py-[10px] bg-[#BAAFE9] justify-center items-center rounded-[50px]"
          // onPress={() => {
          //   navigation.navigate("OrderCompletedScreen");
          // }}
        >
          <Text className="font-[500] text-[12px] font-[Archivo] leading-[13px] text-white">
            Add Address
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default StoreAddAddressSheet