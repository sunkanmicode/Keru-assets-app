import { View, Text, TouchableOpacity, Image } from "react-native";
import React from 'react'
import { Ionicons, AntDesign, Octicons,  } from "@expo/vector-icons";
import { CustomButton } from "../../../../customsComp/Input";
import { useNavigation } from "@react-navigation/native";
import CustomBottomSheet from "../../../../customsComp/BottomSheet";
import RaiseAComplaint from "./RaiseAComplaint";


const StatusOrderBearkdown = ({ statusCloseSheet }) => {
      const navigation = useNavigation();

      const ComplaintSheetRef = React.useRef(null);

      const height = 775;

      const complaintCloseSheet = () => {
        if (ComplaintSheetRef.current) {
          ComplaintSheetRef.current.close();
        }
      };
      const complaintOpenSheet = () => {
        if (ComplaintSheetRef.current) {
          ComplaintSheetRef.current.open();
        }
      };
     const tripInformation = [
       {
         icon: <Octicons name="dot-fill" size={12} color="#009B5A" />,
         venue: "Asset Assigned",
         time: "Tue, Mar 28 2023 | 11:01:00",
       },
       {
         icon: <Octicons name="dot-fill" size={12} color="red" />,
         venue: "Asset On route to Pick up",
         time: "Tue, Mar 28 2023 | 11:01:00",
       },
     ];
  return (
    <>
      <View className="flex-1 mx-auto  bg-white">
        <View className="mb-5 flex-row items-center justify-between">
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
            Order Breakdown
          </Text>
          <TouchableOpacity
            onPress={() => {
              statusCloseSheet();
            }}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View
          className="w-[335px] h-[155px] px-[10] py-[16] my-[20px]"
          style={{
            shadowColor: "rgba(0, 0, 0, 0.05)",
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 10,
            elevation: 1,
            borderColor: "#F1F0F0",
            borderWidth: 1,
            // border: 1px solid #F1F0F0
            borderRadius: 10,
          }}
        >
          <View>
            <View className=" w-[241px] h-[53px] flex-row items-center self-center ">
              <View className=" w-[75px] h-[53px]">
                <Image
                  source={require("../../../../../../assets/images/home-img.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 10,
                  }}
                />
              </View>
              <View className="mx-3">
                <Text className="font-[500] text-[12px]  font-[Archivo] leading-[13px] my-2">
                  A bag of Rice | 40kg
                </Text>
                <Text className="font-[500] text-[10px]  font-[Archivo] leading-[10px]">
                  2kg | Qty: 3
                </Text>
              </View>
            </View>

            <View className=" w-[241px] h-[53px] flex-row items-center self-center my-4 ">
              <View className=" w-[105px] h-[48px]">
                <Image
                  source={require("../../../../../../assets/images/car2.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 10,
                  }}
                />
              </View>
              <View className="mx-3">
                <Text className="font-[500] text-[12px]  font-[Archivo] leading-[13px] my-2">
                  Toyota RAV - Yamaha
                </Text>
              </View>
            </View>
          </View>
        </View>
        <View
          className="w-[335px] h-[112px] px-[10] py-[16]"
          style={{
            shadowColor: "rgba(0, 0, 0, 0.05)",
            shadowOffset: { width: 0, height: 1 },
            shadowRadius: 10,
            elevation: 1,
            borderColor: "#F1F0F0",
            borderWidth: 1,
            // border: 1px solid #F1F0F0
            borderRadius: 10,
          }}
        >
          <View className=" w-[200px] h-[80px] items-center">
            {tripInformation.map((item, index) => (
              <>
                <View key={index} className=" flex-row relative mb-6">
                  {item.icon}
                  <View className=" ml-1">
                    <Text className="font-[400] text-[11px]  font-[Archivo] leading-[11px] ">
                      {item.venue}
                    </Text>
                    <Text className="font-[400] text-[10px]  font-[Archivo] leading-[10]">
                      {" "}
                      {item.time}
                    </Text>
                  </View>
                </View>
                <View className="h-[28px] w-[1px]  bg-[#CCCBCB] absolute left-8 top-5" />
              </>
            ))}
          </View>
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Raise a Complaint"
          onPress={() => {
            complaintOpenSheet();
          }}
        />
      </View>
      <CustomBottomSheet
        height={height}
        ref={ComplaintSheetRef}
        message={<RaiseAComplaint complaintCloseSheet={complaintCloseSheet} />}
      />
    </>
  );
};

export default StatusOrderBearkdown