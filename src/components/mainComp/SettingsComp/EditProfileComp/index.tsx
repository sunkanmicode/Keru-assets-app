import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomInput, { CustomButton } from "../../../customsComp/Input";

const EditProfileComp = () => {
    const navigation = useNavigation()
  return (
    <>
      
      <View className="flex-1 bg-white p-6">
        <View className="py-6 mb-5 flex-row items-center">
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
          <Text className="text-[20px] font-[600] font-[Archivo] leading-[21px]">
            Edit Profile
          </Text>

          <CustomInput
            primary
            label="First Name"
            name="FirstName"
            placeholder="Joe"
          />
          <CustomInput
            primary
            label="Last Name"
            name="LastName"
            placeholder="Jane"
          />
          <CustomInput
            primary
            label="Phone Number"
            name="phoneNume"
            placeholder="08076767788"
          />
          <CustomInput
            primary
            label="Email Address"
            placeholder="example@gmail.com"
          />
        </View>
      </View>
      <CustomButton primary title="Save" onPress={()=>{
        navigation.navigate("EditSuccessComp")
      }}/>
    </>
  );
}

export default EditProfileComp