import React from "react";
import { View, Text, TouchableOpacity, TextInput, Image } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Feather } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";

const HomeHeaderComp = ({ categoriesIndex, setCategoriesIndex }) => {
  const navigation = useNavigation();

  const categoriesData = [
    {
      name: "Account Details",
      onPress: () => {},
    },
    {
      name: "Analytics",
      onPress: () => {},
    },
  ];
  return (
    <>
      <View className="pt-10 pb-5 px-6  bg-[#000]">
        <View className="flex-row mt-5 justify-between">
          <TouchableOpacity
            className="flex-row items-center"
            onPress={() => {
              navigation.navigate("SettingsScreen");
            }}
          >
            <View className="bg-[#BAAFE9] w-[34] h-[34] rounded-full">
              <Image
                source={require("../../../../../assets/images/home-img.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  borderRadius: 100,
                }}
              />
            </View>
            <View className="mx-2">
              <Text className="text-[12px] text-white font-[500] font-[Archivo] leading-[13px]">
                Welcome
              </Text>
              <Text className="text-[10px] text-white font-[400] font-[Archivo] leading-[10px]">
                Jane
              </Text>
            </View>
          </TouchableOpacity>

          <View className=" flex-row">
            <TouchableOpacity
              className="mx-3"
              onPress={() => {
                navigation.navigate("StoreStackNavigation", {
                  screen: "StoreCartScreen",
                });
              }}
            >
              <Ionicons name="md-cart-outline" size={24} color="#fff" />
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                navigation.navigate("NotificationComp");
              }}
            >
              <Ionicons name="notifications-outline" size={24} color="#ffff" />
            </TouchableOpacity>
          </View>
        </View>

        {/* <View className="flex-row  items-center"> */}
        <View className="flex-row mt-10 ">
          {categoriesData.map((item: any, index: number) => (
            <>
              <TouchableOpacity
                key={index}
                className={`flex-1 h-[35px]  rounded-full bg-transparent  justify-center items-center py-[10px] px-[20px] ${
                  categoriesIndex == index && "bg-[#BAAFE9]"
                }`}
                onPress={() => {
                  setCategoriesIndex(index);
                }}
              >
                <Text
                  className={`text-[14px] font-[500] font-[Archivo] leading-[18px] text-[#909090] ${
                    categoriesIndex == index && "text-white"
                  }`}
                >
                  {item.name}
                </Text>
              </TouchableOpacity>
              <View style={{ width: 20 }} />
            </>
          ))}
          {/* </View> */}
        </View>
      </View>
    </>
  );
};

export default HomeHeaderComp;
