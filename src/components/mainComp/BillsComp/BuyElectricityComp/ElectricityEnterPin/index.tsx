import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomEnterPin from "../../../../customsComp/CustomEnterPin";

const ElectricityEnterPin = () => {
  const navigation = useNavigation();
  const [code, setCode] = React.useState<number[]>([]);
  console.log(code, "code");

  const pinLength = 4;

  const handleOnPressPin = (item) => {
    if (item === "del") {
      setCode((prevCode) => prevCode.slice(0, prevCode.length - 1));
    } else if (typeof item === "number") {
      if (code.length === pinLength) return;
      setCode((prevCode) => [...prevCode, item]);
    }
  };
  React.useEffect(() => {
    if (code.length == 4) {
      navigation.navigate("BuyElectricitySuccess");
    }
  }, [code]);

  return (
    <>
      <View className="flex-1 bg-[#F8F8F8] p-6">
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
        {/* <Text>{code}</Text> */}
        <View>
          <View className=" items-center mb-10">
            <Text className="text-[20px] font-[600] font-[Archivo] leading-normal">
              Enter your new PIN code
            </Text>
            <Text className="text-[12px] font-[300] font-[Archivo] leading-normal">
              Use your transactional PIN to confirm this transaction
            </Text>
          </View>

          <CustomEnterPin
            onPress={handleOnPressPin}
            pinLength={pinLength}
            code={code}
          />
        </View>
        <TouchableOpacity className=" items-center mt-5">
          <Text className="text-[12px] font-[600] font-[Archivo] leading-[15px]">
            Forgot PIN?
          </Text>
        </TouchableOpacity>
      </View>
    </>
  );
};

export default ElectricityEnterPin;
