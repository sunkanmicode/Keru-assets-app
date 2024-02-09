import { View, Text, Image, ScrollView,TouchableOpacity } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';

const AllFleets = () => {
    const navigation = useNavigation();

  const data = [
    {
      image: require("../../../../../assets/images/car2.png"),
      name: " Toyota RAV - Yamaha",
      model: "KR-SRUDBA",
      class: "KR-B37NUG | Lagos | Assigned",
      status: "ACTIVE",
    },
    {
      image: require("../../../../../assets/images/car2.png"),
      name: " Toyota RAV - Yamaha",
      model: "KR-SRUDBA",
      class: "KR-B37NUG | Lagos | Assigned",
      status: "ACTIVE",
    },
    {
      image: require("../../../../../assets/images/car2.png"),
      name: " Toyota RAV - Yamaha",
      model: "KR-SRUDBA",
      class: "KR-B37NUG | Lagos | Assigned",
      status: "DISABLED",
    },
  ];
  return (
    <ScrollView>
      {data.map((item, index) => (
        <>
          <TouchableOpacity
            className="h-[67px] flex-row justify-between p-2 my-2"
            key={index}
            onPress={()=>{
              navigation.navigate("VehicleDetailsScreen")
            }}
          >
            <View className=" flex-row">
              <View className=" w-24 h-12 ">
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
                <Text className=" w-[85px] text-[8px] rounded-full text-[#7065A0] px-[11] py-[3]  bg-[#F2EFFE] font-[500] font-[Archivo] leading-[10px] my-1">
                  KR-SRUDBA
                </Text>
                <Text className="text-[8px] font-[500] font-[Archivo] leading-[13px]">
                  KR-B37NUG | Lagos | Assigned
                </Text>
              </View>
            </View>
            {item.status === "ACTIVE" && (
              <View className="w-[60px] h-[15px] px-[5px] py-[2px] rounded-full bg-[#F0FFEB]">
                <Text className="text-[10px] font-[500] font-[Archivo] leading-[10px] text-[#19C220]">
                  ACTIVE
                </Text>
              </View>
            )}
            {item.status === "DISABLED" && (
              <View className="w-[60px] h-[15px] px-[5px] py-[2px] rounded-full bg-[#FFE7D2]">
                <Text className="text-[10px] font-[500] font-[Archivo] leading-[10px] text-[#884100]">
                  DISABLED
                </Text>
              </View>
            )}
          </TouchableOpacity>

          <View className="h-0.5 bg-[#F1F0F0] my-2" />
        </>
      ))}
    </ScrollView>
  );
}

export default AllFleets