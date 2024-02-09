import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import QuickLink from "../QuickLink";

const AccountDetails = ({ quicklinkData, getDashboardQuery }) => {
  const navigation = useNavigation();

  
  return (
    <View>
      <View>
        <Text className="text-[14px] font-[500] font-[SwitzerVariable] leading-[15.48px]">
          Summary
        </Text>
      </View>

      <View className="h-0.5 bg-[#F1F0F0] mt-4 mb-7" />
      <View className=" flex-row items-center justify-around mb-5">
        <View className=" ">
          <Text className="text-[20px] font-[500] font-[SwitzerVariable] leading-[26px] text-[#007FFF] text-center mb-[8px]">
            {getDashboardQuery?.data?.count?.stockOrder}
          </Text>
          <Text className="text-[10px] font-[400] font-[SwitzerVariable] leading-[13px] text-center">
            Store Sales
          </Text>
        </View>

        <View className=" ">
          <Text className="text-[20px] font-[500] font-[SwitzerVariable] leading-[26px] text-[#007FFF] text-center mb-[8px]">
            {getDashboardQuery?.data?.count?.vehicle}
          </Text>
          <Text className="text-[10px] font-[400] font-[SwitzerVariable] leading-[13px] text-center">
            Total Vehicles
          </Text>
        </View>
        <View className=" ">
          <Text className="text-[20px] font-[500] font-[SwitzerVariable] leading-[26px] text-[#007FFF] text-center mb-[8px]">
            {getDashboardQuery?.data?.count?.revenue}
          </Text>
          <Text className="text-[10px] font-[400] font-[SwitzerVariable] leading-[13px] text-center">
            Revenue
          </Text>
        </View>
      </View>
      <View className=" flex-row items-center justify-between">
        <Text className="text-sm font-medium font-[SwitzerVariable] ">
          Pending Fleet Orders
        </Text>
        <TouchableOpacity>
          <Text className="text-sm font-medium font-[SwitzerVariable]">
            See all
          </Text>
        </TouchableOpacity>
      </View>
      <View className="h-0.5 bg-[#F1F0F0] mt-4 mb-7" />
      <TouchableOpacity
        className="flex-row justify-between"
        onPress={() => {
          navigation.navigate("VehicleStackNavigation", {
            screen: "VehiclesScreen",
            // items
          });
        }}
      >
        <View className="flex-row">
          <View className="w-[100px] h-[46px]">
            <Image
              source={require("../../../../../assets/images/car2.png")}
              style={{
                width: "100%",
                height: "100%",
                // borderRadius: 100,
              }}
            />
          </View>
          <View className="mx-3">
            <Text className="text-[14px] font-[500] font-[Archivo] leading-[15px]">
              Toyota RAV - Yamaha
            </Text>
            <Text className=" w-[85px] text-[10px] rounded-full text-[#7065A0] p-[8]  bg-[#F2EFFE] font-[500] font-[Archivo] leading-[10px]">
              KR-SRUDBA
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-[10px] text-[#007FFF] font-[500] font-[Archivo] leading-[10px]">
            6 Seats
          </Text>
        </View>
      </TouchableOpacity>
      <View className="h-0.5 bg-[#F1F0F0] mt-4 mb-7" />
      {/* #################################### */}

      <View>
        <View className=" flex-row items-center justify-between">
          <Text className="font-[SwitzerRegular] text-[12px] font-[500] leading-[15]">
            Quick Links
          </Text>
          <TouchableOpacity>
            <Text className="font-[SwitzerRegular] text-[12px] font-[500] text-[#007FFF] leading-[15]">
              Edit
            </Text>
          </TouchableOpacity>
        </View>
        <View className="h-0.5 bg-[#F1F0F0] mt-4 mb-7" />
        <QuickLink />
      </View>
    </View>
  );
};

export default AccountDetails