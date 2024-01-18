import { View, Text, Image, TouchableOpacity } from "react-native";
import React from "react";
import { FlatList } from "react-native";


const QuickLink = ({ quicklinkData }) => {
  return (
    <>
      <FlatList
        numColumns={4}
        data={quicklinkData}
        renderItem={({ item }) => (
          <TouchableOpacity
            className=""
            onPress={item.onPress}
          >
            <View className=" items-center mb-10 mr-8">
              <View className="w-[36] h-[36] bg-[#F2EFFE] rounded-full p-[8px] ">
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: 100,
                  }}
                />
              </View>
              <Text className="text-[14px] text-center pt-2 font-[500] font-[Archivo] leading-normal">
                {item.name}
              </Text>
            </View>
          </TouchableOpacity>
        )}
      />
    </>
  );
};

export default QuickLink;
