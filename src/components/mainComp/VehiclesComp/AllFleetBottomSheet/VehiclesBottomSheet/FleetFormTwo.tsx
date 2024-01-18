import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { EvilIcons } from "@expo/vector-icons";

const FleetFormTwo = () => {
  return (
    <View>
      <View>
        <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
          Vehicle Registration Cetificate
        </Text>
        <View className="  h-[49px] border border-dashed border-[#CCCBCB] mt-2 bg-[#FCFCFD] ">
          <TouchableOpacity className=" flex-row m-auto">
            <EvilIcons name="plus" size={24} color="#BAAFE9" />

            <Text className="font-[400] text-[10px] font-[Archivo] leading-[16] ">
              Upload Image
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-5">
        <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
          Cetificate of Ownership
        </Text>
        <View className="  h-[49px] border border-dashed border-[#CCCBCB] mt-2 bg-[#FCFCFD]">
          <TouchableOpacity className=" flex-row m-auto">
            {/* <View className=" w-[66px] h-[66px]  m-auto rounded-full justify-center items-center"> */}
            <EvilIcons name="plus" size={24} color="#BAAFE9" />
            {/* </View> */}

            <Text className="font-[400] text-[10px] font-[Archivo] leading-[16] ">
              Upload Image
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-5">
        <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
          Certificate of Roadworthiness
        </Text>
        <View className="  h-[49px] border border-dashed border-[#CCCBCB] mt-2 bg-[#FCFCFD]]">
          <TouchableOpacity className=" flex-row m-auto">
            {/* <View className=" w-[66px] h-[66px]  m-auto rounded-full justify-center items-center"> */}
            <EvilIcons name="plus" size={24} color="#BAAFE9" />
            {/* </View> */}

            <Text className="font-[400] text-[10px] font-[Archivo] leading-[16] ">
              Upload Image
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-5">
        <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
          Insurance Policy
        </Text>
        <View className="  h-[49px] border border-dashed border-[#CCCBCB] mt-2 bg-[#FCFCFD]]">
          <TouchableOpacity className=" flex-row m-auto">
            {/* <View className=" w-[66px] h-[66px]  m-auto rounded-full justify-center items-center"> */}
            <EvilIcons name="plus" size={24} color="#BAAFE9" />
            {/* </View> */}

            <Text className="font-[400] text-[10px] font-[Archivo] leading-[16] ">
              Upload Image
            </Text>
          </TouchableOpacity>
        </View>
      </View>

      <View className="mt-5">
        <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
          Hackney Permit
        </Text>
        <View className="  h-[49px] border border-dashed border-[#CCCBCB] mt-2 bg-[#FCFCFD]]">
          <TouchableOpacity className=" flex-row m-auto">
            {/* <View className=" w-[66px] h-[66px]  m-auto rounded-full justify-center items-center"> */}
            <EvilIcons name="plus" size={24} color="#BAAFE9" />
            {/* </View> */}

            <Text className="font-[400] text-[10px] font-[Archivo] leading-[16] ">
              Upload Image
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </View>
  );
}

export default FleetFormTwo