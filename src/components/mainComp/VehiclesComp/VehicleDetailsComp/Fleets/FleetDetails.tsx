import { View, Text, Image } from "react-native";
import React from 'react'

export const FleetDetails = ({detailsData}) => {
  return (
    <>
      {detailsData.map((d, index) => (
        <>
          <View className="flex-row justify-between" key={d.index}>
            <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
              {d.name}
            </Text>
            {d.name === "Asset Code" ? (
              <Text className="w-[85px] text-[10px] rounded-full text-[#7065A0] p-[8]  bg-[#F2EFFE] font-[500] font-[Archivo] leading-[10px]">
                {d.Desc}
              </Text>
            ) : (
              <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                {d.Desc}
              </Text>
            )}
          </View>
          <View className="h-0.5 bg-[#F1F0F0]  my-4" />
        </>
      ))}
    </>
  );
}
export const CapacityInformation = ({ capacityInfo }) => {
  return (
    <>
      {capacityInfo.map((d, index) => (
        <>
          <View className="flex-row justify-between items-center" key={d.index} >
            <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
              {d.name}
            </Text>
            {d.aprovedIcon}
            <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
              {d.preview}
            </Text>

          </View>
          <View className="h-0.5 bg-[#F1F0F0]  my-4" />
        </>
      ))}
    </>
  );
};

export const Review = ({ reviewData }) => {
  return (
    <>
      {reviewData.map((item, index) => (
        <View
          className="h-[100] bg-[#F9F9F9] py-3 px-4 rounded-lg my-2"
          key={index}
        >
          <View className=" flex-row justify-between">
            <View className=" flex-row justify-between items-center">
              <View className=" w-[40px] h-[40px] bg-[#BAAFE9] rounded-full ">
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
              <View className="mx-3">
                <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] my-1">
                  {item.name}
                </Text>
                <Text className="text-[10px] font-[500] font-[Archivo] leading-[10px]">
                  {item.date}
                </Text>
              </View>
            </View>
            <View>
              {item.ratings}
            </View>
          </View>
          <Text className="mx-5 my-2 text-[10px] font-[500] font-[Archivo] leading-[10px]">
            {item.text}
          </Text>
        </View>
      ))}
    </>
  );
};