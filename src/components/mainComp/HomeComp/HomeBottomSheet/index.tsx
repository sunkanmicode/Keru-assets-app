import { View, Text, TouchableOpacity,ScrollView, Image } from "react-native";
import React from 'react'
import { CustomButton } from "../../../customsComp/Input";
import { useNavigation } from "@react-navigation/native";

const HomeBottomSheet = () => {
  const navigation = useNavigation()


const AvailableVehicles = [
  {
    image: require("../../../../../assets/images/car2.png"),
    vehicleName: " Toyota RAV - Yamaha",
    vehicleMode: "KR-SRUDBA",
    NoOfSeat: "6 Seats",
    onPress: (item:object) => {
      navigation.navigate("VehicleDetailsScreen",{item} );
    },
  },
  {
    image: require("../../../../../assets/images/car2.png"),
    vehicleName: " Toyota RAV - Yamaha",
    vehicleMode: "KR-SRUDBA",
    NoOfSeat: "6 Seats",
    onPress: () => {},
  },
];


  return (
    <ScrollView className="flex-1 p-6 bg--white">
      <View className=" flex-row items-center justify-between">
        <Text>Available Vehicles</Text>
        <View />
      </View>
      <View className="h-0.5 bg-[#F1F0F0] mt-4 mb-7" />
      {AvailableVehicles.map((item) =>{
        return (
          <View>
            <TouchableOpacity className="flex-row justify-between pb-3">
              <View className="flex-row">
                <View className="w-[100px] h-[46px]">
                  <Image
                    source={item.image}
                    style={{
                      width: "100%",
                      height: "100%",
                      // borderRadius: 100,
                    }}
                  />
                </View>
                <View className="mx-3">
                  <Text className="text-[14px] font-[500] font-[Archivo] leading-[15px]">
                   {item.vehicleName}
                  </Text>
                  <Text className=" w-[85px] text-[10px] rounded-full text-[#7065A0] p-[8]  bg-[#F2EFFE] font-[500] font-[Archivo] leading-[10px]">
                    {item.vehicleMode}
                  </Text>
                </View>
              </View>
              <View>
                <Text className="text-[10px] text-[#007FFF] font-[500] font-[Archivo] leading-[10px]">
                  {item.NoOfSeat}
                </Text>
              </View>
            </TouchableOpacity>
            <CustomButton primary title="Hire Asset" onPress={()=>{
              item.onPress(item)
            }} />
            <View className="h-0.5 bg-[#F1F0F0] mt-4 mb-7" />
          </View>
        );
      })}
      
      {/* Another Line
      <TouchableOpacity className="flex-row justify-between pb-3">
        <View className="flex-row">
          <View className="w-[100px] h-[46px]">
            <Image
              source={require("../../../../../assets/images/car2.png")}
              style={{
                width: "100%",
                height: "100%",
                // borderRadius: 100,
              }}
            />
          </View>
          <View className="mx-3">
            <Text className="text-[14px] font-[500] font-[Archivo] leading-[15px]">
              Toyota RAV - Yamaha
            </Text>
            <Text className=" w-[85px] text-[10px] rounded-full text-[#7065A0] p-[8]  bg-[#F2EFFE] font-[500] font-[Archivo] leading-[10px]">
              KR-SRUDBA
            </Text>
          </View>
        </View>
        <View>
          <Text className="text-[10px] text-[#007FFF] font-[500] font-[Archivo] leading-[10px]">
            6 Seats
          </Text>
        </View>
      </TouchableOpacity>
      <CustomButton primary title="Hire Asset" />
      <View className="h-0.5 bg-[#F1F0F0] mt-4 mb-7" />
      {/* Another Line */}
    
    </ScrollView>
  );
}

export default HomeBottomSheet