import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";

const BankTransfarSheet = ({ fundWalletCloseSheet }) => {
  return (
    <View className="flex-1 p-5 bg-white">
      <View className="mb-5 flex-row items-center justify-between">
        <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
          Fund with Bank Transfer
        </Text>
        <TouchableOpacity
          onPress={() => {
            fundWalletCloseSheet();
          }}
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>

      <View>
        <View className=" w-[335px] h-[195px]  self-center shadow rounded shadow-black/20">
          <View className=" my-[15px] pl-[20px]">
            <Text className="text-[10px] font-[400] font-[Archivo] leading-[10px]">
              Account Name
            </Text>
            <View className=" flex-row items-center justify-between mt-2 pb-[12px]">
              <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                Softamos Ventures
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>
          {/* ####################################### */}
          <View className=" pl-[20px]">
            <Text className="text-[10px] font-[400] font-[Archivo] leading-[10px]">
              Bank Name
            </Text>
            <View className=" flex-row items-center justify-between mt-2 pb-[12px]">
              <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                ZENITH BANK
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>
          {/* ####################################### */}
          {/* ####################################### */}
          <View className=" pl-[20px] my-[12px]">
            <Text className="text-[10px] font-[400] font-[Archivo] leading-[10px]">
              Account Number
            </Text>
            <View className=" flex-row items-center justify-between mt-2 pb-[12px]">
              <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                1234986782
              </Text>
            </View>
            {/* <View className=" h-0.5 bg-[#F5F5F5]" /> */}
          </View>
          {/* ####################################### */}
        </View>
        {/* ################### */}
        <View className=" w-[335px] h-[195px]  self-center shadow rounded shadow-black/20">
          <View className=" my-[15px] pl-[20px]">
            <Text className="text-[10px] font-[400] font-[Archivo] leading-[10px]">
              Account Name
            </Text>
            <View className=" flex-row items-center justify-between mt-2 pb-[12px]">
              <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                Softamos Ventures
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>
          {/* ####################################### */}
          <View className=" pl-[20px]">
            <Text className="text-[10px] font-[400] font-[Archivo] leading-[10px]">
              Bank Name
            </Text>
            <View className=" flex-row items-center justify-between mt-2 pb-[12px]">
              <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                ZENITH BANK
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>
          {/* ####################################### */}
          {/* ####################################### */}
          <View className=" pl-[20px] my-[12px]">
            <Text className="text-[10px] font-[400] font-[Archivo] leading-[10px]">
              Account Number
            </Text>
            <View className=" flex-row items-center justify-between mt-2 pb-[12px]">
              <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                1234986782
              </Text>
            </View>
            {/* <View className=" h-0.5 bg-[#F5F5F5]" /> */}
          </View>
          {/* ####################################### */}
        </View>
      </View>
    </View>
  );
};

export default BankTransfarSheet;
