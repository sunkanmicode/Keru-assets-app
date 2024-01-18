import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import CustomInput, { CustomButton } from '../../../customsComp/Input';
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";


const PayExamComp = () => {
 const navigation = useNavigation();
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
         Pay Exam Bills
       </Text>
       <View>
         <CustomInput primary label="Select Exam" placeholder="Select Type" />

         <CustomInput primary
           label="Candidate Number"
           placeholder="Enter Candidate Number"
         />
         
         <CustomInput primary label="Amount" placeholder="Enter Amount" />
       </View>
     </View>
     <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center ">
       <CustomButton
         primary
         title="Continue"
         onPress={() => {
           navigation.navigate("PayExamReview");
         }}
       />
     </View>
   </>
 );
}

export default PayExamComp