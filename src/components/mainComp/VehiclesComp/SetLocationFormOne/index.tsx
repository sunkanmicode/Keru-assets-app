import { View, Text, TextInput, Image, TouchableOpacity } from "react-native";
import { AntDesign, Octicons } from "@expo/vector-icons";
import React from 'react'

const SetLocationFormOne = () => {
  return (
    <View className="mx-auto">
      <View
        className="w-[332px] h-[122px] px-[16] py-[10]  "
        style={{
          shadowColor: "rgba(0, 0, 0, 0.05)",
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 10,
          elevation: 1,
          borderColor: "#F1F0F0",
          borderWidth: 1,
          // border: 1px solid #F1F0F0
          borderRadius: 10,
        }}
      >
        <View className=" w-[216px] h-[90px] self-center">
          <Image
            source={require("../../../../../assets/images/car2.png")}
            style={{
              width: "100%",
              height: "100%",
              //   borderRadius: 100,
            }}
          />
        </View>
      </View>
      <View>
        <View className="mb-1 mt-10 flex-row items-center">
          <Octicons name="dot-fill" size={24} color="#009B5A" />
          <Text className="text-[12px] mx-3  font-[500] font-[Archivo] leading-[13px]">
            Set Pick Up
          </Text>
        </View>
        <View className="flex-row  items-center">
          <View className="flex-row flex-1 px-3  h-[54] items-center rounded-md bg-[#F5F5F5] justify-between ">
            <TextInput placeholder="23, Osaye Street" className="flex-1 " />
          </View>
          <TouchableOpacity className=" h-[54] ml-2 w-[42] justify-center items-center rounded-md">
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>

      <View>
        <View className="mb-1 mt-5 flex-row items-center">
          <Octicons name="dot-fill" size={24} color="red" />
          <Text className="text-[12px] mx-3  font-[500] font-[Archivo] leading-[13px]">
            Set Destination
          </Text>
        </View>
        <View className="flex-row  items-center">
          <View className="flex-row flex-1 px-3  h-[54] items-center rounded-md bg-[#F5F5F5] justify-between ">
            <TextInput placeholder="23, Osaye Street" className="flex-1 " />
          </View>
          <TouchableOpacity className=" h-[54] ml-2 w-[42] justify-center items-center rounded-md">
            <AntDesign name="pluscircleo" size={24} color="black" />
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default SetLocationFormOne