import { View, Text, ScrollView, Image, TouchableOpacity } from "react-native";
import React from 'react'
import WalletHeaderComp from "./WalletHeaderComp";
import { useNavigation } from '@react-navigation/native';

const WalletComp = () => {
 const navigation = useNavigation();
  
  const transactionsData = [
    {
      img: require("../../../../../assets/images/mtn_logo.png"),
      transTitle: "Airtime 2 Cash",
      transDate: "05/03/2023 . 7:23 AM",
      transAmount: "  N3000",
      transRecept: "ID:213773799",
    },
    {
      img: require("../../../../../assets/images/ie.png"),
      transTitle: "Airtime 2 Cash",
      transDate: "05/03/2023 . 7:23 AM",
      transAmount: "  N3000",
      transRecept: "ID:213773799",
    },
    {
      img: require("../../../../../assets/images/gtb.png"),
      transTitle: " Wallet Funded",
      transDate: "05/03/2023 . 7:23 AM",
      transAmount: "  N3000",
      transRecept: "ID:213773799",
    },
    {
      img: require("../../../../../assets/images/waec.png"),
      transTitle: "Exam Bill Payment",
      transDate: "05/03/2023 . 7:23 AM",
      transAmount: "  N3000",
      transRecept: "ID:213773799",
    },
  ];


  return (
    <View className="flex-1 bg-black">
      <WalletHeaderComp />
      <ScrollView className="bg-white rounded-t-2xl p-6">
        <View>
          <Text className="text-[12px] font-[500] font-[Archivo] leading-[15px]">
            Transactions
          </Text>

          {transactionsData.map((item, index) => (
            <TouchableOpacity className="w-[337px] h-[72px] my-3 px-3 shadow shadow-black/5 border-[.05px] rounded-[10px] flex-row items-center justify-between self-center" onPress={()=>{
              navigation.navigate("TransactionsStackNav")
            }}>
              <View className=" flex-row items-center">
                <View className=" w-[34px] h-[34px] bg-red-500 rounded-full">
                  <Image
                    source={item.img}
                    style={{
                      width: "100%",
                      height: "100%",
                      //   borderRadius: 100,
                    }}
                  />
                </View>
                <View className="mx-2">
                  <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                    {item.transTitle}
                  </Text>
                  <Text className="text-[10px] font-[300] font-[Archivo] leading-[10px]">
                    {item.transDate}
                  </Text>
                </View>
              </View>
              <View className=" items-end">
                <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px] text-[#DC0303]">
                 {item.transAmount}
                </Text>
                <Text className="text-[10px] font-[300] font-[Archivo] leading-[10px]">
                  {item.transRecept}
                </Text>
              </View>
            </TouchableOpacity>
          ))}

          <TouchableOpacity className="w-[337px] h-[72px] px-3 shadow shadow-black/5 border-[.05px] rounded-[10px] flex-row items-center justify-between">
            <View className=" flex-row items-center">
              <View className=" w-[34px] h-[34px] bg-red-500 rounded-full">
                <Image
                  source={require("../../../../../assets/images/mtn_logo.png")}
                  style={{
                    width: "100%",
                    height: "100%",
                    //   borderRadius: 100,
                  }}
                />
              </View>
              <View className="mx-2">
                <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                  Airtime 2 Cash
                </Text>
                <Text className="text-[10px] font-[300] font-[Archivo] leading-[10px]">
                  05/03/2023 . 7:23 AM
                </Text>
              </View>
            </View>
            <View className=" items-end">
              <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px] text-[#DC0303]">
                N3000
              </Text>
              <Text className="text-[10px] font-[300] font-[Archivo] leading-[10px]">
                ID:213773799
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
}

export default WalletComp