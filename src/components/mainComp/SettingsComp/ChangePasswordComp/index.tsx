import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import CustomInput, { CustomButton } from "../../../customsComp/Input";

const ChangePasswordComp = () => {
  const navigation = useNavigation();
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);

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
            Change Password
          </Text>
          <View>
            <CustomInput
              primary
              label="Old Password"
              placeholder="Enter your password"
              iconPostion="right"
              name="oldPassword"
              secureTextEntry={isSecureEntry}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry((prev: boolean) => !prev);
                  }}
                >
                  {/* <FontAwesome5 name="eye" size={24} color="black" /> */}

                  {isSecureEntry ? (
                    <Ionicons
                      name="eye-off-outline"
                      size={24}
                      color="#292D32"
                    />
                  ) : (
                    <Ionicons name="eye-outline" size={24} color="#292D32" />
                  )}
                </TouchableOpacity>
              }
            />
            <CustomInput
              primary
              label="New Password"
              placeholder="Enter your password"
              iconPostion="right"
              name="newPassword"
              secureTextEntry={isSecureEntry}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry((prev: boolean) => !prev);
                  }}
                >
                  {/* <FontAwesome5 name="eye" size={24} color="black" /> */}

                  {isSecureEntry ? (
                    <Ionicons
                      name="eye-off-outline"
                      size={24}
                      color="#292D32"
                    />
                  ) : (
                    <Ionicons name="eye-outline" size={24} color="#292D32" />
                  )}
                </TouchableOpacity>
              }
            />
            <CustomInput
              primary
              label="Confirm Password"
              placeholder="Enter your password"
              iconPostion="right"
              name="confirmPassword"
              secureTextEntry={isSecureEntry}
              icon={
                <TouchableOpacity
                  onPress={() => {
                    setIsSecureEntry((prev: boolean) => !prev);
                  }}
                >
                  {/* <FontAwesome5 name="eye" size={24} color="black" /> */}

                  {isSecureEntry ? (
                    <Ionicons
                      name="eye-off-outline"
                      size={24}
                      color="#292D32"
                    />
                  ) : (
                    <Ionicons name="eye-outline" size={24} color="#292D32" />
                  )}
                </TouchableOpacity>
              }
            />
          </View>
        </View>
      </View>
      <View className="bg-white w-[390px] h-[63px] px-[14] py=[20] self-center shadow-lg shadow-black/100">
        <CustomButton
          primary
          title="Save"
            onPress={() => {
              navigation.navigate("PasswordSccessComp");
            }}
        />
      </View>
    </>
  );
};

export default ChangePasswordComp;
