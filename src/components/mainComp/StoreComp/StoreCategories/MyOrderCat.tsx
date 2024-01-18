import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from 'react'
import { Ionicons, AntDesign } from "@expo/vector-icons";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import { useNavigation } from "@react-navigation/native";
import OrderBotSheet from "./OrderBotSheet";


const MyOrderCat = () => {
   const navigation = useNavigation();

   const orderSheetRef = React.useRef(null);

  const height = 775;


   const orderCloseSheet = () => {
     if (orderSheetRef.current) {
       orderSheetRef.current.close();
     }
   };
   const orderOpenSheet = () => {
     if (orderSheetRef.current) {
       orderSheetRef.current.open();
     }
   };
  return (
    <>
      <View>
        <ScrollView showsVerticalScrollIndicator={false} className="mx-auto">
          <TouchableOpacity
            className=" flex-row  w-[335px] h-[113px] border rounded-2xl border-[#F1F0F0]"
            onPress={() => {
              orderOpenSheet();
            }}
          >
            <View className=" w-[118px] h-[48px] self-center">
              <Image
                source={require("../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  // borderRadius: 100,
                }}
              />
            </View>
            <View className=" ">
              <View className=" w-[200px] h-[41px] my-2 flex-row items-center justify-between">
                <View>
                  <View className="flex-row items-center">
                    <Text className="font-[500] text-[12px] font-[Archivo] leading-[13.06px] my-3">
                      Power Steering Pumps 2
                    </Text>
                  </View>
                  <Text className="font-[600] text-[10px] font-[Archivo] leading-[10px]">
                    N5000
                  </Text>
                </View>
              </View>
              <View className=" flex-row justify-between items-center py-5">
                <View className="w-[70px] h-[15px] bg-[#FFEBEB] px-[10px] py-[2px] rounded-full">
                  <Text className="font-[500] text-[9px] font-[Archivo] leading-[10px] text-center text-[#FF776C]">
                    PENDING
                  </Text>
                </View>
                <View className="">
                  <Text className="font-[500] text-[10px] font-[Archivo] leading-[15px]">
                    27-05-2021
                  </Text>
                </View>
              </View>
            </View>
          </TouchableOpacity>
        </ScrollView>
      </View>
      <CustomBottomSheet
        height={height}
        ref={orderSheetRef}
        message={<OrderBotSheet orderCloseSheet={orderCloseSheet} />}
      />
    </>
  );
}

export default MyOrderCat