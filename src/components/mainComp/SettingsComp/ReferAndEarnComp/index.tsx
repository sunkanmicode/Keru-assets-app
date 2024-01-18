import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../../customsComp/Input";

const ReferAndEarnComp = () => {
    const navigation = useNavigation()
  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="py-6 mb-5 flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px]">
          Referrals
        </Text>
        <View className=" flex-1 justify-center items-center">
          <View className=" w-[187px] h-[44px]">
            <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px] text-center">
              Earn extra funds when refer someone
            </Text>
          </View>
          <View className=" w-[259px] h-[37px] my-6">
            <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] text-center">
              Share the link below and earn N500 in your wallet immediately your
              referrals use your link
            </Text>
          </View>
          <View className=" w-[327px] h-[74px] bg-[#F2EFFE] px-[13px] py-[16px] rounded-[6px]">
            <Text className="text-[19px] font-[600] font-[Archivo] leading-[25px] text-[#007FFF] text-center">
              FCSSDJJ23
            </Text>
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px] text-[#007FFF] text-center">
              Tap to copy your referral code
            </Text>
          </View>
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Share referral link"
          //   onPress={() => {
          //     complaintOpenSheet();
          //   }}
        />
      </View>
      
      <View className=" bg-white">
        <TouchableOpacity className=" w-[342px] h-[55px] bg-white px-[50px] py-[14px] rounded-[50px] self-center">
          <Text className="text-[14px] font-[500] font-[Archivo] leading-[18px] text-center">
            Check your earnings
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
}

export default ReferAndEarnComp