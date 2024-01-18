import {
  View,
  Text,
  TouchableOpacity,
  Image,
  TextInput,
  ScrollView,
} from "react-native";
import React from "react";
import { AntDesign, Octicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomInput, { CustomButton } from "../../../customsComp/Input";
import SetLocationFormOne from "../SetLocationFormOne";
import SetLocationFormTwo from "../SetLocationaFormTwo";
import VehicleSummarySheet from "../VehicleSummarySheet";
import CustomBottomSheet from "../../../customsComp/BottomSheet";

const SetVehicleLocationnComp = ({
  formStep,
  setFormStep,
  prevStepForm,
  nextStepForm,
  openSheet,
  closeSheet,
  height,
  SetLocationsheetRef,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <ScrollView className="flex-1 bg-white p-6">
        <View className="py-6 mb-10 flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              prevStepForm();
              // navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
            Set Location
          </Text>
        </View>
        {formStep === 0 && <SetLocationFormOne />}

        {formStep === 1 && <SetLocationFormTwo />}
      </ScrollView>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/100">
        {formStep == 1 ? (
          <CustomButton
            primary
            title="Hire Asset"
            onPress={() => {
              openSheet();
            }}
          />
        ) : (
          <CustomButton
            primary
            title="Hire Asset"
            onPress={() => {
              nextStepForm();
            }}
          />
        )}
      </View>
      <View>
        <CustomBottomSheet
          ref={SetLocationsheetRef}
          height={height}
          message={<VehicleSummarySheet closeSheet={closeSheet} />}
        />
      </View>
    </>
  );
};

export default SetVehicleLocationnComp;
