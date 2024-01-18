import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import { CustomButton } from "../../../customsComp/Input";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import { useNavigation } from "@react-navigation/native";
import RequestSubmittedSheet from "./RequestSubmittedSheet";

const VehicleSummarySheet = ({ closeSheet }) => {
  const navigation = useNavigation();
  const [showSummary, setShowSummary] = React.useState(true);

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
    <>
      {showSummary ? (
        <ScrollView
          showsVerticalScrollIndicator={false}
          className="flex-1 mx-auto bg-white "
        >
          <View className="mb-5 flex-row items-center justify-between">
            <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
              Summary
            </Text>
            <TouchableOpacity
              onPress={() => {
                closeSheet();
              }}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
          <View>
            <View
              className="w-[335px] h-[122px] px-[16] py-[10] "
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
              <Text className="text-center text-[12px] font-[500] font-[Archivo] leading-[13px] mb-2">
                Toyota RAV - Yamaha
              </Text>
              <View className=" w-[216px] h-[90px] self-center">
                <Image
                  source={require("../../../../../assets/images/car2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
            </View>
            <View className="mt-5">
              <Text className="font-[600] text-[14px]  font-[Archivo] leading-[15px] mb-4">
                Pickup and Destination Details
              </Text>
              <View className="w-[190px]">
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
              <View className="h-0.5 bg-[#F1F0F0]  my-2" />
              <View className=" flex-row justify-between items-center">
                <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                  Package Image
                </Text>
                <View className=" w-[52px] h-[47px] self-center">
                  <Image
                    source={require("../../../../../assets/images/home-img.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      borderRadius: 100,
                    }}
                  />
                </View>
              </View>
              <View className="h-0.5 bg-[#F1F0F0]  my-4" />
              <View className=" flex-row justify-between items-center">
                <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                  Miles to be Covered
                </Text>
                <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                  5000miles/hour
                </Text>
              </View>
              <View className="h-0.5 bg-[#F1F0F0]  my-5 " />
              <View className=" flex-row justify-between items-center">
                <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                  Package Weight
                </Text>
                <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                  300kg
                </Text>
              </View>
              <View className="h-0.5 bg-[#F1F0F0]  my-5 " />
              <View className=" flex-row justify-between items-center">
                <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                  Package Insurance
                </Text>
                <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                  N1500
                </Text>
              </View>
              <View className="h-0.5 bg-[#F1F0F0]  my-5 " />
              <View>
                <Text className="text-[#434343] font-[600px] text-[14px]  font-[Archivo] leading-[15.53px] ">
                  Total Price
                </Text>
                <View className=" flex-row justify-between items-center my-3">
                  <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13px]">
                    Total Price of Hiring Asset
                  </Text>
                  <Text className="font-[600] text-[16px]  font-[Archivo] leading-[17.41px]">
                    3000NGN
                  </Text>
                </View>
                <Text className="w-[335px] font-[300] text-[10px]  font-[Archivo] leading-[10px] italic">
                  Note: prices are calculated based on the distance and weight
                  of the goods. We calculate based on the distance covered on a
                  trip.
                </Text>
              </View>
            </View>
          </View>
        </ScrollView>
      ) : (
        <RequestSubmittedSheet />
      )}

      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
        {showSummary ? (
          <CustomButton
            primary
            title="Hire Asset"
            onPress={() => {
              setShowSummary(false);
              // requestopenSheet();
            }}
          />
        ) : (
          <CustomButton
            primary
            title="See orders"
            onPress={() => {
              navigation.navigate("VehicleSeeOrderScreen")
            }}
          />
        )}
      </View>
    </>
  );
};

export default VehicleSummarySheet;
