import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { CustomButton } from "../../../../customsComp/Input";

const BuyElectricitySuccess = () => {
 const navigation = useNavigation();
 return (
   <>
     <View className="flex-1 bg-white p-6">
       <View className="py-6 mb-5 flex-row items-center">
         <TouchableOpacity
           className="mr-4"
           onPress={() => {
             navigation.navigate("BillsScreens");
           }}
         >
           <AntDesign name="close" size={24} color="black" />
         </TouchableOpacity>
       </View>
       {/* <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px]">
          Referrals
        </Text> */}
       <View className=" flex-1 justify-center items-center">
         <View className=" w-[158px] h-[158px] rounded-full bg-[#007FFF]">
           <Image
             source={require("../../../../../../assets/images/sendsuccess.gif")}
             style={{
               width: "100%",
               height: "100%",
               //   borderRadius: 100,
             }}
           />
         </View>

         <View className=" w-[187px] h-[44px]">
           <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px] text-center">
             Success
           </Text>
         </View>
         <View className=" w-[259px] h-[37px] my-6">
           <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] text-center">
             Your internet recharge payment of 20GB for Smile was successful
           </Text>
         </View>

         <View className=" w-[259px] h-[37px]">
           <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] text-center">
             Thank you for using our service
           </Text>
         </View>
       </View>
     </View>
     <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
       <CustomButton
         primary
         title="Download Receipt"
         //   onPress={() => {
         //     complaintOpenSheet();
         //   }}
       />
     </View>

     <View className=" bg-white">
       <TouchableOpacity className=" w-[350px] h-[45px] bg-white border border-[#BAAFE9] px-[50px] py-[14px] rounded-[50px] self-center">
         <Text className="text-[14px] font-[500] font-[Archivo] leading-[18px] text-center">
           Share Receipt
         </Text>
       </TouchableOpacity>
     </View>
   </>
 );
}

export default BuyElectricitySuccess