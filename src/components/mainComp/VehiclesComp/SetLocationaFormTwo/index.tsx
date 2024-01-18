import React from "react";
import { View, Text, Image, ScrollView, TouchableOpacity } from "react-native";
import StepIndicator from "react-native-step-indicator";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import Checkbox from "expo-checkbox";
import CustomInput, { CustomButton } from "../../../customsComp/Input";

const labels = [
  "Cart",
  "Delivery Address",
  "Order Summary",
  "Payment Method",
  "Track",
];


const SetLocationFormTwo = () => {
      const [isChecked, setChecked] = React.useState(false);
    const [currentPosition, setCurrentPosition]= React.useState(0)
    const pickUpAndDestination = [
      {
        icon: <Octicons name="dot-fill" size={12} color="#009B5A" />,
        venue: "Festac Access Rd Lagos, LA, Nigeria",
        time: "Tue, Mar 28 2023 | 11:01:00",
      },
      {
        icon: <Octicons name="dot-fill" size={12} color="red" />,
        venue: "Festac Access Rd Lagos, LA, Nigeria",
        time: "Tue, Mar 28 2023 | 11:01:00",
      },
    ];

    const data=[
        {
            label:"Öut for delivery" ,
            time:"12th june 2024"
        },
        {
            label:" delivered" ,
            time:"20th june 2024"
        },
    ]
    
  return (
    <View className="mx-auto">
      <View
        className="w-[332px] h-[122px] px-[10] py-[16]  flex-row justify-between "
        style={{
          shadowColor: "rgba(0, 0, 0, 0.05)",
          shadowOffset: { width: 0, height: 1 },
          shadowRadius: 10,
          elevation: 1,
          borderColor: "#F1F0F0",
          borderWidth: 1,
          // border: 1px solid #F1F0F0
          borderRadius: 10,
        }}
      >
        <View className=" w-[110px] h-[54px] self-center">
          <Image
            source={require("../../../../../assets/images/car2.png")}
            style={{
              width: "100%",
              height: "100%",
              //   borderRadius: 100,
            }}
          />
        </View>
        <View className="w-[190px]">
          {pickUpAndDestination.map((item, index) => (
            <>
              <View key={index} className=" flex-row relative mb-6">
                {item.icon}
                <View className=" ml-1">
                  <Text className="font-[400] text-[11px]  font-[Archivo] ">
                    {item.venue}
                  </Text>
                  <Text className="font-[400] text-[10px]  font-[Archivo] leading-[10]">
                    {" "}
                    {item.time}
                  </Text>
                </View>
              </View>
              <View className="h-[28px] w-[1px]  bg-[#CCCBCB] absolute left-0.5 top-5" />
            </>
          ))}
        </View>
      </View>
      <ScrollView>
        <CustomInput primary
          name="nameOfGood"
          placeholder="janedoe@xxx.com"
          label="Name of Goods"
        />
        <CustomInput primary
          name="nameOfGood"
          placeholder="Weight of Goods"
          label="Name of Goods"
        />
        <View>
          <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
            Image of Goods
          </Text>
          <View className=" w-[336px] h-[157px] border border-dashed">
            <TouchableOpacity className=" w-[135px] h-[105px] m-auto">
              <View className=" w-[66px] h-[66px] bg-[#EDE9FF] m-auto rounded-full justify-center items-center">
                <Ionicons
                  name="cloud-upload-outline"
                  size={24}
                  color="#BAAFE9"
                />
              </View>

              <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13] text-center">
                Drop your file here to upload or select from storage{" "}
              </Text>
            </TouchableOpacity>
          </View>
        </View>
        <View className=" flex-row mt-6 mb-32 items-center">
          <Checkbox
            // style={styles.checkbox}
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#4630EB" : "#D9D9D9"}
          />
          <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13] mx-2">
            Set Delivery Date{" "}
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SetLocationFormTwo;
