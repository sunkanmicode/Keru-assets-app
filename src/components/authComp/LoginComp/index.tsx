import React from "react";
import { View, Text, TouchableOpacity } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomInput  from "../../customsComp/Input";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "../../customsComp/CustomButton";
import Spinner from "react-native-loading-spinner-overlay";


type LoginType = {
  isSecureEntry: boolean;
  setIsSecureEntry: (isSecureEntry: boolean) => void;
  loginUserMutation: any;
  onSubmit: (data: unknown) => void;
};

type formData = {
  email: string;
  password: string;
  onPress: () => void;
};

const LoginComp = ({
  isSecureEntry,
  setIsSecureEntry,
  loginUserMutation,
  onSubmit,
}: LoginType) => {
  const navigation = useNavigation();


   const { control, handleSubmit, formState } = useForm<formData>();

  return (
    <>
      <Spinner
        visible={loginUserMutation.isPending}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />

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
            <Controller
              control={control}
              name="email"
              rules={{
                required: "Email is required",
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <CustomInput
                  primary
                  label="Email Address"
                  placeholder="example@gmail.com"
                  value={value}
                  onChangeText={onChange}
                  error={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="password"
              rules={{
                required: "Password is required",
                minLength: { value: 6, message: "Passowrd should be 6 char" },
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <CustomInput
                  primary
                  label="Password"
                  placeholder="Enter your password"
                  iconPostion="right"
                  secureTextEntry={isSecureEntry}
                  value={value}
                  onChangeText={onChange}
                  error={error?.message}
                  icon={
                    <TouchableOpacity
                      onPress={() => {
                        setIsSecureEntry(!isSecureEntry);
                      }}
                    >
                      {isSecureEntry ? (
                        <Ionicons
                          name="eye-off-outline"
                          size={24}
                          color="black"
                        />
                      ) : (
                        <Ionicons name="eye-outline" size={24} color="black" />
                      )}
                    </TouchableOpacity>
                  }
                />
              )}
            />
          </View>
          <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px] mb-10">
            Forgot password?{" "}
            <Text
              className="text-[#BAAFE9]"
              onPress={() => {
                // navigation.navigate("ResetPassword");
              }}
            >
              Reset here
            </Text>
          </Text>
        </View>
      </View>
      <View className="p-5 bg-white">
        <CustomButton
          primary
          title="Login"
          onPress={handleSubmit(onSubmit)}
          disabled={formState.isSubmitting || !formState.isValid}
        />
      </View>
    </>
  );
};

export default LoginComp;
