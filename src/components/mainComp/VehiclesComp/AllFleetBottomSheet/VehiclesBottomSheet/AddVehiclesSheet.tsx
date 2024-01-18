import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import CustomInput, { CustomButton } from "../../../../customsComp/Input";
import CustomDropdown from "../../../../customsComp/CustomDropDown";
import { useNavigation } from "@react-navigation/native";
import FleetFormOne from "./FleetFormOne";
import FleetFormTwo from "./FleetFormTwo";
import FleetPreviewSheet from "./FleetDetails/FleetPreviewSheet";


const AddVehiclesSheet = ({ fleetCloseSheet }) => {
  const navigation = useNavigation()
    const [formStep, setFormStep] = React.useState(0);


    const nextStepForm = () => {
      setFormStep((cur) => cur + 1);
    };
    const prevStepForm = () => {
      if (formStep === 0) {
        return navigation.goBack();
      }
      setFormStep((cur) => cur - 1);
    };
  return (
    <>
      <View className="flex-1 p-6 bg-white ">
        {formStep == 1 && (
          <View className="mb-5 flex-row items-center">
            <TouchableOpacity
              onPress={() => {
                prevStepForm();
              }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
              Add Vehicle
            </Text>
          </View>
        )}
        {formStep == 2 && (
          <View className="mb-5 flex-row items-center">
            <TouchableOpacity
              onPress={() => {
                prevStepForm();
              }}
            >
              <Ionicons name="arrow-back" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
              Details
            </Text>
          </View>
        )}
        {formStep == 0 && (
          <View className="mb-5 flex-row items-center justify-between">
            <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px] text-center">
              Add Vehicle
            </Text>
            <TouchableOpacity
              onPress={() => {
                fleetCloseSheet();
              }}
            >
              <Ionicons name="close" size={24} color="black" />
            </TouchableOpacity>
          </View>
        )}

        {formStep == 0 && <FleetFormOne />}
        {formStep == 1 && <FleetFormTwo />}
        {formStep == 2 && <FleetPreviewSheet />}
      </View>
      {formStep >=0 && formStep <=1  &&
      <View className="w-[360px] mb-3 self-center">
        <CustomButton
          primary
          title="Next"
          onPress={() => {
            nextStepForm();
          }}
        />
      </View>
      }
      {formStep == 2 && (
        <View className="w-[360px] mb-3 self-center">
          <CustomButton
            primary
            title="Add Vehicle"
            onPress={() => {
             navigation.navigate("FleetSuccess")
            }}
          />
        </View>
      )}
    </>
  );
};

export default AddVehiclesSheet