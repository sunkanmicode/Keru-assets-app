import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import CustomInput from '../../../../customsComp/Input';

const FleetFormOne = () => {
  return (
    
      <View>
        <CustomInput
          whiteBg
          label="Name of Vehicle"
          placeholder="Enter Name of Vehicle"
        />
        <View>
          <Text className="font-[400] text-[12px]  font-[Archivo] leading-[13]">
            Image of Goods
          </Text>
          <View className="  h-[157px] border border-dashed">
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
        <View className=" flex-row justify-between">
          <View className="w-[170px]">
            <CustomInput
              whiteBg
              label="Vehicle Maker"
              placeholder="Vehicle Maker"
            />
          </View>
          <View className="w-[170px]">
            <CustomInput
              whiteBg
              label="Vehicle Class"
              placeholder="Vehicle Class"
            />
          </View>
        </View>

        <View className=" flex-row justify-between">
          <View className="w-[170px]">
            <CustomInput
              whiteBg
              label="Seat Number"
              placeholder="Seat Number"
            />
          </View>
          <View className="w-[170px]">
            <CustomInput
              whiteBg
              label="Weight/Tonnes"
              placeholder="Weight/Tonnes"
            />
          </View>
        </View>

        <View className=" flex-row justify-between">
          <View className="w-[170px]">
            <CustomInput whiteBg label="Condition" placeholder="Condition" />
            {/* <CustomDropdown setSelected={setSelected} data={data} /> */}
          </View>
          <View className="w-[170px]">
            <CustomInput whiteBg label="Status" placeholder="Status" />
          </View>
        </View>
      </View>
    
  );
}

export default FleetFormOne;