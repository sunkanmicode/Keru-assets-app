import { View, Text, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { sliderdata } from "../sliderdata";

const { width, height } = Dimensions.get("window");

const Footer = ({ currentSlideIndex, goNextSlide }) => {
      const navigation = useNavigation();
  return (
    <View className={`{ h-${height * 0.25} mt-6  justify-between p-[20px]}`}>
      <View className="flex-row justify-center mt-[10px]">
        {sliderdata.map((_, index) => (
          <View
            key={index}
            className={`h-[7px] w-[10px] mx-[3px] rounded-full bg-[#D9D9D9] ${
              currentSlideIndex === index && "bg-[#BAAFE9] w-[25px]"
            }`}
          />
        ))}
      </View>
      <TouchableOpacity
        className="w-[264px] h-[55px] bg-[#BAAFE9] px-[10px] py-[20px] justify-center items-center mt-[50px] rounded-[50px] self-center"
        onPress={goNextSlide}
      >
        <Text className="text-[14px] font-[500] font-[Archivo] leading-[18px] text-white">
          Next
        </Text>
      </TouchableOpacity>
      <TouchableOpacity className="mt-[30px]">
        <Text className="text-[12px] font-[400] font-[Archivo] leading-[18px] self-center underline decoration-solid" onPress={()=>{
            navigation.navigate("Login")
        }}>
          Skip onboarding and login
        </Text>
      </TouchableOpacity>
    </View>
  );
};

export default Footer;
