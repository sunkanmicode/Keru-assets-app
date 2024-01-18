import { View, Text, TouchableOpacity, ScrollView, Image } from "react-native";
import React from 'react'
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import { CustomButton } from "../../../customsComp/Input";
import CustomModal from "../../../customsComp/CustomModal";
import { useNavigation } from "@react-navigation/native";

const HireBreakDownSheet = ({
  closeSeeOrderSheet,
  pickUpAndDestination,
  tripInformation,
}) => {
    const [visible, setVisible] = React.useState(false);
    const navigation = useNavigation()
  return (
    <>
      <ScrollView
        showsVerticalScrollIndicator={false}
        className="flex-1 p-[20px] mx-auto bg-white "
      >
        <CustomModal visible={visible} setVisible={setVisible} />

        <View className="mb-5 flex-row items-center justify-between">
          <TouchableOpacity
            onPress={() => {
              closeSeeOrderSheet();
            }}
          >
            <Ionicons name="close" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
            Hire Breakdown
          </Text>
          <View />
        </View>
        <View
          className="w-[335px] h-[247px]  py-[16px] px-[10px]"
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
          <View className="flex-row justify-between items-center mb-7">
            <View>
              <View className="w-[103px] h-[68] mb-3">
                <Image
                  source={require("../../../../../assets/images/home-img.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    borderRadius: 20,
                  }}
                />
              </View>
              <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] text-[#0B0B0B]">
                A bag of Rice | 40kg
              </Text>
            </View>
            <View>
              <View className="w-[157] h-[83] p-2">
                <Image
                  source={require("../../../../../assets/images/car1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
              <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px] text-[#0B0B0B]">
                Toyota RAV - Yamaha
              </Text>
            </View>
          </View>
          <View className="w-[200px] h-[80px] m-auto">
            {pickUpAndDestination.map((item, index) => (
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
                <View className="h-[28px] w-[1px]  bg-[#CCCBCB] absolute left-0.5 top-5" />
              </>
            ))}
          </View>
        </View>
        <View>
          <Text className="font-[700] text-[14px]  font-[Archivo] leading-[15] my-5">
            Driver’s Contact
          </Text>
          <View className="w-[210px] flex-row items-center justify-around">
            <View className="w-[59px] h-[59]">
              <Image
                source={require("../../../../../assets/images/home-img.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                }}
              />
            </View>
            <View>
              <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                Olunloyo Walai
              </Text>
              <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
                +23481992000222
              </Text>
            </View>
          </View>
          <View>
            <View className="h-[33px] w-[126px] bg-[#F2EFFE] items-center justify-center rounded-full my-5">
              <Text className="  text-[12px]  text-[#7065A0] font-[500] font-[Archivo] leading-[13px]">
                Trip Information
              </Text>
            </View>
            <View className="w-[200px]">
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
                  <View className="h-[28px] w-[1px]  bg-[#CCCBCB] absolute left-0.5 top-5" />
                </>
              ))}
            </View>
          </View>
        </View>
      </ScrollView>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
        <CustomButton
          danger
          title="End Trip"
            onPress={() => {
              setVisible(true);
            }}
        />
      </View>
    </>
  );
};

export default HireBreakDownSheet