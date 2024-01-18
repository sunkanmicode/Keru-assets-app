import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Contianer from "../../customsComp/Container";
import CustomInput, { CustomButton } from "../../customsComp/Input";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";

type LoginType = {
  isSecureEntry: boolean;
  setIsSecureEntry: (isSecureEntry: boolean) => void;
};

type formData = {
  email: string;
  password: string;
  onPress: () => void;
};

const RegisterComp = ({ isSecureEntry, setIsSecureEntry }: LoginType) => {
  const navigation = useNavigation()
  const { handleSubmit } = useForm<formData>();

  const onsubmit = (data) => {
    console.log(data, "kkkkkk");
  };

  return (
    <View className="flex-1 bg-white p-5">
      {/* <View className="py-6 mb-10 bg-green-200"> */}
      {/* <TouchableOpacity>
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity> */}
      <View className="mt-5 mb-3">
        <Text className="font-[Archivo] font-[700] text-[29px] leading-[37px]">
          Create an account
        </Text>
        <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px]">
          Already a member? {}
          <Text
            className="text-[#BAAFE9]"
            onPress={() => {
              navigation.navigate("Login");
            }}
          >
            Login here
          </Text>
        </Text>
      </View>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className=""
      >
        <View>
          <CustomInput
            primary
            label="First Name"
            placeholder="Jena"
            name="firstName"
          />
          <CustomInput
            primary
            label="Last Name"
            placeholder="Jena"
            name="lastName"
          />
          <CustomInput
            primary
            label="Email Address"
            placeholder="example@gmail.com"
            name="email"
          />
          <CustomInput
            primary
            label="Phone Number"
            placeholder="Enter your phone Number"
            name="phoneNumber"
          />
          <CustomInput
            primary
            label="Password"
            placeholder="Enter your password"
            iconPostion="right"
            name="password"
            secureTextEntry={isSecureEntry}
            icon={
              <TouchableOpacity
                onPress={() => {
                  setIsSecureEntry((prev: boolean) => !prev);
                }}
              >
                {/* <FontAwesome5 name="eye" size={24} color="black" /> */}

                {isSecureEntry ? (
                  <Ionicons name="eye-off-outline" size={24} color="#292D32" />
                ) : (
                  <Ionicons name="eye-outline" size={24} color="#292D32" />
                )}
              </TouchableOpacity>
            }
          />
        </View>
        <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px]">
          I agree with Keru’s{" "}
          <Text className="text-[#007FFF]">Privacy Policy </Text>
          and <Text className="text-[#007FFF]">Terms & Conditions?</Text>
        </Text>
      </ScrollView>
      {/* </View> */}
      <View className="pb-11">
        <CustomButton
          primary
          title="Create account"
          onPress={() => {
            navigation.navigate("VerifyAccountScreen");
          }}
        />
      </View>
    </View>
  );
};

export default RegisterComp;
