import { View, Text, TouchableOpacity, FlatList, Image } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const StoreCat = ({ storeData }) => {
  const naviagtion = useNavigation()
  return (
    <View>
      <FlatList
        className=" mx-auto mt-4 mb-20"
        showsVerticalScrollIndicator={false}
        numColumns={2}
        data={storeData}
        renderItem={({ item }) => (
          <TouchableOpacity
            className="w-[163px] h-[206px] px-[10px] py-[16px] border m-1 border-[#F1F0F0] rounded-2xl "
            onPress={() => {
              naviagtion.navigate("DetailsScreen");
            }}
          >
            <View className=" w-[143px] h-[71px]">
              <Image
                source={require("../../../../../assets/images/car1.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                }}
              />
            </View>
            <Text className="w-[133px] font-[500] text-[12px] font-[Archivo] leading-[13.06px] py-2 ">
              Power Steering Pumps 2
            </Text>
            <View className="h-0.5 bg-[#DCDCDC] mb-2" />
            <View className="flex-row justify-between items-center py-2">
              <Text className="font-[700] text-[16px] font-[Archivo] leading-[17.06px]">
                N40.000
              </Text>
              <View className="w-[32px] h-[21px] bg-[#FFF0EE] p-[6px] rounded-full">
                <Text className="font-[500] text-[8px] font-[Archivo] leading-[8px] text-[#FF8376]">
                  -30%
                </Text>
              </View>
            </View>
            <Text className="font-[600] text-[10px] font-[Archivo] leading-[10px]">
              Sold by <Text className="text-[#007FFF]"> Automobile</Text>
            </Text>
          </TouchableOpacity>
        )}
      />
    </View>
  );
};

export default StoreCat