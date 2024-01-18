import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SendMoneyBeneficiaries = () => {
  const navigation = useNavigation();

  const beneficiariesData = [
    {
      image: require("../../../../../../../assets/images/uba.png"),
      name: "Ogunsua Gabriel",
      acctNumber: "02233212123",
    },
    {
      image: require("../../../../../../../assets/images/gtb.png"),
      name: "Ogunsua Gabriel",
      acctNumber: "02233212123",
    },
    {
      image: require("../../../../../../../assets/images/kuda.png"),
      name: "Ogunsua Gabriel",
      acctNumber: "02233212123",
    },
  ];

  return (
    <View className="flex-1 bg-white p-6">
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
          Beneficiaries
        </Text>
      </View>
      <View className="mx-auto">
        {beneficiariesData.map((item, index) => (
          <TouchableOpacity className="w-[335px] h-[45px] bg-[#F2EFFE] rounded-lg px-[14px] py-[8px] flex-row justify-between items-center my-1" key={index}>
            <View className=" flex-row items-center">
              <View className=" w-[29px] h-[29px] rounded-full bg-[#007FFF]">
                <Image
                  source={item.image}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
              <Text className="text-[11px] font-[500] font-[SwitzerVariable] leading-normal mx-3">
                {item.name}
              </Text>
            </View>
            <View>
              <Text className="text-[11px] font-[600] font-[SwitzerVariable] leading-normal">
                {item.acctNumber}
              </Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
    </View>
  );
};

export default SendMoneyBeneficiaries;
