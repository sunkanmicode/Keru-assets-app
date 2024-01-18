import { View, Text, ScrollView, Image } from "react-native";
import React from 'react'
import { CapacityInformation, FleetDetails, Review } from "./requestData/PendingRequestData";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../../../customsComp/Input";

const RequestBreakdown = ({ requestCloseSheet }) => {
  const navigation = useNavigation();

  return (
    <View className="flex-1 bg-white p-6">
      <ScrollView showsVerticalScrollIndicator={false} className="">
        <View
          className="w-[335px] self-center border-[.05px] px-4 h-full"
          style={{
            shadowColor: "rgba(0, 0, 0, 0.05)",
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 10,
            elevation: 1,
            // borderColor: "#F1F0F0",
            // borderWidth: 1,
            // border: 1px solid #F1F0F0
            borderRadius: 10,
          }}
        >
          <View className=" w-[126px] h-[126px] mt-3">
            <Image
              source={require("../../../../../../assets/images/person2.png")}
              style={{
                width: "100%",
                height: "100%",
                //   borderRadius: 100,
              }}
            />
          </View>
          <View>
            <Text className="text-[15px] font-[500] font-[Archivo] leading-[16px] my-4">
              Toyota RAV - Yamaha
            </Text>
            <View className="h-[360px] border-dashed border-[.5px] p-5">
              <FleetDetails />
            </View>
          </View>
          <View className="">
            {/* <Text className="text-[12px] font-[700] font-[Archivo] leading-[13px] py-5">
              Capacity Information
            </Text> */}
            <View className="h-[152px] border-dashed border-[.5px] p-5 mt-5">
              <CapacityInformation />
            </View>
          </View>
          <View className="py-5">
            <View className="h-[275px] border-dashed border-[.5px]  px-[24px] ">
              <Text className="text-[12px] font-[500] font-[Archivo] leading-normal mt-4">
                Requested Vehicle to drive
              </Text>
              <View className="items-center my-5">
                <View className=" w-[300px] h-[141px] p-3">
                  <Image
                    source={require("../../../../../../assets/images/car2.png")}
                    style={{
                      width: "100%",
                      height: "100%",
                      //   borderRadius: 100,
                    }}
                  />
                </View>
                <View className="my-3 items-center">
                  <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                    Toyota RAV - Yamaha
                  </Text>
                  <Text className=" w-[85px] text-[8px] rounded-full text-[#FF776C] px-[11] py-[3]  bg-[#FFEBEB] font-[500] font-[Archivo] leading-[10px] my-1">
                    KR-SRUDBA
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
      <CustomButton primary title="Assign" onPress={()=>{
        navigation.navigate("RequestDriverAssign")
      }}/>
    </View>
  );
};

export default RequestBreakdown