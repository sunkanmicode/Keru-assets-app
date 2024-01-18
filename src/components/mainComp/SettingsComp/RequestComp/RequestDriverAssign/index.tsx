import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomInput, { CustomButton } from "../../../../customsComp/Input";


const RequestDriverAssign = () => {
    const navigation = useNavigation()
     const data = [
       {
         image: require("../../../../../../assets/images/person1.png"),
         name: " Toyota RAV - Yamaha",
         model: "23 yrs Old",
         class: "ogunsuagabriel@gmail.com | 09099967628",
         status: "ACTIVE",
       },
       {
         image: require("../../../../../../assets/images/person1.png"),
         name: " Toyota RAV - Yamaha",
         model: "23 yrs Old",
         class: "ogunsuagabriel@gmail.com | 09099967628",
         status: "ACTIVE",
       },
       {
         image: require("../../../../../../assets/images/person1.png"),
         name: " Toyota RAV - Yamaha",
         model: "23 yrs Old",
         class: "ogunsuagabriel@gmail.com | 09099967628",
         status: "DISABLED",
       },
     ];
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
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
            Requests
          </Text>
        </View>
        <View>
          <CustomInput whiteBg placeholder="scearch" />
          <ScrollView>
            {data.map((item, index) => (
              <>
                <TouchableOpacity
                  className="h-[67px] flex-row justify-between p-2 my-2"
                  key={index}
                  onPress={() => {
                    // navigation.navigate("");
                  }}
                >
                  <View className=" flex-row">
                    <View className=" w-[40px] h-[40px] rounded-full">
                      <Image
                        source={item.image}
                        style={{
                          width: "100%",
                          height: "100%",
                          //   borderRadius: 100,
                        }}
                      />
                    </View>
                    <View className="mx-2">
                      <Text className="text-[12px] font-[500] font-[Archivo] leading-[13px]">
                        {item.name}
                      </Text>
                      <Text className=" w-[85px] text-[8px] rounded-full px-[11] py-[3] font-[500] font-[Archivo] leading-[10px] my-1">
                        {item.model}
                      </Text>
                      <Text className="text-[8px] font-[500] font-[Archivo] leading-[13px]">
                        {item.class}
                      </Text>
                    </View>
                  </View>
                </TouchableOpacity>

                <View className="h-0.5 bg-[#F1F0F0] my-2" />
              </>
            ))}
          </ScrollView>
        </View>
      </View>

      <View className="mx-5">
        <CustomButton primary title="Assign" onPress={()=>{
            navigation.navigate("RequestDriverSuccess");
        }} />
      </View>
    </>
  );
}

export default RequestDriverAssign