import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Octicons } from "@expo/vector-icons";
import CustomInput from "../../../../customsComp/Input";
import CustomDropdown from "../../../../customsComp/CustomDropDown";
import { useNavigation } from "@react-navigation/native";
import * as ImagePicker from "expo-image-picker";
import FleetFormOne from "./FleetFormOne";
import FleetFormTwo from "./FleetFormTwo";
import FleetPreviewSheet from "./FleetDetails/FleetPreviewSheet";
import { useForm, Controller } from "react-hook-form";
import { CustomButton } from "../../../../customsComp/CustomButton";
import { useMutation } from "@tanstack/react-query";
import Toast from "react-native-toast-message";
import { uploadImageApi } from "../../../../../api_services/uploadImage_apis";
import axios from "axios";

const FormData = global.FormData;
const ROOT_URL = "https://plankton-app-vu2zs.ondigitalocean.app/api/v1";

const AddVehiclesSheet = ({ fleetCloseSheet }) => {
  const navigation = useNavigation();
  const [formStep, setFormStep] = React.useState(0);
  const [image, setImage] = React.useState(null);
  const [selectLocalFile, setSelectLocalFile] = React.useState(null);

  const { control, handleSubmit, formState } = useForm();

  const uploadImageMutation = useMutation({
    mutationFn: uploadImageApi,
    onSuccess: (data: any) => {
      // console.log(data);
      Toast.show({
        type: "success",
        text2: `${data?.message}`,
      });
      // navigation.navigate("VerifyAccountScreen");
      console.log(data, "uploading000");
    },
    onError: (error: any) => {
      console.log(error, "yesss");
      Toast.show({
        type: "error",
        text1: `${error?.response?.data?.message}`,
      });
    },
  });

  //handle image upload
  const onFileSelected = async (image) => {
    setSelectLocalFile(image);
    let fileInfo = {
      uri: image,
      type: "image/jpeg",
      name: "file.jpg",
    };

    const formData = new FormData();
    formData.append("file", fileInfo);

    uploadImageMutation.mutate(formData);
  };

  // const handlePress = ()=>{
  //   uploadImageMutation.mutate({
  //     file:image
  //   })

  // }

  const onSubmit = (data) => {
    console.log(data);
  };

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

        {formStep == 0 && (
          <FleetFormOne
            control={control}
            Controller={Controller}
            // uploadImage={uploadImage}
            image={selectLocalFile}
            // removeImage={removeImage}
            onFileSelected={onFileSelected}
          />
        )}
        {formStep == 1 && <FleetFormTwo />}
        {formStep == 2 && <FleetPreviewSheet />}
      </View>
      {formStep >= 0 && formStep <= 1 && (
        <View className="w-[360px] mb-3 self-center">
          <CustomButton
            primary
            title="Next"
            onPress={() => {
              nextStepForm();
            }}
          />
        </View>
      )}
      {formStep == 2 && (
        <View className="w-[360px] mb-3 self-center">
          <CustomButton
            primary
            title="Add Vehicle"
            // onPress={() => {
            //  navigation.navigate("FleetSuccess")
            // }}
            onPress={handleSubmit(onSubmit)}
          />
        </View>
      )}
    </>
  );
};

export default AddVehiclesSheet;
