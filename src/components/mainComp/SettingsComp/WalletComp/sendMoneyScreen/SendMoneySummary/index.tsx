import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../../../../customsComp/Input";


const SendMoneySummary = () => {
    const navigation = useNavigation();

  return (
    <>
      <View className="flex-1 bg-white  p-6">
        <View className="py-6 mb-5 flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px]">
            Summary
          </Text>
        </View>
        <View>
          <View className="my-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Bank
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                Gtbank
              </Text>
              <View className=" w-[29px] h-[29px]">
                <Image
                  source={require("../../../../../../../assets/images/gtb.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Name
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                Softamos Okiki
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Account Number
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                09088661122
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Amount
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                N3000
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
              Service Charge
            </Text>
            <View className=" flex-row items-center justify-between mt-2">
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                N100
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>

          <View className=" mb-[27px]">
            <View className=" flex-row items-center justify-between ">
              <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
                Total
              </Text>
              <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
                N3100
              </Text>
            </View>
            <View className=" h-0.5 bg-[#F5F5F5]" />
          </View>
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Send Funds"
          onPress={() => {
            navigation.navigate("SendMoneyEnterPin");
          }}
        />
      </View>
    </>
  );
}

export default SendMoneySummary