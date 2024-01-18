import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const CompletedRequest = () => {
  const naviagtion = useNavigation();
  return (
    <>
      <View>
        <ScrollView showsVerticalScrollIndicator={false} className=" mt-5">
          <TouchableOpacity
            className=" flex-row   h-[113px] border rounded-2xl border-[#F1F0F0]"
            // onPress={() => {
            //   requestOpenSheet();
            // }}
          >
            <View className=" w-[118px] h-[48px] self-center">
              <Image
                source={require("../../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  // borderRadius: 100,
                }}
              />
            </View>
            <View className=" ">
              <View className=" w-[200px] h-[41px] my-2 flex-row items-center justify-between">
                <View>
                  <View className=" my-3">
                    <Text className="font-[500] text-[12px] font-[Archivo] leading-[13.06px] ">
                      Power Steering Pumps 2
                    </Text>
                    <Text className="font-[300] text-[8px] font-[Archivo] leading-[12px]">
                      Order #2244556777
                    </Text>
                  </View>
                  <Text className="font-[600] text-[10px] font-[Archivo] leading-[10px]">
                    N5000
                  </Text>
                </View>
              </View>
              <View className=" flex-row justify-between items-center py-5 ">
                <View className="h-[15px] bg-[#EAF4FF] px-[10px] py-[2px] rounded-full">
                  <Text className="font-[500] text-[9px] font-[Archivo] leading-[10px] text-center text-[#2893FF]">
                    COMPLETED
                  </Text>
                </View>
                <View className="">
                  <Text className="font-[500] text-[10px] font-[Archivo] leading-[15px]">
                    27-05-2021
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
    </>
  );
};

export default CompletedRequest;
