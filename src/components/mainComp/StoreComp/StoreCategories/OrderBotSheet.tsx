import { Text, View, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";

const OrderBotSheet = ({ orderCloseSheet }) => {

  const tripInformation = [
    {
      icon: <Octicons name="dot-fill" size={12} color="#009B5A" />,
      venue: "Asset Assigned",
      time: "Tue, Mar 28 2023 | 11:01:00",
    },
    {
      icon: <Octicons name="dot-fill" size={12} color="red" />,
      venue: "Asset On route to Pick up",
      time: "Tue, Mar 28 2023 | 11:01:00",
    },
    {
      icon: <Octicons name="dot-fill" size={12} color="red" />,
      venue: "Goods Pick up",
      time: "Tue, Mar 28 2023 | 11:01:00",
    },
  ];
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 mx-auto bg-white"
      >
        <View className="mb-5 flex-row items-center justify-between">
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
            Order Summary
          </Text>
          <TouchableOpacity
            onPress={() => {
              orderCloseSheet();
            }}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <View
            className="w-[335px] h-[161px] px-[16] py-[10]"
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
            <View className=" w-[91px] h-[38px] self-center mt-1">
              <Image
                source={require("../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  //   borderRadius: 100,
                }}
              />
            </View>
            <View className=" flex-row justify-between mt-2">
              <View>
                <Text className="w-[148px] font-[600] text-[12px]  font-[Archivo] leading-[13px]">
                  Power Steering Pumps 2
                </Text>
                <Text className="font-[300] text-[8px]  font-[Archivo] leading-[12px]">
                  Order #2244556777
                </Text>
              </View>
              <Text className="font-[600] text-[12px]  font-[Archivo] leading-[18px]">
                N5000
              </Text>
            </View>
            <View className=" flex-row justify-between items-center py-5">
              <View className="w-[70px] h-[15px] bg-[#FFEBEB] px-[10px] py-[2px] rounded-full">
                <Text className="font-[500] text-[9px] font-[Archivo] leading-[10px] text-center text-[#FF776C]">
                  PENDING
                </Text>
              </View>
              <View className="">
                <Text className="font-[500] text-[10px] font-[Archivo] leading-[15px]">
                  27-05-2021
                </Text>
              </View>
            </View>
          </View>
          <View
            className="h-[86px] my-[28px] p-2 "
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
            <Text className="font-[600] text-[16px]  font-[Archivo] leading-[17px] pb-3">
              Destination Details
            </Text>
            <View>
              <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13px]">
                Festac Access Rd Lagos, LA, Nigeria
              </Text>
              <Text className="font-[400] text-[10px] font-[Archivo] leading-[10.88px]">
                Tue, Mar 28 2023 | 11:01:00
              </Text>
            </View>
          </View>

          <View className="mt-5">
            <View className="h-[33px] w-[126px] bg-[#F2EFFE] items-center justify-center rounded-full my-5">
              <Text className="  text-[12px]  text-[#7065A0] font-[500] font-[Archivo] leading-[13px]">
                Trip Information
              </Text>
            </View>
            <View className="w-[190px]">
              <View className="w-[200px]">
                {tripInformation.map((item, index) => (
                  <>
                    <View key={index} className=" flex-row relative mb-6">
                      {item.icon}
                      <View className=" ml-1">
                        <Text className="font-[400] text-[11px]  font-[Archivo] leading-[11px] ">
                          {item.venue}
                        </Text>
                        <Text className="font-[400] text-[10px]  font-[Archivo] leading-[10]">
                          {" "}
                          {item.time}
                        </Text>
                      </View>
                    </View>
                    <View className="h-[28px] w-[1px]  bg-[#CCCBCB] absolute left-0.5 top-5" />
                  </>
                ))}
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </>
  );
};

export default OrderBotSheet;
