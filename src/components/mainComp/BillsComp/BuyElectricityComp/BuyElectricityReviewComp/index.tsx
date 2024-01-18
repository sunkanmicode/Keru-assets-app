import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { CustomButton } from '../../../../customsComp/Input';
import CustomBottomSheet from '../../../../customsComp/BottomSheet';
import { useNavigation } from "@react-navigation/native";
import BuyElectricityBottomSheet from "../BuyElectricityBottomSheet";

const BuyElecttricityReviewComp = () => {
 const navigation = useNavigation();
 const BuyElectricitySheetRef = React.useRef(null);

 const height = 343;

 const buyElectricityCloseSheet = () => {
   if (BuyElectricitySheetRef.current) {
     BuyElectricitySheetRef.current.close();
   }
 };
 const buyElectricityOpenSheet = () => {
   if (BuyElectricitySheetRef.current) {
     BuyElectricitySheetRef.current.open();
   }
 };
 return (
   <>
     <View className="flex-1 bg-white p-6">
       <View className="py-6  flex-row items-center">
         <TouchableOpacity
           className="mr-4"
           onPress={() => {
             navigation.goBack();
           }}
         >
           <AntDesign name="arrowleft" size={24} color="black" />
         </TouchableOpacity>
       </View>
       <Text className="text-[24px] font-[600] font-[Archivo] leading-[26px]">
         Review your Order
       </Text>
       <View>
         <View className=" my-[27px]">
           <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
             Meter Number
           </Text>
           <View className=" flex-row items-center justify-between mt-2">
             <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
               0128882323399
             </Text>
           </View>
           <View className=" h-0.5 bg-[#F5F5F5]" />
         </View>

         <View className=" mb-[27px]">
           <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
             Name
           </Text>
           <View className=" flex-row items-center justify-between mt-2">
             <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
               Softamos Okiki
             </Text>
           </View>
           <View className=" h-0.5 bg-[#F5F5F5]" />
         </View>

         <View className=" mb-[27px]">
           <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
             Address
           </Text>
           <View className=" flex-row items-center justify-between mt-2">
             <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
               23, Osaye Street, Aguda
             </Text>
           </View>
           <View className=" h-0.5 bg-[#F5F5F5]" />
         </View>

         <View className=" mb-[27px]">
           <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
             Phone Number
           </Text>
           <View className=" flex-row items-center justify-between mt-2">
             <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
               09088661122
             </Text>
           </View>
           <View className=" h-0.5 bg-[#F5F5F5]" />
         </View>

         <View className=" mb-[27px]">
           <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
             Amount
           </Text>
           <View className=" flex-row items-center justify-between mt-2">
             <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
               N3000
             </Text>
           </View>
           <View className=" h-0.5 bg-[#F5F5F5]" />
         </View>

         <View className=" mb-[27px]">
           <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
             Service Charge
           </Text>
           <View className=" flex-row items-center justify-between mt-2">
             <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
               N100
             </Text>
           </View>
           <View className=" h-0.5 bg-[#F5F5F5]" />
         </View>

         <View className=" mb-[27px]">
           <View className=" flex-row items-center justify-between ">
             <Text className="text-[12px] font-[400] font-[Archivo] leading-[15px]">
               Total
             </Text>
             <Text className="text-[18px] font-[600] font-[Archivo] leading-[23px]">
               N3100
             </Text>
           </View>
           {/* <View className=" h-0.5 bg-[#F5F5F5]" /> */}
         </View>
       </View>
     </View>
     <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
       <CustomButton
         primary
         title="Buy Electricity"
         onPress={() => {
           buyElectricityOpenSheet();
         }}
       />
     </View>
     <CustomBottomSheet
       height={height}
       ref={BuyElectricitySheetRef}
       message={<BuyElectricityBottomSheet />}
     />
   </>
 );
}

export default BuyElecttricityReviewComp