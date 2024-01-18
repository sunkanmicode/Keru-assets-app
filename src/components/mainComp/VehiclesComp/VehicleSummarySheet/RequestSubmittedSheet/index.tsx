import { View, Text, Image } from "react-native";
import React from 'react'
import { CustomButton } from '../../../../customsComp/Input';

const RequestSubmittedSheet = () => {
  return (
    <View className=" flex-1 bg-white p-6">
      <View className="items-center flex-[.95] justify-center">
        <View className="w-[180px] h-[180] ">
          <Image
            source={require("../../../../../../assets/images/account-created.gif")}
            style={{ width: "100%", height: "100%" }}
          />
        </View>
        <View>
          <Text className="font-[Archivo] font-[700] text-[24px] leading-[37px] text-center">
            Congratulations
          </Text>
          <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px] text-center">
            Your hiring request has been submitted
          </Text>
        </View>
      </View>
      {/* <View>
        <CustomButton
          primary
          title="Save"
          // onPress={() => {
          //   navigation.navigate("Login");
          // }}
        />
      </View> */}
    </View>
  );
}

export default RequestSubmittedSheet