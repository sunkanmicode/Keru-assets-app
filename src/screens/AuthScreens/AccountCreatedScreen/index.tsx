import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../../components/customsComp/Input";

const AccountCreatedScreen = () => {
     const navigation = useNavigation();
  return (
    <View className=" flex-1 bg-white p-6">
      <View className="items-center flex-[.95] justify-center">
        <View className="w-[180px] h-[180] bg-[#BAAFE9]">
          <Image
            source={require("../../../../assets/images/account-created.gif")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View>
          <Text className="font-[Archivo] font-[700] text-[24px] leading-[37px]">
            Account Created
          </Text>
          <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px] text-center">
            Welcome onboard
          </Text>
        </View>
      </View>
      <View>
        <CustomButton primary title="Login" onPress={()=>{
            navigation.navigate("Login")
        }}/>
      </View>

    </View>
  );
}

export default AccountCreatedScreen