import { View, Text, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";

const FingerPrintSuccess = () => {
  const navigation = useNavigation();
  return (
    <View className="flex-1 bg-white p-6">
      <View className="py-6 mb-5 flex-row items-center">
        <TouchableOpacity
          className="mr-4"
          onPress={() => {
            navigation.navigate("SettingsScreen");
          }}
        >
          <AntDesign name="close" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View className=" flex-1 justify-center items-center">
        <View className=" w-[158px] h-[158px] rounded-full ">
          <Image
            source={require("../../../../../assets/images/sendsuccess.gif")}
            style={{
              width: "100%",
              height: "100%",
              //   borderRadius: 100,
            }}
          />
        </View>

        <View className=" w-[187px] h-[44px]">
          <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px] text-center">
            Fingerprint Done
          </Text>
        </View>
        <View className=" w-[259px] h-[37px]">
          <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] text-center">
            You have successfully done your fingerprint
          </Text>
        </View>
      </View>
    </View>
  );
};

export default FingerPrintSuccess;
