import React from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import useAuthStore from "../../../../stores/authStore";
import { useMutation } from "@tanstack/react-query";
// import { OtpCodeData, verifyEmail } from "../../../../helper/apis/authApi";
import Toast from "react-native-toast-message";
import Spinner from "react-native-loading-spinner-overlay";
import { verifyEmail } from "../../../../api_services/auth_apis";

export interface DataValue {
  data: Record<string, any>; // or any other type you want
  VehicleType: string; // or any other type you want
}

const CELL_COUNT = 6;

const VerifyAccountScreen = () => {
  const navigation = useNavigation();
  const [value, setValue] = React.useState("");
  const [enableMask, setEnableMask] = React.useState(true);
  const [isFull, setIsFull] = React.useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //STORE
  const { authUser, setAuthDataInfo, authDataInfo } = useAuthStore((state) => ({
    authUser: state.authUser,
    setAuthDataInfo: state.setAuthDataInfo,
    authDataInfo: state.authDataInfo,
  }));


  const verifyAccountMutation = useMutation({
    mutationFn: verifyEmail,
    onSuccess: (data:any) => {
      console.log(data, "99999");
      Toast.show({
        type: "success",
        text2: `${data?.message}`,
      });
      navigation.navigate("AccountCreatedScreen");
    },
    onError: (error: any) => {
      console.log(error, "verifyAcct");
      Toast.show({
        type: "error",
        text1: `${error?.response?.data?.message}`,
      });
    },
  });

  const handleFulfill = (code) => {
    if (code.length === CELL_COUNT) {
      setIsFull(true);
      console.log(code, "code");
      setAuthDataInfo({ code: code });
      verifyAccountMutation.mutate({
        email: authUser?.email,
        code: code,
        type: "REGISTER",
      });
    }
  };

  return (
    <>
      <Spinner
        visible={verifyAccountMutation.isPending}
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
              Verify account
            </Text>
            <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px]">
              A code has been sent to your email address
            </Text>
          </View>
        </View>
        <View>
          <Text className="font-[Archivo] font-[400] text-[12px] leading-[13px] mb-2">
            Enter code
          </Text>
          <CodeField
            ref={ref}
            {...props}
            value={value}
            secureTextEntry={true}
            //   onChangeText={setValue}
            onChangeText={(code) => {
              setValue(code);
              handleFulfill(code);
            }}
            cellCount={CELL_COUNT}
            //   rootStyle={styles.codeFiledRoot}
            keyboardType="number-pad"
            // renderCell={renderCell}

            renderCell={({ index, symbol, isFocused }) => (
              <Text
                key={index}
                //   style={[styles.cell, isFocused && styles.focusCell]}
                className="h-[50px] w-[50px]  bg-[#F5F5F5] rounded-[6px] text-center p-2 text-[24px]"
                // className="h-[50px] w-[50px]  rounded-[6px] text-center p-2 text-[24px]"
                onLayout={getCellOnLayoutHandler(index)}
              >
                {symbol || (isFocused ? <Cursor /> : null)}
              </Text>
            )}
          />
        </View>
      </View>
    </>
  );
};
const styles = StyleSheet.create({
  root: { flex: 1, padding: 20 },
  title: { textAlign: "center", fontSize: 30 },
  codeFiledRoot: { marginTop: 20 },
  cell: {
    width: 40,
    height: 40,
    lineHeight: 38,
    fontSize: 24,
    borderWidth: 2,
    borderColor: "#00000030",
    textAlign: "center",
  },
  focusCell: {
    borderColor: "#000",
  },
});

export default VerifyAccountScreen;
