import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { AntDesign, Ionicons } from "@expo/vector-icons";
import CustomInput, { CustomButton } from "../../../../customsComp/Input";
import CustomBottomSheet from "../../../../customsComp/BottomSheet";

const CreateProductSheet = ({ CreateProductCloseSheet, setShowProduct }) => {
  return (
    <>
      <View className="flex-1 p-6 bg-white ">
        <View className="mb-2 flex-row justify-between items-center">
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
            Add Stock
          </Text>
          <TouchableOpacity
            onPress={() => {
              CreateProductCloseSheet();
            }}
          >
            <AntDesign name="close" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <View>
          <CustomInput
            whiteBg
            label="Name of Stock"
            placeholder="Enter Name of Stock"
          />
          <CustomInput
            whiteBg
            label="Stock Description"
            placeholder="Enter Stock Description"
          />
          <CustomInput whiteBg label="Price" placeholder="Enter Price" />
          <CustomInput whiteBg label="Quantity" placeholder="Enter Quantity" />
          <View>
            <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
              Image of Goods
            </Text>
            <View className="  h-[157px] border border-dashed border-[#D3D3D3] mt-3">
              <TouchableOpacity className="  h-[105px] m-auto">
                <View className=" w-[66px] h-[66px] bg-[#EDE9FF] m-auto rounded-full justify-center items-center">
                  <Ionicons
                    name="cloud-upload-outline"
                    size={24}
                    color="#BAAFE9"
                  />
                </View>

                <Text className="font-[400] text-[10px] font-[Archivo] leading-[16] text-center w-[200px] ">
                  Drop your file here to upload or select from storage
                </Text>
              </TouchableOpacity>
            </View>
          </View>
        </View>
      </View>
      <CustomButton primary title="Add Stock" onPress={()=>{
        setShowProduct(true)
      }} />
    </>
  );
};

export default CreateProductSheet