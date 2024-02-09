import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { Ionicons, AntDesign, Octicons, EvilIcons } from "@expo/vector-icons";
import CustomInput from "../../../../customsComp/Input";
import { useNavigation } from "@react-navigation/native";
import { Image } from "react-native";
import CustomImagePicker from "../../../../customsComp/ImagePicker";


const FleetFormOne = ({
  control,
  Controller,
  // uploadImage,
  image,
  // removeImage,
  onFileSelected,
}) => {
  const navigation = useNavigation();

  return (
    <View>
      <Controller
        control={control}
        name="vehicleName"
        rules={{
          required: "Vehicle Name is required",
        }}
        render={({
          field: { value, onChange, onBlur },
          fieldState: { error },
        }) => (
          <CustomInput
            whiteBg
            label="Name of Vehicle"
            placeholder="Enter Name of Vehicle"
            value={value}
            onChangeText={onChange}
            error={error?.message}
          />
        )}
      />
      <View className="my-2">
        <Text className="font-normal text-xs  font-[Archivo] leading-[13]">
          Image of Goods
        </Text>
        {/* <View className="h-40 border border-dashed border-[#D3D3D3] justify-center items-center">
          {image ? (
            <>
              <View className="bg-[#BAAFE9] w-44 h-32">
                <Image
                  source={{ uri: image }}
                  style={{
                    width: "100%",
                    height: "100%",
                    // borderRadius: 100,
                  }}
                />
              </View>

              <TouchableOpacity className="flex-row">
                <Text className="text-[#BAAFE9]" onPress={uploadImage}>
                  Replace file
                </Text>
                <Text className="text-red-300 mx-10" onPress={removeImage}>
                  Remove file
                </Text>
              </TouchableOpacity>
            </>
          ) : (
            <TouchableOpacity
              className="  h-[105px] mx-auto"
              onPress={uploadImage}
            >
              <View className=" w-16 h-16 bg-[#EDE9FF] m-auto rounded-full justify-center items-center">
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
          )}
        </View> */}
      </View>

      <View>
        <CustomImagePicker
          style={{
            // backgroundColor: "blue",
            // width: 25,
            justifyContent: "center",
            alignItems: "center",
            height: 160,
            borderWidth: 1,
            borderColor: "#D3D3D3",
          }}
          style2={{
            // flexDirection:"row",
            alignItems: "center",
          }}
          // setImage={onFileSelected}
          // image={image}
          icon={
            <Ionicons name="cloud-upload-outline" size={24} color="#BAAFE9" />
          }
          message="Drop your file here to upload or select from storage"
        />
      </View>
      <View className="my-3">
        <CustomImagePicker
          style={{
            backgroundColor: "#FCFCFD",
            // width: 25,
            justifyContent: "center",
            alignItems: "center",
            height: 50,
            borderWidth: 1,
            borderColor: "#D3D3D3",
          }}
          style2={{
            flexDirection: "row",
            alignItems: "center",
          }}
          setImage={onFileSelected}
          image={image}
          icon={<EvilIcons name="plus" size={24} color="#BAAFE9" />}
          message="Upload Image"
        />
      </View>

      <View className=" flex-row justify-between">
        <View className="w-40">
          <CustomInput
            whiteBg
            label="Vehicle Maker"
            placeholder="Vehicle Maker"
          />
        </View>
        <View className="w-40">
          <CustomInput
            whiteBg
            label="Vehicle Class"
            placeholder="Vehicle Class"
          />
        </View>
      </View>

      <View className=" flex-row justify-between">
        <View className="w-40">
          <CustomInput whiteBg label="Seat Number" placeholder="Seat Number" />
        </View>
        <View className="w-40">
          <CustomInput
            whiteBg
            label="Weight/Tonnes"
            placeholder="Weight/Tonnes"
          />
        </View>
      </View>

      <View className=" flex-row justify-between">
        <View className="w-40">
          <CustomInput whiteBg label="Condition" placeholder="Condition" />
          {/* <CustomDropdown setSelected={setSelected} data={data} /> */}
        </View>
        <View className="w-40">
          <CustomInput whiteBg label="Status" placeholder="Status" />
        </View>
      </View>
    </View>
  );
};

export default FleetFormOne;
