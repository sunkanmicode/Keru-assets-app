import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const NotificationComp = () => {
  const navigation= useNavigation()
  return (
    <View className="flex-1 bg-white p-6">
      <View className="py-6 mb-10 flex-row items-center">
        <TouchableOpacity
          className="mr-4"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
          Notifications
        </Text>
      </View>
      <View className="pb-[20px]">
        <TouchableOpacity className="-[335px] h-[39px] flex-row justify-between ">
          <Text className="text-[12px] font-[500] font-[Archivo] leading-normal">
            You have successful fund with N200
          </Text>
          <Text className="text-[10px] font-[300] font-[Archivo] leading-normal text-[#434343]">
            Today
          </Text>
        </TouchableOpacity>
        <View className="h-0.5 bg-[#CDCDCD]" />
      </View>
      <View>
        <TouchableOpacity className="-[335px] h-[39px] flex-row justify-between ">
          <Text className="text-[12px] font-[500] font-[Archivo] leading-normal">
            Data Purchase of 50GB was successful
          </Text>
          <Text className="text-[10px] font-[300] font-[Archivo] leading-normal text-[#434343]">
            Today
          </Text>
        </TouchableOpacity>
        <View className="h-0.5 bg-[#CDCDCD]" />
      </View>
    </View>
  );
}

export default NotificationComp