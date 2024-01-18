import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomInput, { CustomButton } from "../../../customsComp/Input";


const BuyElectricityComp = () => {
    const navigation = useNavigation()
  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="py-6  flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text className="text-[24px] font-[600] font-[Archivo] leading-[26px]">
          Buy Electricity
        </Text>
        <View>
          <CustomInput primary
            label="Enter Meter Number"
            placeholder="Enter Meter Number"
          />

          <CustomInput primary label="Disco Type" placeholder=" Select Disco Type" />
          <CustomInput primary label="Meter Type" placeholder=" Select Meter Type" />
          <CustomInput primary label="Amount" placeholder="Enter Amount" />
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
        <CustomButton
          primary
          title="Continue"
          onPress={() => {
            navigation.navigate("BuyElecttricityReviewComp");
          }}
        />
      </View>
    </>
  );
};

export default BuyElectricityComp