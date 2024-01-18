import { View, Text, Image } from "react-native";
import React from "react";
// import { CustomButton } from "../../../customsComp/Input";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../../../customsComp/Input";

const RequestDriverSuccess = () => {
  const navigation = useNavigation();
  return (
    <>
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
              Fleet Assigned
            </Text>
            <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px] text-center">
              This fleet has been assigned successfully
            </Text>
          </View>
        </View>
      </View>

      <View>
        <CustomButton
          primary
          title="Go to Request"
          onPress={() => {
            navigation.navigate("RequestComp");
          }}
        />
      </View>
    </>
  );
};

export default RequestDriverSuccess;
