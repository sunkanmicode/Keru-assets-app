import React, { useCallback } from "react";
import { View, TouchableOpacity, Text, StyleSheet } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation, useRoute } from "@react-navigation/native";
import {
  CodeField,
  Cursor,
  useBlurOnFulfill,
  useClearByFocusCell,
} from "react-native-confirmation-code-field";
import useAuthStore from "../../../../stores/authStore";
import { useMutation, useQuery } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import Spinner from "react-native-loading-spinner-overlay";
import { createPin } from "../../../../api_services/transaction_api";
import { getMeUser } from "../../../../api_services/user_apis";

interface Item {
  code: string; // or any other type you want
  // add any other properties you need
}

const CELL_COUNT = 4;

const ReEnterPIN = () => {
  const navigation = useNavigation();
  // Use the type in your destructuring assignment
  // const { params: { code: item = {} as Item } = {} } = useRoute();
  const [value, setValue] = React.useState("");
  const [enableMask, setEnableMask] = React.useState(true);
  const [isFull, setIsFull] = React.useState(false);
  const ref = useBlurOnFulfill({ value, cellCount: CELL_COUNT });
  const [props, getCellOnLayoutHandler] = useClearByFocusCell({
    value,
    setValue,
  });

  //STORE
  const { authDataInfo } = useAuthStore((state) => ({
    authDataInfo: state.authDataInfo,
  }));

  const createPinMutation = useMutation({
    mutationFn: createPin,
    onSuccess: (data) => {
      console.log(data, "99999");
      Toast.show({
        type: "success",
        text2: `${data?.message}`,
      });
      // console.log(data, "successRegister");
      navigation.navigate("HomeScreen");
    },
    onError: (error: any) => {
      console.log(error, "999error");
      Toast.show({
        type: "error",
        text1: `${error?.response?.data?.message}`,
      });
    },
  });

  const handleFulfill = (code) => {
    if (code.length === CELL_COUNT) {
      setIsFull(true);
      if (code === authDataInfo?.transactionPin) {
        createPinMutation.mutate({
          pin: code,
        });
      } else {
        Toast.show({
          type: "error",
          text1: "Pin do not match",
        });
      }
    }
  };

  const renderCell = ({ index, symbol, isFocused }) => {
    const textChild = symbol ? (
      enableMask ? (
        "*"
      ) : (
        symbol
      )
    ) : isFocused ? (
      <Cursor />
    ) : null;

    return (
      <Text
        key={index}
        className="h-[50px] w-[50px]  bg-[#F5F5F5] rounded-[6px] text-center p-2 text-[24px]"
        onLayout={getCellOnLayoutHandler(index)}
      >
        {textChild}
      </Text>
    );
  };

  return (
    <>
      <Spinner
        visible={createPinMutation.isPending}
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
              Re-enter PIN
            </Text>
            <Text className="font-[Archivo] font-[400] text-[12px] leading-[23px]">
              Set your transactional PIN here
            </Text>
          </View>
        </View>
        <View>
          <Text className="font-[Archivo] font-[400] text-[12px] leading-[13px] mb-2">
            Enter your desired PIN
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
            renderCell={renderCell}

            // renderCell={({ index, symbol, isFocused }) => (
            //   <Text
            //     key={index}
            //     //   style={[styles.cell, isFocused && styles.focusCell]}
            //     // className="h-[50px] w-[50px]  bg-[#F5F5F5] rounded-[6px] text-center p-2 text-[24px]"
            //     className="h-[50px] w-[50px]  bg-red-400 rounded-[6px] text-center p-2 text-[24px]"
            //     onLayout={getCellOnLayoutHandler(index)}
            //   >
            //     {symbol || (isFocused ? <Cursor /> : null)}
            //   </Text>
            // )}
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

export default ReEnterPIN;
