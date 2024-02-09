import React from "react";
import { View, Text, TouchableOpacity, ScrollView } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { Ionicons } from "@expo/vector-icons";
import Contianer from "../../customsComp/Container";
import CustomInput from "../../customsComp/Input";
import { useNavigation } from "@react-navigation/native";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "../../customsComp/CustomButton";
import Checkbox from "expo-checkbox";
import Spinner from "react-native-loading-spinner-overlay";

const EMAIL_REGEX = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

type RegisterType = {
  isSecureEntry: boolean;
  setIsSecureEntry: (isSecureEntry: boolean) => void;
  onSubmit: (data: unknown) => void;
  isChecked: boolean;
  setChecked: (isChecked: boolean) => void;
  registerMutation: any;
};

type formData = {
  email: string;
  password: string;
  firstName: string;
  lastName: string;
  phoneNumber: string;
  nin: string;
  onPress: () => void;
};

const RegisterComp = ({
  isSecureEntry,
  setIsSecureEntry,
  onSubmit,
  isChecked,
  setChecked,
  registerMutation,
}: RegisterType) => {
  const navigation = useNavigation();
   const { register, control, handleSubmit, setError, formState } =
     useForm<formData>();


  return (
    <>
      <Spinner
        visible={registerMutation.isPending}
        // textContent={"Loading..."}
        // textStyle={styles.spinnerTextStyle}
      />
      <View className="flex-1 bg-white p-6">
        <View className="py-6 ">
          <TouchableOpacity
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <View className="mt-5">
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
          <ScrollView showsVerticalScrollIndicator={false} className=" mb-14">
            <Controller
              control={control}
              name="firstName"
              rules={{
                required: "first Name is required",
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <CustomInput
                  primary
                  label="First Name"
                  placeholder="Jena"
                  value={value}
                  onChangeText={onChange}
                  error={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="lastName"
              rules={{
                required: "last Name is required",
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <CustomInput
                  primary
                  label="Last Name"
                  placeholder="Jena"
                  value={value}
                  onChangeText={onChange}
                  error={error?.message}
                />
              )}
            />

            <Controller
              control={control}
              name="email"
              rules={{
                required: "email is required",
                pattern: { value: EMAIL_REGEX, message: "Email is invalid" },
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
              name="phoneNumber"
              rules={{
                required: "Phone Number is required",
                minLength: {
                  value: 11,
                  message: "Phone Number must be 11 digit",
                },
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <CustomInput
                  primary
                  label="Phone Number"
                  placeholder="Enter phone Number +2348077665544"
                  value={value}
                  onChangeText={onChange}
                  error={error?.message}
                />
              )}
            />
            <Controller
              control={control}
              name="nin"
              rules={{
                required: "NIN is required",
                minLength: {
                  value: 11,
                  message: "NIN must be 11 digit",
                },
              }}
              render={({
                field: { value, onChange, onBlur },
                fieldState: { error },
              }) => (
                <CustomInput
                  primary
                  label="NIN"
                  placeholder="Enter Your NIN"
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
                  value={value}
                  onChangeText={onChange}
                  secureTextEntry={isSecureEntry}
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
                          color="#292D32"
                        />
                      ) : (
                        <Ionicons
                          name="eye-outline"
                          size={24}
                          color="#292D32"
                        />
                      )}
                    </TouchableOpacity>
                  }
                />
              )}
            />
          </ScrollView>
        </View>
      </View>
      <View className="p-5 bg-white">
        <View className=" flex-row">
          <Checkbox
            // style={styles.checkbox}
            className=""
            value={isChecked}
            onValueChange={setChecked}
            color={isChecked ? "#BAAFE9" : undefined}
          />

          <Text className="font-[Archivo] font-normal text-xs leading-[23px] mx-2">
            I agree with Keru’s{" "}
            <Text className="text-[#007FFF]">Privacy Policy </Text>
            and <Text className="text-[#007FFF]">Terms & Conditions?</Text>
          </Text>
        </View>
        <CustomButton
          primary
          title="Create account"
          disabled={formState.isSubmitting || !formState.isValid}
          onPress={handleSubmit(onSubmit)}
        
         
        />
      </View>
    </>
  );
};

export default RegisterComp;
