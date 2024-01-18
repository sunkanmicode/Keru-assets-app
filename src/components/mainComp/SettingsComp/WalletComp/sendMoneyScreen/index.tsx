import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomInput, { CustomButton } from "../../../../customsComp/Input";

const SendMoneyScreen = () => {
  const navigation = useNavigation();

  const beneficiariesData = [
    {
      img: require("../../../../../../assets/images/gtb.png"),
      name: " Ogunsua Gabriel",
    },
    {
      img: require("../../../../../../assets/images/kuda.png"),
      name: " Ogunsua Gabriel",
    },
    {
      img: require("../../../../../../assets/images/uba.png"),
      name: " Ogunsua Gabriel",
    },
  ];

  return (
    <>
      <View className="flex-1 bg-white mx-auto p-6">
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
            Send Money
          </Text>
        </View>
        <View className=" flex-row items-center justify-between">
          <Text className="text-[14px] font-[500] font-[Archivo] leading-[15px]">
            Beneficiaries
          </Text>
          <TouchableOpacity>
            <Text
              className="text-[11px] font-[700] font-[Archivo] leading-[11px] text-[#007FFF]"
              onPress={() => {
                navigation.navigate("SendMoneyBeneficiaries");
              }}
            >
              See All
            </Text>
          </TouchableOpacity>
        </View>
        <View className=" w-[335px] h-[71px] flex-row justify-between  my-4">
          {beneficiariesData.map((item, index) => (
            <TouchableOpacity
              className=" w-[106px] h-[71px] px-[14px] py-[8px] items-center justify-center rounded-lg bg-[#F2EFFE] "
              key={index}
            >
              <View className=" w-[29px] h-[29px] rounded-full bg-[#007FFF]">
                <Image
                  source={item.img}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
              <Text className="text-[10px] font-[500] font-[SwitzerVariable] w-[90px] leading-[10px]  mt-2">
                {item.name}
              </Text>
            </TouchableOpacity>
          ))}
        </View>
        <ScrollView showsVerticalScrollIndicator={false} className="my-5">
          <Text className="text-[14px] font-[500] font-[Archivo]  leading-[15px]">
            Make a new transfer
          </Text>
          <CustomInput
            primary
            name="bank"
            label="Bank"
            placeholder="select Bank"
          />

          <CustomInput
            primary
            name="AccountNumber"
            label="Account Number"
            placeholder="Account Number"
          />

          <CustomInput
            primary
            name="Amount"
            label="Amount"
            placeholder="Amount"
          />
        </ScrollView>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Send Funds"
          onPress={() => {
            navigation.navigate("SendMoneySummary");
          }}
        />
      </View>
    </>
  );
};

export default SendMoneyScreen;
