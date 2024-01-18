import { View, Text, Image, TouchableOpacity } from "react-native";
import React from 'react'
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";


const BookingsOrderSheet = ({ bookingsCloseSheet }) => {

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
    <View className="flex-1 mx-auto  bg-white">
      <View className="mb-5 flex-row items-center justify-between">
        <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
          Order Breakdown
        </Text>
        <TouchableOpacity
          onPress={() => {
            bookingsCloseSheet();
          }}
        >
          <Ionicons name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View
        className="w-[335px] h-[155px] px-[10] py-[16] my-[20px]"
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
        <View>
          <View className=" w-[241px] h-[53px] flex-row items-center self-center ">
            <View className=" w-[75px] h-[53px]">
              <Image
                source={require("../../../../../../assets/images/home-img.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 10,
                }}
              />
            </View>
            <View className="mx-3">
              <Text className="font-[500] text-[12px]  font-[Archivo] leading-[13px] my-2">
                A bag of Rice | 40kg
              </Text>
              <Text className="font-[500] text-[10px]  font-[Archivo] leading-[10px]">
                2kg | Qty: 3
              </Text>
            </View>
          </View>

          <View className=" w-[241px] h-[53px] flex-row items-center self-center my-4 ">
            <View className=" w-[105px] h-[48px]">
              <Image
                source={require("../../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  //   borderRadius: 10,
                }}
              />
            </View>
            <View className="mx-3">
              <Text className="font-[500] text-[12px]  font-[Archivo] leading-[13px] my-2">
                Toyota RAV - Yamaha
              </Text>
            </View>
          </View>
        </View>
      </View>
      <View
        className="w-[335px] h-[112px] px-[10] py-[16]"
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
        <View className="h-[80px]">
          {pickUpAndDestination.map((item, index) => (
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
      <View>
        <Text className="font-[700] text-[14px]  font-[Archivo] leading-[15] my-5">
          Driver’s Contact
        </Text>
        <View className="w-[210px] flex-row items-center justify-around">
          <View className="w-[59px] h-[59]">
            <Image
              source={require("../../../../../../assets/images/home-img.png")}
              style={{
                width: "100%",
                height: "100%",
                borderRadius: 100,
              }}
            />
          </View>
          <View>
            <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
              Olunloyo Walai
            </Text>
            <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
              +23481992000222
            </Text>
          </View>
        </View>
        <View>
          <View className="h-[33px] w-[126px] bg-[#F2EFFE] items-center justify-center rounded-full my-5">
            <Text className="  text-[12px]  text-[#7065A0] font-[500] font-[Archivo] leading-[13px]">
              Trip Information
            </Text>
          </View>
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
  );
};

export default BookingsOrderSheet