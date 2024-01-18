import { View, Text, Image, TouchableOpacity } from "react-native";
import React from 'react'
import { CustomButton } from '../../../customsComp/Input';
import { EvilIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';

const OrderCompletedScreen = () => {
    const navigation = useNavigation();
  return (
    <View className=" flex-1 bg-white p-6">
      <TouchableOpacity
        className="mt-10"
        onPress={() => {
          navigation.navigate("StoreScreen");
        }}
      >
        <EvilIcons name="close" size={24} color="black" />
      </TouchableOpacity>
      <View className="items-center flex-[.95] justify-center">
        <View className="w-[180px] h-[180] ">
          <Image
            source={require("../../../../../assets/images/completed.gif")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View>
          <Text className="font-[Archivo] font-[700] text-[24px] text-center leading-[37px]">
            Order Completed
          </Text>
          <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px] text-center">
            You have successfully purchased your order
          </Text>
        </View>
      </View>
      {/* <View>
        <CustomButton
          primary
          title="Login"
          onPress={() => {
            navigation.navigate("Login");
          }}
        />
      </View> */}
    </View>
  );
}

export default OrderCompletedScreen