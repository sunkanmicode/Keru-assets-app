import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import React from 'react'

const RecommandedVehicleComp = () => {
  const navigation = useNavigation();

  const VehiclesData = [
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
      model: "KR-SRUDBA",
      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
      model: "KR-SRUDBA",
      features: [
        {
          title: " 4 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
      model: "KR-SRUDBA",
      features: [
        {
          title: "  8 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
      model: "KR-SRUDBA",
      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
      model: "KR-SRUDBA",
      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
      model: "KR-SRUDBA",
      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
      model: "KR-SRUDBA",
      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
      model: "KR-SRUDBA",
      features: [
        {
          title: " 6 seats",
        },
        {
          title: " Sienna",
        },
        {
          title: " ford",
        },
      ],
    },
  ];

  return (
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
        <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
          Recommended Vehicles
        </Text>
      </View>
      <View className=" flex-1">
        <FlatList
          className=" mx-auto "
          showsVerticalScrollIndicator={false}
          numColumns={2}
          data={VehiclesData}
          renderItem={({ item }) => (
            <TouchableOpacity
              className="w-[163px] h-[232px] px-[10px] py-[16px] m-1 border border-[#F1F0F0] rounded-[10px] "
              style={{
                shadowColor: "rgba(0, 0, 0, 0.05)",
                shadowOffset: { width: 0, height: 1 },
                shadowRadius: 10,
                elevation: 3,
              }}
              onPress={() => {
                navigation.navigate("VehicleDetailsScreen");
              }}
            >
              
              <View className="w-[143] h-[81]">
                <Image
                  source={require("../../../../../assets/images/car1.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
              
              <Text className="text-[11px]  font-[500] font-[Archivo] leading-[13px]">
                Toyota RAV - Yamaha
              </Text>
              <View className="h-[15px] w-[80px] bg-[#F2EFFE] items-center justify-center rounded-full my-2">
                <Text className="  text-[10px]  text-[#7065A0] font-[500] font-[Archivo] leading-[10px]">
                  KR-SRUDBA
                </Text>
              </View>
              
              <View className=" flex-row justify-around items-center">
                <Text className="text-[10px] text-[#007FFF]  font-[500] font-[Archivo] leading-[10px]">
                  6 Seats{" "}
                </Text>
                <View className=" h-3 w-0.5 bg-[#505050] mb-1" />
                <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px]">
                  Sienna{" "}
                </Text>
                <View className=" h-3 w-0.5 bg-[#505050]" />
                <Text className="text-[10px]  font-[500] font-[Archivo] leading-[10px]">
                  Ford
                </Text>
              </View>
              

              <TouchableOpacity className="h-[33px] bg-[#BAAFE9] justify-center items-center rounded-full my-5">
                <Text className="text-[12px] text-white font-[500] font-[Archivo] leading-[12px]">
                  Hire Asset
                </Text>
              </TouchableOpacity>
             
            </TouchableOpacity>
          )}
        />
      </View>
    </View>
  );
}

export default RecommandedVehicleComp