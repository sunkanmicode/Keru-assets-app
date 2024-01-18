import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";


const ScanFingerPrint = () => {
      const navigation = useNavigation();
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
      </View>
      <View className=" flex-1 justify-center items-center">
        <View className=" w-[300px] h-[26px]">
          <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px] text-center">
            Place your Index Finger
          </Text>
        </View>
        <View className=" w-[259px] h-[37px] mb-10">
          <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] text-center">
            Enter your PIN to change the fingerprint
          </Text>
        </View>
        <TouchableOpacity className=" w-[158px] h-[158px] rounded-full" onLongPress={()=>{
            navigation.navigate("FingerPrintSuccess")
        }}>
          <Image
            source={require("../../../../../assets/images/Fingerprint.png")}
            style={{
              width: "100%",
              height: "100%",
              //   borderRadius: 100,
            }}
          />
        </TouchableOpacity>
      </View>
    </View>
  );
}

export default ScanFingerPrint