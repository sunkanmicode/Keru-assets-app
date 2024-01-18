import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";

const Drivers = () => {
  const navigation = useNavigation()
  const data = [
    {
      image: require("../../../../../assets/images/person1.png"),
      name: " Toyota RAV - Yamaha",
      model: "23 yrs Old",
      class: "ogunsuagabriel@gmail.com | 09099967628",
      status: "ACTIVE",
    },
    {
      image: require("../../../../../assets/images/person1.png"),
      name: " Toyota RAV - Yamaha",
      model: "23 yrs Old",
      class: "ogunsuagabriel@gmail.com | 09099967628",
      status: "ACTIVE",
    },
    {
      image: require("../../../../../assets/images/person1.png"),
      name: " Toyota RAV - Yamaha",
      model: "23 yrs Old",
      class: "ogunsuagabriel@gmail.com | 09099967628",
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
              navigation.navigate("DriverDetailsComp")
            }}
          >
            <View className=" flex-row">
              <View className=" w-[40px] h-[40px] rounded-full">
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
              <View className="mx-2">
                <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                  {item.name}
                </Text>
                <Text className=" w-[85px] text-[8px] rounded-full px-[11] py-[3] font-[500] font-[Archivo] leading-[10px] my-1">
                  {item.model}
                </Text>
                <Text className="text-[8px] font-[500] font-[Archivo] leading-[13px]">
                  {item.class}
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
};

export default Drivers;
