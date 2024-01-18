import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { Feather } from "@expo/vector-icons";
import CustomBottomSheet from "../../customsComp/BottomSheet";
import TransSummaryBottomSheet from "./TransSummaryBottomSheet";

const TransactionComp = ({
  transSheetRef,
  transCloseSheet,
  transOpenSheet,
  height,
}) => {
  return (
    <>
      <View className=" flex-1 py-10 px-6 bg-white">
        <View className="flex-row items-center pt-2 justify-between">
          <Text className="text-[28px] text-[#000]  font-[600] font-[Archivo] leading-[30.46px]">
            Transactions
          </Text>
          {/* <TouchableOpacity>
          <AntDesign name="filter" size={24} color="black" />
        </TouchableOpacity> */}
        </View>
        <View className=" mx-auto my-6">
          <TouchableOpacity className=" flex-row items-center w-[335px] h-[50px] bg-[#E8E8E8] justify-between rounded-[6px] px-3">
            <Text className="text-[12px]   font-[300] font-[Archivo] leading-[15px] mx-2">
              Search transactions by date
            </Text>
            <Feather name="calendar" size={24} color="black" />
          </TouchableOpacity>

          <ScrollView className=" my-5">
            {/* start of today */}
            <View>
              <Text className="text-[10px] font-[600] font-[Archivo] leading-[13px]">
                Today
              </Text>

              <TouchableOpacity
                className="w-[337px] h-[72px]   my-3 px-3 shadow shadow-black/5 border-[.05px] rounded-[10px] flex-row items-center justify-between"
                onPress={() => {
                  transOpenSheet();
                }}
              >
                <View className=" flex-row items-center">
                  <View className=" w-[34px] h-[34px] bg-red-500 rounded-full">
                    <Image
                      source={require("../../../../assets/images/mtn_logo.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
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
            {/* end of today */}
            {/* start or Yesterday */}
            <View>
              <Text className="text-[10px] font-[600] font-[Archivo] leading-[13px]">
                Yesterday
              </Text>

              <TouchableOpacity className="w-[337px] h-[72px]   my-3 px-3 shadow shadow-black/5 border-[.05px] rounded-[10px] flex-row items-center justify-between">
                <View className=" flex-row items-center">
                  <View className=" w-[34px] h-[34px] bg-red-500 rounded-full">
                    <Image
                      source={require("../../../../assets/images/waec.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  <View className="mx-2">
                    <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                      Exam Bill Payment
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

            <View>
              {/* <Text className="text-[10px] font-[600] font-[Archivo] leading-[13px]">
              Yesterday
            </Text> */}

              <TouchableOpacity className="w-[337px] h-[72px]   my-3 px-3 shadow shadow-black/5 border-[.05px] rounded-[10px] flex-row items-center justify-between">
                <View className=" flex-row items-center">
                  <View className=" w-[34px] h-[34px] bg-red-500 rounded-full">
                    <Image
                      source={require("../../../../assets/images/gtb.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  <View className="mx-2">
                    <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                      Wallet Funded
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
            {/* end or Yesterday */}
            {/* others */}

            <View>
              <Text className="text-[10px] font-[600] font-[Archivo] leading-[13px]">
                Others
              </Text>

              <View className="w-[337px] h-[72px]   my-3 px-3 shadow shadow-black/5 border-[.05px] rounded-[10px] flex-row items-center justify-between">
                <View className=" flex-row items-center">
                  <View className=" w-[34px] h-[34px] bg-red-500 rounded-full">
                    <Image
                      source={require("../../../../assets/images/ie.png")}
                      style={{
                        width: "100%",
                        height: "100%",
                        borderRadius: 100,
                      }}
                    />
                  </View>
                  <View className="mx-2">
                    <Text className="text-[14px] font-[600] font-[Archivo] leading-[15px]">
                      Electricity Payment
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
              </View>
            </View>
            {/* end of other */}
          </ScrollView>
        </View>
      </View>
      <CustomBottomSheet
        height={height}
        ref={transSheetRef}
        message={<TransSummaryBottomSheet transCloseSheet={transCloseSheet} />}
      />
    </>
  );
};

export default TransactionComp;
