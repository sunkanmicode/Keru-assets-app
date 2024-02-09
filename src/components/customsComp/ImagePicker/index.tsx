// ImagePicker.js
import React, { useState } from "react";
import { View, Button, Image, Text, TouchableOpacity, StyleSheet } from "react-native";
import { MaterialIcons } from "@expo/vector-icons";
import * as ImagePicker from "expo-image-picker";



const CustomImagePicker = ({
  // onImageChange,
  image,
  setImage,
  style,
  width,
  style2,
  icon,
  message,
}) => {
    // const [image, setImage] = useState(null);

  const uploadImage = async () => {
    try {
      // No permissions request is necessary for launching the image library
      await ImagePicker.requestCameraPermissionsAsync();
      let result = await ImagePicker.launchImageLibraryAsync({
        mediaTypes: ImagePicker.MediaTypeOptions.All,
        allowsEditing: true,
        aspect: [4, 3],
        quality: 1,
      });

      console.log(result.assets, "pppppp");

      if (!result.canceled) {
        setImage(result.assets[0].uri);
        // Call the callback function to pass the image uri to the parent component
        // onImageChange(result.assets[0].uri);
      }
    } catch (error) {
      console.log("error form image upload", error);
    }
  };

  const removeImage = () => {
    try {
      setImage(null);
      // Call the callback function to pass null to the parent component
      // onImageChange(null);
    } catch (error) {
      console.log(error);
    }
  };

//   console.log(onImageChange, "onImageChange");
//   console.log(image, "image");

  return (
    <View style={[styles.wrapper, style]}>
      {image ? (
        <View className=" flex-row items-center">
          {/* <Image source={{ uri: image }} style={{ width: 200, height: 200 }} /> */}
          <Text className="font-normal text-[10px] font-[Archivo]  text-center w-28">
            Image Namekkkkkkkkkkkhhojjjkj999999
          </Text>
          <TouchableOpacity
            onPress={removeImage}
            className="bg-red-100 w-10 h-10 items-center justify-center rounded-full mx-5"
          >
            <MaterialIcons name="delete-outline" size={24} color="red" />
          </TouchableOpacity>
        </View>
      ) : (
        <TouchableOpacity onPress={uploadImage}>
          <View style={style2} className="">
            {icon}
            <Text className="font-normal text-[10px] font-[Archivo]  text-center">
              {message}
            </Text>
          </View>
        </TouchableOpacity>
      )}
    </View>
  );
};

const styles = StyleSheet.create({
  wrapper: {
    // width: width,
    height: 100,
    // justifyContent: "center",
    // borderColor: "red",
    // borderWidth: 1,
    // alignItems:"center"
    borderRadius: 5,
    borderStyle: "dashed",
  },
});

export default CustomImagePicker;
