import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import { useNavigation } from "@react-navigation/native";
import OrderBotSheet from "./OrderBotSheet";

const SalesCat = () => {
  return (
    <View>
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <TouchableOpacity
          className=" flex-row h-[113px] justify-between border rounded-2xl border-[#F1F0F0]"
          onPress={() => {
            // orderOpenSheet();
          }}
        >
          <View className=" flex-row ">
            <View className=" w-[118px] h-[48px] self-center">
              <Image
                source={require("../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  // borderRadius: 100,
                }}
              />
            </View>

            <View className=" h-[41px] my-2 ">
              <View>
                <View className="flex-row items-center">
                  <Text className="font-[500] text-[12px] font-[Archivo] leading-[13.06px] mt-3 ">
                    Power Steering
                  </Text>
                </View>
                <Text className="font-[600] text-[10px] font-[Archivo] leading-[10px] my-3">
                  05/03/2023 . 7:23 AM
                </Text>
                <Text className="font-[600] text-[8px] font-[Archivo] leading-[8px] text-[#009B5A]">
                  SUCCESSFUL
                </Text>
              </View>
            </View>
          </View>
          <View className="mt-5 mx-3 items-end">
            <Text className="font-[600] text-[14px] font-[Archivo] leading-[15px] text-[#009B5A]">
              N3000
            </Text>
            <Text className="font-[300] text-[8px] font-[Archivo] leading-[15px] ">
              ID:213773799
            </Text>
          </View>
        </TouchableOpacity>
      </ScrollView>
    </View>
  );
};

export default SalesCat;
