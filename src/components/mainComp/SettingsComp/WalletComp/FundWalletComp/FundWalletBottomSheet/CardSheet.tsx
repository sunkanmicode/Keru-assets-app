import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from 'react'
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import CustomInput from "../../../../../customsComp/Input";


const CardSheet = ({ fundWalletCloseSheet }) => {
  return (
    <View className="flex-1 p-5 bg-white">
      <View className="mb-5 flex-row items-center justify-between">
        <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
          Fund with Card
        </Text>
        <TouchableOpacity
          onPress={() => {
            fundWalletCloseSheet();
          }}
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <CustomInput
        width={50}
        whiteBg
        label="Card Number"
        placeholder="Enter Card Number"
      />
      <View className=" flex-row justify-between mt-3">
        <View>
          <Text className="text-[12px] font-[500] font-[Archivo] leading-normal">
            Expire Date
          </Text>
          <View className="w-[193] h-[51] border border-[#D3D3D3] rounded-lg">
            <TextInput
              placeholder="MM/YY"
              className=" flex-1  px-[13px] py-[16px]"
            />
          </View>
        </View>
        <View>
          <Text className="text-[12px] font-[500] font-[Archivo] leading-normal">
            CVV
          </Text>
          <View className="w-[122] h-[51] border border-[#D3D3D3] rounded-lg">
            <TextInput
              placeholder="---"
              className=" flex-1  px-[13px] py-[16px]"
            />
          </View>
        </View>
      </View>
    </View>
  );
};

export default CardSheet