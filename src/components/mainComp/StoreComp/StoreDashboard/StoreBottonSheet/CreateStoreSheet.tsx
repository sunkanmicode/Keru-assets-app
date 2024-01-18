import { View, Text, TouchableOpacity, TextInput } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomInput, { CustomButton } from "../../../../customsComp/Input";
import { useNavigation } from "@react-navigation/native";


const CreateStoreSheet = ({ createStoreCloseSheet, setShowStore }) => {
  const navigation = useNavigation()
  return (
    <>
      <View className="flex-1 p-6 bg-white ">
        <View className="mb-2 flex-row justify-between items-center">
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
            Create Store
          </Text>
          <TouchableOpacity
            onPress={() => {
              createStoreCloseSheet();
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <CustomInput
            whiteBg
            label="Store Name"
            placeholder="Enter Store Name"
          />

          <View>
            <Text className="mb-2">Store Description</Text>
            <View className="h-[123px] px-[13px] py-[16px] border border-[#D3D3D3] rounded-[6px]">
              <TextInput placeholder=" Enter Name" multiline />
            </View>
          </View>

          <CustomInput
            whiteBg
            label="Phone Number"
            placeholder="Enter Phone Number"
          />
        </View>
      </View>
      <View className="m-3">
        <CustomButton primary title="Create Store" onPress={()=>{
          // navigation.navigate("CreateStore");
          setShowStore(true)
        }} />
      </View>
    </>
  );
};

export default CreateStoreSheet