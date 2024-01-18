import { View, Text, TouchableOpacity } from "react-native";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import React from 'react'
import { CustomButton } from "../../../../../customsComp/Input";
import CardSheet from "./CardSheet";
import BankTransfarSheet from "./BankTransfarSheet";
import { useNavigation } from "@react-navigation/native";

const FundWalletBottomSheet = ({
  paymentMethodIndex,
  fundWalletCloseSheet,
}) => {
  const navigation = useNavigation();
  return (
    <>
      {paymentMethodIndex === 0 && (
        <CardSheet fundWalletCloseSheet={fundWalletCloseSheet} />
      )}
      {paymentMethodIndex === 1 && (
        <BankTransfarSheet fundWalletCloseSheet={fundWalletCloseSheet} />
      )}

      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
        {paymentMethodIndex === 0 && (
          <CustomButton
            primary
            title="Fund Wallet"
            onPress={() => {
              navigation.navigate("FundWalletEnterPin");
            }}
          />
        )}
        {paymentMethodIndex === 1 && (
          <CustomButton
            primary
            title="Share Bank Details"
            onPress={() => {
              // fundWalletOpenSheet();
            }}
          />
        )}
      </View>
    </>
  );
};

export default FundWalletBottomSheet