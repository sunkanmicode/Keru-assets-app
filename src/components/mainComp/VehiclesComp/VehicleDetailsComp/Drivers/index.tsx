import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import {  AntDesign, Octicons } from "@expo/vector-icons";
import { CapacityInformation, FleetDetails, Review } from "./DriverDetailsData";

// import { CapacityInformation, FleetDetails, Review } from "./FleetDetails";

const DriverDetailsComp = ({ detailsData, reviewData, capacityInfo }) => {
  const navigation = useNavigation();

  const pickUpAndDestination = [
    {
      icon: <Octicons name="dot-fill" size={12} color="#009B5A" />,
      venue: "Festac Access Rd Lagos, LA, Nigeria",
      time: "Tue, Mar 28 2023 | 11:01:00",
    },
    {
      icon: <Octicons name="dot-fill" size={12} color="red" />,
      venue: "Festac Access Rd Lagos, LA, Nigeria",
      time: "Tue, Mar 28 2023 | 11:01:00",
    },
  ];

  return (
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
        <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
          Details
        </Text>
      </View>
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View
          className="w-[335px] self-center border-[.05px] px-4 h-full"
          style={{
            shadowColor: "rgba(0, 0, 0, 0.05)",
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 10,
            elevation: 1,
            // borderColor: "#F1F0F0",
            // borderWidth: 1,
            // border: 1px solid #F1F0F0
            borderRadius: 10,
          }}
        >
          <View className=" w-[126px] h-[126px] mt-3 rounded-full">
            <Image
              source={require("../../../../../../assets/images/person2.png")}
              style={{
                width: "100%",
                height: "100%",
                //   borderRadius: 100,
              }}
            />
          </View>
          <View>
            <Text className="text-[15px] font-[500] font-[Archivo] leading-[16px] my-4">
              Toyota RAV - Yamaha
            </Text>
            <View className="h-[360px] border-dashed border-[.5px] p-5">
              <FleetDetails />
            </View>
          </View>
          <View className="">
            <Text className="text-[12px] font-[700] font-[Archivo] leading-[13px] py-5">
              Capacity Information
            </Text>
            <View className="h-[320px] border-dashed border-[.5px] p-5">
              <CapacityInformation />
            </View>
          </View>
          <View className="py-5">
            <View className="h-[300px] border-dashed border-[.5px] p-5">
              <View className="flex-row items-center my-5">
                <View className=" w-[85px] h-[40px]">
                  <Image
                    source={require("../../../../../../assets/images/car2.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      //   borderRadius: 100,
                    }}
                  />
                </View>
                <View className="ml-3">
                  <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                    Toyota RAV - Yamaha
                  </Text>
                  <Text className=" w-[85px] text-[8px] rounded-full text-[#7065A0] px-[11] py-[3]  bg-[#F2EFFE] font-[500] font-[Archivo] leading-[10px] my-1">
                    KR-SRUDBA
                  </Text>
                </View>
              </View>
              <View className="flex-row items-center">
                <View className=" w-[40px] h-[40px] bg-[#BAAFE9] rounded-full  ">
                  <Image
                    source={require("../../../../../../assets/images/person1.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      //   borderRadius: 100,
                    }}
                  />
                </View>
                <View className="ml-3">
                  <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] mb-1">
                    Softamos
                  </Text>
                  <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                    090765442
                  </Text>
                </View>
              </View>
              <View className="h-0.5 bg-[#F1F0F0]  my-4" />

              <View>
                {pickUpAndDestination.map((item, index) => (
                  <>
                    <View key={index} className=" flex-row relative mb-6">
                      {item.icon}
                      <View className=" ml-1">
                        <Text className="font-[400] text-[11px]  font-[Archivo] ">
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
          <View className="px-4 mb-10">
            <Text className="text-[12px] font-[700] font-[Archivo] leading-[13px] py-5">
              Review
            </Text>

            <Review />
          </View>
        </View>
      </ScrollView>
    </View>
  );
};

export default DriverDetailsComp;
