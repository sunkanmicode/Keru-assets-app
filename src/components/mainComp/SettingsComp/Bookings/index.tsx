import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from "react";
import { AntDesign, Ionicons, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import BookingsOrderSheet from "./BookingsSheet/BookingsOrderSheet";

const Bookings = () => {
  const navigation = useNavigation();


    const bookingsSheetRef = React.useRef(null);

    const height = 775;

    const bookingsCloseSheet = () => {
      if (bookingsSheetRef.current) {
        bookingsSheetRef.current.close();
      }
    };
    const bookingsOpenSheet = () => {
      if (bookingsSheetRef.current) {
        bookingsSheetRef.current.open();
      }
    };



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
            Bookings
          </Text>
        </View>
        <ScrollView>
          <View className=" h-[235px] p-[24px] border border-[#CCCBCB] rounded-[10px]">
            <TouchableOpacity
              className="h-[67px] flex-row justify-between p-2 my-2"
              onPress={() => {
                bookingsOpenSheet();
              }}
            >
              <View className=" flex-row items-center">
                <View className=" w-[61px] h-[30px]">
                  <Image
                    source={require("../../../../../assets/images/car2.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      //   borderRadius: 100,
                    }}
                  />
                </View>
                <View className="mx-2">
                  <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                    Toyota RAV - Yamaha
                  </Text>
                  <Text className=" w-[85px] text-[8px] rounded-full text-[#FF776C] px-[11] py-[3]  bg-[#FFEBEB] font-[500] font-[Archivo] leading-[10px] my-1">
                    KR-SRUDBA
                  </Text>
                  <Text className="text-[8px] font-[500] font-[Archivo] leading-[13px]">
                    KR-B37NUG | Lagos | Assigned
                  </Text>
                </View>
              </View>

              <View className="w-[60px] h-[15px] px-[5px] py-[2px] rounded-full bg-[#F0FFEB]">
                <Text className="text-[10px] font-[500] font-[Archivo] leading-[10px] text-[#19C220]">
                  ACTIVE
                </Text>
              </View>
            </TouchableOpacity>

            <View className="h-0.5 bg-[#F1F0F0] my-2" />
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

          {/* ################################################# */}
          <View className=" h-[235px] p-[24px] border border-[#CCCBCB] rounded-[10px] mt-5">
            <TouchableOpacity
              className="h-[67px] flex-row justify-between p-2 my-2"
              onPress={() => {
                navigation.navigate("VehicleDetailsScreen");
              }}
            >
              <View className=" flex-row items-center">
                <View className=" w-[61px] h-[30px]">
                  <Image
                    source={require("../../../../../assets/images/car2.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      //   borderRadius: 100,
                    }}
                  />
                </View>
                <View className="mx-2">
                  <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                    Toyota RAV - Yamaha
                  </Text>
                  <Text className=" w-[85px] text-[8px] rounded-full text-[#FF776C] px-[11] py-[3]  bg-[#FFEBEB] font-[500] font-[Archivo] leading-[10px] my-1">
                    KR-SRUDBA
                  </Text>
                  <Text className="text-[8px] font-[500] font-[Archivo] leading-[13px]">
                    KR-B37NUG | Lagos | Assigned
                  </Text>
                </View>
              </View>

              <View className="w-[60px] h-[15px] px-[5px] py-[2px] rounded-full bg-[#F0FFEB]">
                <Text className="text-[10px] font-[500] font-[Archivo] leading-[10px] text-[#19C220]">
                  ACTIVE
                </Text>
              </View>
            </TouchableOpacity>

            <View className="h-0.5 bg-[#F1F0F0] my-2" />
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
        </ScrollView>
      </View>
      <CustomBottomSheet
        ref={bookingsSheetRef}
        height={height}
        message={<BookingsOrderSheet bookingsCloseSheet={bookingsCloseSheet} />}
      />
    </>
  );
};

export default Bookings;
