import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Contianer from "../../customsComp/Container";
import { useNavigation } from "@react-navigation/native";
import CustomInput, { CustomButton } from "../../customsComp/Input";
import { useForm, Controller } from "react-hook-form";


type LoginType = {
  isSecureEntry: boolean;
  setIsSecureEntry: (prev: boolean) => void;
  setIsLoggedIn:()=>void;
};

type formData = {
    email: string;
    password: string;
    onPress:()=>void;
}

const LoginComp = ({
  isSecureEntry,
  setIsSecureEntry,
  setIsLoggedIn,
}: LoginType) => {
  const navigation = useNavigation();

  const { handleSubmit } = useForm<formData>();

  const onsubmit = (data) => {
    console.log(data, "kkkkkk");
    setIsLoggedIn(true)
  };

  return (
    <View className="flex-1 bg-white p-6">
      <View className="py-6">
        <TouchableOpacity
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
        <View className="mt-5 mb-10">
          <Text className="font-[Archivo] font-[700] text-[29px] leading-[37px]">
            Login here
          </Text>
          <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px]">
            Don’t have an account?{" "}
            <Text
              className="text-[#BAAFE9]"
              onPress={() => {
                navigation.navigate("Register");
              }}
            >
              Create an account
            </Text>
          </Text>
        </View>
        <View>
          <CustomInput
            primary
            label="Email Address"
            placeholder="example@gmail.com"
            name="email"
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
                  <Ionicons name="eye-off-outline" size={24} color="black" />
                ) : (
                  <Ionicons name="eye-outline" size={24} color="black" />
                )}
              </TouchableOpacity>
            }
          />
        </View>
        <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px] mb-10">
          Forgot password? <Text className="text-[#BAAFE9]">Reset here</Text>
        </Text>

        <CustomButton primary title="Login" onPress={onsubmit} />
      </View>
    </View>
  );
};

export default LoginComp;
