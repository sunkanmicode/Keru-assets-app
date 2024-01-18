import { View, Text, Modal, TouchableOpacity } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";

const CustomModal = ({ visible, setVisible,  }) => {
  const navigation = useNavigation()
  return (
    <Modal
      visible={visible}
      transparent
      animationType="slide"
      hardwareAccelerated
    >
      <View
        className="justify-center flex-1"
        style={{ backgroundColor: "rgba(0,0,0,0.6)" }}
      >
        <View
          className="bg-white self-center rounded-[20px] w-[335px] h-[197px] justify-center items-center"
        >
          <View className="w-[209] h-[30]">
            <Text className="text-[14px] font-[400] font-[Archivo] leading-[15px] text-center">
              Your goods has been delivered, Do you want to end the trip?
            </Text>
          </View>
          <View className="flex-row px-[20px] my-5 ">
            <TouchableOpacity className=" flex-1 h-[43px] rounded-full bg-[#BAAFE9] justify-center items-center bg-transparent border border-[#BAAFE9] py-[10px] px-[20px]" onPress={()=>{
              setVisible(false)
            }}>
              <Text className="text-[14px] font-[500] font-[Archivo] leading-[18px] text-[#434343]">
                No, don’t
              </Text>
            </TouchableOpacity>
            <View style={{ width: 20 }} />
            <TouchableOpacity className=" flex-1 h-[43px] rounded-full bg-[#BAAFE9] justify-center items-center py-[10px] px-[20px]" onPress={()=>{
                setVisible(false)
              navigation.navigate("ReviewServiceComp");

                
              }}>
              <Text className="text-[14px] font-[500] font-[Archivo] leading-[18px] text-white">
                End Trip
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default CustomModal;