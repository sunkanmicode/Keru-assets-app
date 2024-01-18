import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomInput from "../../customsComp/Input";


const BillsComp = ({ billData }) => {
  return (
    <View className=" flex-1 py-10 px-6 bg-white">
      <View className="flex-row items-center pt-2 justify-between">
        <Text className="text-[28px] text-[#000]  font-[600] font-[Archivo] leading-[30.46px]">
          Bills
        </Text>
        {/* <TouchableOpacity>
          <AntDesign name="filter" size={24} color="black" />
        </TouchableOpacity> */}
      </View>

      <CustomInput primary name="search" placeholder="search bill" />
      {billData.map((item: any, index:number) => (
        <>
          <TouchableOpacity key={item.title} className=" flex-row items-center justify-between mt-6 mb-3" onPress={item.onPress}>
            <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13.06px] ">
              {item.title}
            </Text>
            <View>
              {item.icon}
            </View>
          </TouchableOpacity>
          <View className=" h-0.5 bg-[#EAEAEA]" key={index} />
        </>
      ))}
    </View>
  );
};

export default BillsComp