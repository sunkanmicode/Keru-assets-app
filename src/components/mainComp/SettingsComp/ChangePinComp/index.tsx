import { View, Text, Dimensions, TouchableOpacity } from "react-native";
import React from 'react'
import CustomEnterPin from '../../../customsComp/CustomEnterPin';
import { CustomButton } from "../../../customsComp/Input";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";




const { width } = Dimensions.get("window");


const ChangePinComp = () => {
  const navigation = useNavigation()
  const [code, setCode] =React.useState<number[]>([])
  console.log(code, "code");

const pinLength = 4


const handleOnPressPin = (item)=>{
  if (item === "del") {
    setCode((prevCode) => prevCode.slice(0, prevCode.length - 1));
  } else if (typeof item === "number") {
    if (code.length === pinLength) return;
    setCode((prevCode) => [...prevCode, item]);
  }

}
React.useEffect(()=>{
if(code.length == 4){
  navigation.navigate("ReEnterPin")
}
},[code])


  return (
    <>
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
      {/* <Text>{code}</Text> */}
      <View>
      <View className=" items-center mb-10">
        <Text className="text-[20px] font-[600] font-[Archivo] leading-normal">Enter your new PIN code</Text>
        <Text className="text-[12px] font-[300] font-[Archivo] leading-normal">Use your transactional PIN to confirm this transaction</Text>
      </View>
      
      <CustomEnterPin onPress={handleOnPressPin} pinLength={pinLength} code={code} />
      </View>
    </View>
    {/* <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
       
          <CustomButton
            primary
            title="Save"
            onPress={() => {
              // navigation.navigate("FundWalletSuccess");
            }}
          />
      </View> */}
    </>
  );
}

export default ChangePinComp  