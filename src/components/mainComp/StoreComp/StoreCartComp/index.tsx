import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const StoreCartComp = () => {
  const navigation = useNavigation();
  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="flex-row py-6 mb-10 items-center justify-between">
          <View className=" flex-row items-center">
            <TouchableOpacity
              className="mr-4"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
              Cart
            </Text>
          </View>
          <View />
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="mx-auto">
          <View className=" flex-row  w-[335px] h-[113px] border rounded-2xl border-[#F1F0F0]">
            <View className=" w-[118px] h-[48px] self-center">
              <Image
                source={require("../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  // borderRadius: 100,
                }}
              />
            </View>
            <View className=" ">
              <View className=" w-[200px] h-[41px] my-2 flex-row items-center justify-between">
                <View>
                  <View className="flex-row items-center">
                    <Text className="font-[500] text-[12px] font-[Archivo] leading-[13.06px] my-3">
                      Power Steering Pumps 2
                    </Text>
                    <TouchableOpacity className="mx-10">
                      <AntDesign name="delete" size={15} color="#FF0000" />
                    </TouchableOpacity>
                  </View>
                  <Text className="font-[600] text-[10px] font-[Archivo] leading-[10px]">
                    Sold by <Text className="text-[#007FFF]"> Automobile</Text>
                  </Text>
                </View>
              </View>
              <View className=" flex-row justify-between items-center py-5">
                <Text className="font-[700] text-[16px] font-[Archivo] leading-[17px]">
                  N40,000
                </Text>
                <View className=" flex-row w-[77px] h-[22px] border rounded border-[#D3D3D3] justify-around">
                  <TouchableOpacity className="flex-row items-center">
                    <AntDesign name="minus" size={13} color="black" />
                    <View className="w-[1px] h-[20px] bg-[#D3D3D3] " />
                  </TouchableOpacity>

                  <Text className="font-[500] text-[13px] font-[Archivo] leading-[20px]">
                    1
                  </Text>

                  <TouchableOpacity className=" flex-row items-center">
                    <View className="w-[1px] h-[20px] bg-[#D3D3D3]" />
                    <AntDesign name="plus" size={13} color="black" />
                  </TouchableOpacity>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
        <View className="w-[336px] h-[64px]  bg-[#F2EFFE] flex-row justify-between items-center px-2 rounded-[10px] mx-auto">
          <Text className="font-[500] text-[14px] font-[Archivo] leading-[15.32px] ">
            Total Order
          </Text>
          <Text className="font-[600] text-[26px] font-[Archivo] leading-[28.32px]  ">
            N30,000
          </Text>
        </View>
      </View>

      <View className="bg-white">
        <View className=" flex-row  justify-between items-center bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/40">
          <TouchableOpacity className="w-[169px] h-[35px] px-[20px] py-[10px] bg-[#D3D3D3] justify-center items-center rounded-[5px]">
            <Text className="font-[500] text-[12px] font-[Archivo] leading-[13px]">
              Continue Shopping
            </Text>
          </TouchableOpacity>
          <TouchableOpacity
            className="w-[169px] h-[35px] px-[20px] py-[10px] bg-[#BAAFE9] justify-center items-center rounded-[50px]"
            onPress={() => {
              navigation.navigate("StoreCheckoutScreen");
            }}
          >
            <Text className="font-[500] text-[12px] font-[Archivo] leading-[13px] text-white">
              Check out
            </Text>
          </TouchableOpacity>
        </View>
      </View>
    </>
  );
};

export default StoreCartComp;
