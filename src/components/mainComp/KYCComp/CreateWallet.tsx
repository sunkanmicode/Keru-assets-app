import { View, Text, TouchableOpacity } from "react-native";
import React, { useCallback } from "react";
import { useNavigation } from "@react-navigation/native";
import { AntDesign } from "@expo/vector-icons";
import { CustomButton } from "../../customsComp/CustomButton";
import CustomInput from "../../customsComp/Input";
import { useMutation, useQuery } from "@tanstack/react-query";
import { createWallet } from "../../../api_services/wallet_apis";
import Toast from "react-native-toast-message";
import { Controller, useForm } from "react-hook-form";
import { getMeUser } from "../../../api_services/user_apis";
import Spinner from "react-native-loading-spinner-overlay";

const CreateWallet = () => {
  const navigation = useNavigation();

  const { control, handleSubmit, formState } = useForm();

  const createWalletMutation = useMutation({
    mutationFn: createWallet,
    onSuccess: (data) => {
      Toast.show({
        type: "success",
        text2: `${data?.message}`,
      });
      console.log(data, "successRegister");
      navigation.navigate("TransactionPinScreen");

      // navigation.navigate("AccountCreatedScreen");
    },
    onError: (error: any) => {
      console.log(error, "999error");
      Toast.show({
        type: "error",
        text1: `${error?.response?.data?.message}`,
      });
    },
  });

  const onSubmit = (data) => {
    createWalletMutation.mutate({
      bvn: data?.bvn,
    });
  };

  return (
    <>
      <Spinner
        visible={createWalletMutation?.isPending}
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
              Complete your KYC
            </Text>
          </View>
        </View>
        <Controller
          control={control}
          name="bvn"
          rules={{
            required: "Password is required",
            minLength: { value: 11, message: "Bvn should be 11 digits" },
          }}
          render={({
            field: { value, onChange, onBlur },
            fieldState: { error },
          }) => (
            <CustomInput
              primary
              label="Bank Verification Number"
              placeholder="Enter BVN"
              keyboardType="numeric"
              value={value}
              onChangeText={onChange}
              error={error?.message}
            />
          )}
        />
      </View>
      <View className=" bg-white p-5">
        <CustomButton
          primary
          title="Continue"
          // onPress={() => {
          //   navigation.navigate("TransactionPinScreen");
          // }}
          onPress={handleSubmit(onSubmit)}
        />
      </View>
    </>
  );
};

export default CreateWallet;
