import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import HireBreakDownSheet from "../HireBreakDown";

const VehicleSeeOrderComp = ({
  VehiclesData,
  openSeeOrderSheet,
  height,
  SeeOrderheetRef,
  closeSeeOrderSheet,
  pickUpAndDestination,
  tripInformation,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <View className=" flex-1 py-10 px-6 bg-white">
        <View className="flex-row items-center pt-2 justify-between">
          <Text className="text-[28px] text-[#000]  font-[600] font-[Archivo] leading-[30.46px]">
            Vehicles
          </Text>
          <TouchableOpacity>
            <AntDesign name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className="mt-5">
          <Text className="text-[12px] font-[700] font-[Archivo] leading-[23px]">
            Don’t know the right asset for your goods?{" "}
            {/* <Text className="text-[12px] font-[400] text-[#FF776C] font-[Archivo] leading-[23px]">
              Try it manually here
            </Text> */}
          </Text>
        </View>

        <View>
          <FlatList
            className=" mx-auto mt-8"
            showsVerticalScrollIndicator={false}
            numColumns={2}
            data={VehiclesData}
            renderItem={({ item }) => (
              <TouchableOpacity
                className="w-[163px] h-[232px] px-[16px] py-[10px] m-1 border border-[#F1F0F0] rounded-[10px]"
                style={{
                  shadowColor: "rgba(0, 0, 0, 0.05)",
                  shadowOffset: { width: 0, height: 1 },
                  shadowRadius: 10,
                  elevation: 3,
                }}
                onPress={() => {
                  openSeeOrderSheet();
                }}
              >
                <View className=" p-2">
                  <View className="w-[140] h-[81] p-2">
                    <Image
                      source={require("../../../../../assets/images/car1.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        //   borderRadius: 100,
                      }}
                    />
                  </View>
                  <View className="h-[58px] ">
                    <View className="w-[115px] h-[35px] my-3">
                      <Text className="text-[11px]  font-[500] font-[Archivo] leading-[13px]">
                        Toyota RAV - Yamaha
                      </Text>
                      <View className="h-[15px] w-[80px] bg-[#F2EFFE] items-center justify-center rounded-full">
                        <Text className="  text-[10px]  text-[#7065A0] font-[500] font-[Archivo] leading-[10px]">
                          KR-SRUDBA
                        </Text>
                      </View>
                    </View>
                    <View className=" flex-row justify-around items-center">
                      <Text className="text-[10px] text-[#007FFF]  font-[500] font-[Archivo] leading-[10px]">
                        6 Seats{" "}
                      </Text>
                      <View className=" h-3 w-0.5 bg-[#505050]" />
                      <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px]">
                        Sienna{" "}
                      </Text>
                      <View className=" h-3 w-0.5 bg-[#505050]" />
                      <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px]">
                        Ford
                      </Text>
                    </View>
                  </View>

                  <TouchableOpacity className="h-[33px] bg-[#F2EFFE] justify-center items-center rounded-full my-5">
                    <Text className="text-[12px] text-[#7065A0] font-[500] font-[Archivo] leading-[12px]">
                      On Route
                    </Text>
                  </TouchableOpacity>
                </View>
              </TouchableOpacity>
            )}
          />
        </View>
      </View>
      <CustomBottomSheet
        height={height}
        ref={SeeOrderheetRef}
        message={
          <HireBreakDownSheet
            pickUpAndDestination={pickUpAndDestination}
            closeSeeOrderSheet={closeSeeOrderSheet}
            tripInformation={tripInformation}
          />
        }
      />
    </>
  );
};

export default VehicleSeeOrderComp;
