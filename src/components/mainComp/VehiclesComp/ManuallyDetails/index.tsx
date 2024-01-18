import { View, Text, TouchableOpacity, Image, TextInput } from "react-native";
import React from 'react'
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../../customsComp/Input";

const ManuallyDetails = () => {
  const navigation = useNavigation();

  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="py-6 mb-10 flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
            Details
          </Text>
        </View>
        <View className=" flex-[.90] items-center justify-center relative">
          <View className=" w-[270] h-[281]  justify-center items-center">
            <Image
              source={require("../../../../../assets/images/box_1.png")}
              style={{
                width: "100%",
                height: "100%",
                //   borderRadius: 20,
              }}
            />
          </View>
          <View className="w-[333px] h-[1px] border border-[#C4C4C4] border-dashed absolute top-1" />
          
          <View className="w-[1px] h-[333px] border border-[#C4C4C4] border-dashed absolute left-0" />
          <View className="w-[1px] h-[215px] border border-[#C4C4C4] border-dashed absolute right-28 rotate-45 bottom-[-50]" />
        </View>
        <View className=" h-28 flex-row justify-around  items-end">
          <View>
            <Text className="text-[12px] font-[500] font-[Archivo] leading-normal">
              Length
            </Text>
            <View className="w-[102] h-[50] bg-[#F5F5F5]  rounded-lg">
              <TextInput
                placeholder="Length"
                className=" flex-1  px-[13px] py-[16px]"
              />
            </View>
          </View>
          {/* Breadth */}
          <View>
            <Text className="text-[12px] font-[500] font-[Archivo] leading-normal">
              Breadth
            </Text>
            <View className="w-[102] h-[50] bg-[#F5F5F5]  rounded-lg">
              <TextInput
                placeholder="Breadth"
                className=" flex-1  px-[13px] py-[16px]"
              />
            </View>
          </View>
          {/* height */}
          <View>
            <Text className="text-[12px] font-[500] font-[Archivo] leading-normal">
              height
            </Text>
            <View className="w-[102] h-[50] bg-[#F5F5F5] rounded-lg">
              <TextInput
                placeholder="height"
                className=" flex-1  px-[13px] py-[16px]"
              />
            </View>
          </View>
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
        <CustomButton
          primary
          title="See asset recommendations"
          onPress={() => {
            navigation.navigate("RecommandedVehicle");
          }}
        />
      </View>
    </>
  );
}

export default ManuallyDetails