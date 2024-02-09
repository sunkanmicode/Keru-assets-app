import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const SettingsComp = ({ otherMenu, securityData, supportData }) => {
  const navigation = useNavigation();
  return (
    <View className="flex-1  bg-white p-6">
      <View className=" py-6 mb-5 flex-row items-center">
        <TouchableOpacity
          className="mr-4"
          onPress={() => {
            navigation.goBack();
          }}
        >
          <AntDesign name="arrowleft" size={24} color="black" />
        </TouchableOpacity>
      </View>
      <View>
        <View className=" h-[55px] flex-row justify-between items-center ">
          <View>
            <Text className="text-[20px] font-[600] font-[Archivo] leading-[21.16px] ">
              Samuel Jason
            </Text>
            <Text className="text-[12px] font-[400] font-[Archivo] leading-[13px] ">
              Customer ID: 223455
            </Text>
          </View>
          <View className=" w-[55px] h-[55px] rounded-full bg-[#F2EFFE] items-center justify-center">
            <Text className="text-[20px] font-[600] font-[Archivo] leading-[26px] text-[#007FFF]">
              AB
            </Text>
          </View>
        </View>
        <TouchableOpacity
          className="h-[34px] w-[94] rounded-full bg-[#BAAFE9] justify-center items-center mt-2"
          onPress={() => {
            navigation.navigate("EditProfile");
          }}
        >
          <Text className="text-[10px] font-[600] font-[Archivo] leading-[13px] text-white">
            Edit Profit
          </Text>
        </TouchableOpacity>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className=" h-5/6 mt-10"
        >
          <View>
            <Text className="text-[10px] font-normal font-[Archivo] leading-[10px] mb-3">
              Other menu
            </Text>
            <View className=" mx-1 h-auto bg-white p-3 shadow shadow-black/40 rounded-[10px]">
              {otherMenu.map((item, index) => (
                <TouchableOpacity
                  className="flex-row justify-between items-center my-4"
                  key={index}
                  onPress={item.onPress}
                >
                  <View className="flex-row items-center">
                    <View className="w-[36px] h-[36px] bg-[#F2EFFE] justify-center items-center rounded-full">
                      {item.icon}
                    </View>
                    <View className="mx-3">
                      <Text className="text-[12px] font-[600] font-[Archivo] leading-[13px]">
                        {item.title}
                      </Text>
                      <Text className="text-[10px] font-[600] font-[Archivo] leading-[10px]">
                        {item.desc}
                      </Text>
                    </View>
                  </View>

                  <Ionicons name="chevron-forward" size={24} color="black" />
                </TouchableOpacity>
              ))}

              {/* <View className="flex-row justify-between items-center">
                <View className="flex-row items-center">
                  <View className="w-[36px] h-[36px] bg-[#F2EFFE] justify-center items-center rounded-full">
                    <AntDesign name="wallet" size={20} color="#BAAFE9" />
                  </View>
                  <View className="mx-3">
                    <Text className="text-[12px] font-[600] font-[Archivo] leading-[13px]">
                      Wallet
                    </Text>
                    <Text className="text-[10px] font-[600] font-[Archivo] leading-[10px]">
                      See any Paylow agent around you
                    </Text>
                  </View>
                </View>

                <Ionicons name="chevron-forward" size={24} color="black" />
              </View> */}
            </View>
          </View>

          <View className="mt-5">
            <Text className="text-[10px] font-[400] font-[Archivo] leading-[10px] mb-3">
              security
            </Text>
            <View className="  h-[206px] border-[.05px] p-3 shadow shadow-black/5 rounded-[10px]">
              {securityData.map((item) => (
                <View>
                  <TouchableOpacity
                    className="flex-row justify-between items-center my-4"
                    onPress={item.onPress}
                  >
                    <View className="flex-row items-center">
                      <View className="w-[36px] h-[36px] bg-[#F2EFFE] justify-center items-center rounded-full">
                        {item.icon}
                      </View>
                      <View className="mx-3">
                        <Text className="text-[12px] font-[600] font-[Archivo] leading-[13px]">
                          {item.title}
                        </Text>
                        <Text className="text-[10px] font-[600] font-[Archivo] leading-[10px]">
                          {item.desc}
                        </Text>
                      </View>
                    </View>

                    {item.nextIcon}
                  </TouchableOpacity>
                  {/* <View className="h-0.5 bg-gray-100" /> */}
                </View>
              ))}
            </View>
          </View>

          <View className="mt-5 mb-[100px]">
            <Text className="text-[10px] font-[400] font-[Archivo] leading-[10px] mb-3">
              Support
            </Text>
            <View className="h-[206px] mb-11 border-[.05px] p-3 shadow shadow-black/5 rounded-[10px]">
              {supportData.map((item) => (
                <>
                  <TouchableOpacity
                    className="flex-row justify-between items-center my-4"
                    onPress={item.onPress}
                  >
                    <View className="flex-row items-center">
                      <View className="w-[36px] h-[36px] bg-[#F2EFFE] justify-center items-center rounded-full">
                        {item.icon}
                      </View>
                      <View className="mx-3">
                        <Text className="text-[12px] font-[600] font-[Archivo] leading-[13px]">
                          {item.title}
                        </Text>
                        <Text className="text-[10px] font-[600] font-[Archivo] leading-[10px]">
                          {item.desc}
                        </Text>
                      </View>
                    </View>

                    {item.nextIcon}
                  </TouchableOpacity>
                  {/* <View className="h-0.5 bg-gray-100" /> */}
                </>
              ))}
            </View>
          </View>
        </ScrollView>
      </View>
    </View>
  );
};

export default SettingsComp