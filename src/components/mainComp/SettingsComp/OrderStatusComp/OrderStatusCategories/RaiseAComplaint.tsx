import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from 'react'
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import CustomInput, { CustomButton } from "../../../../customsComp/Input";


const RaiseAComplaint = ({ complaintCloseSheet }) => {
      const [isChecked, setChecked] = React.useState(false);

  return (
    <>
      <View className="flex-1 m-auto bg-white">
        <View className="mb-5 flex-row items-center justify-between">
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
            Order Breakdown
          </Text>
          <TouchableOpacity
            onPress={() => {
              complaintCloseSheet();
            }}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View className=" my-4">
          <View className=" w-[335px] h-[94px]">
            <Text className="font-[600] text-[14px]  font-[Archivo] leading-[15px] ">
              Confirmation of Goods
            </Text>
            <View className=" flex-row  mt-8">
              <Checkbox
                // style={styles.checkbox}
                style={{ borderRadius: 4 }}
                value={isChecked}
                onValueChange={setChecked}
                color={isChecked ? "#BAAFE9" : "#D9D9D9"}
              />
              <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13] mx-2">
                I confirm that my goods has been delivered to me
              </Text>
            </View>
          </View>
          <View className=" h-0.5 bg-[#D9D9D9]" />
          <View>
            <CustomInput primary label="Name" name="name" />

            <CustomInput primary label="Subject" name="subject" />

            <View className=" w-[335px] h-[148px] mt-6">
              <Text className="mb-2 font-[400] text-[12px]  font-[Archivo] leading-[13]">
                Message
              </Text>
              <View className="w-[335px] h-[127px] bg-[#F5F5F5] rounded-md">
                <TextInput multiline className=" p-3 justify-start" />
              </View>
            </View>
          </View>
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Submit Complaint"
        //   onPress={() => {
        //     complaintOpenSheet();
        //   }}
        />
      </View>
    </>
  );
};

export default RaiseAComplaint