import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';
import  { CustomButton } from "../../../customsComp/Input";
import BuyDataFormOne from "./BuyDataFormOne";
import BuyDataFormTwo from "./BuyDataFormTwo";


const BuyDataComp = () => {
    const navigation = useNavigation()
     const [form, setForm] = React.useState<{ [key: string]: any }>({});
     const [formStep, setFormStep] = React.useState(0);

      const nextStepForm = () => {
        setFormStep((cur) => cur + 1);
      };
      const prevStepForm = () => {
        if (formStep === 0) {
          return navigation.goBack();
        }
        setFormStep((cur) => cur - 1);
      };

     const onchangeText = (name: string, value: string) => {
       setForm({ ...form, [name]: value });
     };

  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="py-6  flex-row items-center">
          {formStep === 0 ? (
            <TouchableOpacity
              className="mr-4"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          ) : (
            <TouchableOpacity
              className="mr-4"
              onPress={() => {
                prevStepForm();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
          )}
        </View>
        <Text className="text-[24px] font-[600] font-[Archivo] leading-[26px]">
          Buy Data
        </Text>
        {formStep === 0 && <BuyDataFormOne />}

        {formStep === 1 && <BuyDataFormTwo />}
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
        {formStep === 0 && (
          <CustomButton
            primary
            title="Continue"
              onPress={() => {
                nextStepForm();
              }}
          />
        )}
        {formStep === 1 && (
          <CustomButton
            primary
            title="Continue"
              onPress={() => {
                navigation.navigate("ReviewOrderComp");
              }}
          />
        )}
      </View>
    </>
  );
}

export default BuyDataComp