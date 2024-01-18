import { View, Text, TouchableOpacity, TextInput, ScrollView } from "react-native";
import React from "react";
import { AntDesign, MaterialIcons, Ionicons } from "@expo/vector-icons";
import CustomInput from "../../../customsComp/Input";

const TransactionDisputeSheet = ({ disputeCloseSheet }) => {
  return (
    <>
      <View className="flex-1 p-[20px]  bg-white">
        <View className=" flex-row justify-between">
          <Text className="text-[20px]   font-[500] font-[Archivo] leading-[21px]">
            Raise a Dispute
          </Text>
          <TouchableOpacity
            onPress={() => {
              disputeCloseSheet();
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView className=" flex-1">
          <CustomInput whiteBg label="Transaction ID" placeholder="Jane" />
          <CustomInput
            whiteBg
            label="Type of Dispute"
            placeholder="Select"
            iconPostion="right"
            icon={
              <TouchableOpacity>
                <MaterialIcons name="arrow-drop-down" size={24} color="black" />
              </TouchableOpacity>
            }
          />
          <View>
            <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
              Attach Evidence
            </Text>
            <View className=" w-[336px] h-[102px] border border-dashed mx-auto">
              <TouchableOpacity className=" w-[135px] h-[105px] px-[111px] py-[25]  justify-center">
                <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13] text-center w-[149px]">
                  Drop your file here to upload or select from storage
                </Text>
              </TouchableOpacity>
            </View>
          </View>
          <CustomInput whiteBg label="Date" placeholder="Date" />
          <Text className="font-[500] text-[12px] font-[Archivo] leading-normal">
            Message
          </Text>
          <View className="w-[335px] h-[148px] border border-[#E8E8E8] rounded-lg mx-auto">
            <TextInput
              placeholder="Message"
              multiline
              className=""
            />
          </View>
        </ScrollView>
      </View>
      <View className=" items-center justify-center bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/100">
        <TouchableOpacity
          className="w-[335px] h-[35px] px-[20px] py-[10px] bg-[#BAAFE9] justify-center items-center rounded-[50px]"
          // onPress={() => {
          //   navigation.navigate("OrderCompletedScreen");
          // }}
        >
          <Text className="font-[500] text-[12px] font-[Archivo] leading-[13px] text-white">
            Submit Dispute
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default TransactionDisputeSheet;
