import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import {
  AntDesign,
  Ionicons,
  MaterialIcons,
  Fontisto,
} from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomInput, { CustomButton } from "../../../../customsComp/Input";
import CustomBottomSheet from "../../../../customsComp/BottomSheet";
import FundWalletBottomSheet from "./FundWalletBottomSheet";
import { PaystackIcon } from "../../../../../helper/Icons";

const FundWalletComp = () => {
    const navigation = useNavigation()
    const [paymentMethodIndex, setPaymentMethodIndex] = React.useState(0);


     const fundWalletSheetRef = React.useRef(null);

     const height = 775;

     const fundWalletCloseSheet = () => {
       if (fundWalletSheetRef.current) {
         fundWalletSheetRef.current.close();
       }
     };
     const fundWalletOpenSheet = () => {
       if (fundWalletSheetRef.current) {
         fundWalletSheetRef.current.open();
       }
     };


     const paymentMethodData = [
       {
         title: "Pay with card",
         icon: (
           <MaterialIcons
             name="account-balance-wallet"
             size={24}
             color="#BAAFE9"
           />
         ),
       },
       {
         title: "Pay with Bank Transfer",
         icon: <MaterialIcons name="credit-card" size={24} color="#BAAFE9" />,
       },
     ];




  return (
    <>
      <View className="flex-1 bg-white  p-6">
        <View className="pt-6 mb-5 flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px]">
            Fund Wallet
          </Text>
        </View>
        <View>
          <CustomInput whiteBg label="Amount" placeholder="Enter Amount" />
        </View>

        <View className=" p-[20px] py-10">
          <View className=" h-[19px]">
            <Text className="text-[16px] font-[500] font-[Archivo] leading-[17px]">
              Payment Method
            </Text>
          </View>
          <View className=" my-5">
            {paymentMethodData.map((item, index) => (
              <TouchableOpacity
                key={item.title}
                className={` h-[56px] px-[16px] border border-[#F0F0FF]  rounded-full flex-row items-center justify-between my-3 ${
                  paymentMethodIndex === index && "bg-[#F0F0FF]"
                }`}
                onPress={() => {
                  // navigation.navigate("BuyAirtimeSuccess");
                  setPaymentMethodIndex(index);
                }}
              >
                <Text className="text-[14px] font-[400] font-[Archivo] leading-[16px] ">
                  {item.title}
                </Text>
                <View>
                  {/* <MaterialIcons
                    name="account-balance-wallet"
                    size={24}
                    color="#BAAFE9"
                  /> */}
                  {item.icon}
                </View>
              </TouchableOpacity>
            ))}

            
          </View>
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
        <CustomButton
          primary
          title="Continue"
          onPress={() => {
            fundWalletOpenSheet();
          }}
        />
      </View>
      <CustomBottomSheet
        height={height}
        ref={fundWalletSheetRef}
        message={
          <FundWalletBottomSheet
            paymentMethodIndex={paymentMethodIndex}
            fundWalletCloseSheet={fundWalletCloseSheet}
          />
        }
      />
    </>
  );
}

export default FundWalletComp