import { View, Text, Modal, TouchableOpacity, Image } from "react-native";
import React from "react";
import { useNavigation } from "@react-navigation/native";
import { useQuery } from "@tanstack/react-query";
import { getMeUser } from "../../../../api_services/user_apis";
import Toast from "react-native-toast-message";

const WalletSetModal = ({ visible, setVisible }) => {
  const navigation = useNavigation();

  const { data: getUserInfoQuery, refetch } = useQuery({
    queryKey: ["get-me"],
    queryFn: getMeUser,
  });

  const handleOnPress = () => {
    if (!getUserInfoQuery?.is_wallet_set) {
      navigation.navigate("CreateWallet");
    } else if (!getUserInfoQuery?.is_pin_set) {
           navigation.navigate("TransactionPinScreen");

    } else {
      navigation.navigate("CreateWallet");
    }
    setVisible(false);
  };

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
        <View className="bg-white  mx-auto rounded-t-lg w-80  h-80 ">
          <View className=" flex-1  p-5 justify-center items-center">
            <View className="bg-[#BAAFE9] w-28 h-24">
              <Image
                source={require("../../../../../assets/images/kyc.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  // borderRadius: 100,
                }}
              />
            </View>
            <Text className="text-base font-semibold font-[Archivo] my-5">
              KYC Required
            </Text>
            <Text className="text-sm font-[300] font-[Archivo] text-center w-48">
              Kindly complete your KYC to the app seamlessly
            </Text>
          </View>
          <View className="flex-row p-4">
            <TouchableOpacity
              className=" flex-1 h-[43px] rounded-full bg-[#BAAFE9] justify-center items-center py-[10px] px-[20px]"
              // onPress={() => {
              //   setVisible(false);
              //   navigation.navigate("CreateWallet");
              // }}
              onPress={handleOnPress}
            >
              <Text className="text-[14px] font-[500] font-[Archivo] leading-[18px] text-white">
                Complete KYC
              </Text>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </Modal>
  );
};

export default WalletSetModal;
