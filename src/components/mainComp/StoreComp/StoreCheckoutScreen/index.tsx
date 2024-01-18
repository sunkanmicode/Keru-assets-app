import { StyleSheet, Text, View, ScrollView, TouchableOpacity } from "react-native";
import React from 'react'
import { AntDesign, Octicons, Entypo } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import StoreAddAddressSheet from "../StoreAddAddressSheet";

const StoreCheckoutScreen = () => {
    const navigation = useNavigation()
    
     const AddressheetRef = React.useRef(null);

     const height = 343;

     const addressCloseSheet = () => {
       if (AddressheetRef.current) {
         AddressheetRef.current.close();
       }
     };
     const addresOpenSheet = () => {
       if (AddressheetRef.current) {
         AddressheetRef.current.open();
       }
     };
  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="flex-row py-6 mb-10 items-center justify-between">
          <View className=" flex-row items-center">
            <TouchableOpacity
              className="mr-4"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
              Checkout
            </Text>
          </View>
          <View />
        </View>
        <ScrollView className="mx-auto" showsVerticalScrollIndicator={false}>
          <View className=" w-[335px] h-[113px] border rounded-2xl border-[#F1F0F0]">
            <Text className="font-[700] text-[12px] font-[Archivo] leading-[13.32px] p-3">
              Address
            </Text>
            <View className="w-[295px] h-[52px] mx-6 ">
              <Text className="font-[700] text-[12px] font-[Archivo] leading-[13.32px] ">
                Softamos
              </Text>
              <Text className="font-[700] text-[12px] font-[Archivo] leading-[13.32px]">
                Amos 11, Adekunle Street, Ogba Lagos
              </Text>
            </View>
            <TouchableOpacity className=" flex-row items-center self-center" onPress={()=>{
              addresOpenSheet()
            }}>
              <AntDesign name="pluscircleo" size={17} color="#7065A0" />
              <Text className=" font-[700] text-[12px] font-[Archivo] leading-[13.32px] text-[#7065A0] mx-2">
                Add New Address
              </Text>
            </TouchableOpacity>
          </View>

          <View className=" w-[335px] h-[181px] border rounded-2xl border-[#F1F0F0] mt-3">
            <Text className="font-[700] text-[12px] font-[Archivo] leading-[13.32px] p-3">
              Payment Method
            </Text>
            <View className="w-[334px] h-[120px] mx-6 ">
              <View className="flex-row items-center">
                <Entypo name="circle" size={17} color="#007FFF" />
                <Text className="font-[700] text-[12px] font-[Archivo] leading-[13.32px] mx-2 ">
                  Pay with Wallet
                </Text>
              </View>
              <Text className="font-[400] text-[10px] font-[Archivo] leading-[16.32px] w-[236px] mb-2">
                Use a credit or debit card to pay with automatic payments
                enablded.
              </Text>

              <View className="flex-row items-center">
                <Entypo name="circle" size={17} color="#BAAFE9" />
                <Text className="font-[700] text-[12px] font-[Archivo] leading-[13.32px] mx-2 ">
                  Pay with Paystack
                </Text>
              </View>
              <Text className="font-[400] text-[10px] font-[Archivo] leading-[16.32px] w-[236px] ">
                Prepay your bill by making incremental Paypal payments.
              </Text>
            </View>
          </View>
        </ScrollView>
        <View className="w-[336px] h-[64px]  bg-[#F2EFFE] flex-row justify-between items-center px-2 rounded-[10px] mx-auto">
          <Text className="font-[500] text-[14px] font-[Archivo] leading-[15.32px] ">
            Total Order
          </Text>
          <Text className="font-[600] text-[26px] font-[Archivo] leading-[28.32px]  ">
            N30,000
          </Text>
        </View>
      </View>
      <View className=" items-center justify-center bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/100">
        <TouchableOpacity
          className="w-[335px] h-[35px] px-[20px] py-[10px] bg-[#BAAFE9] justify-center items-center rounded-[50px]"
          onPress={() => {
            navigation.navigate("StoreEnterPinScreen");
            // navigation.navigate("OrderCompletedScreen");
          }}
        >
          <Text className="font-[500] text-[12px] font-[Archivo] leading-[13px] text-white">
            Complete Order
          </Text>
        </TouchableOpacity>
      </View>
      <CustomBottomSheet height={height} ref={AddressheetRef} message={<StoreAddAddressSheet />} />
    </>
  );
}

export default StoreCheckoutScreen

