import { View, Text, TouchableOpacity, Image, ScrollView } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { StarRatingDisplay } from "react-native-star-rating-widget";
import { useNavigation } from "@react-navigation/native";
import { CustomButton } from "../../../customsComp/Input";

const StoreDetailsComp = ({ detailsData }) => {
  const navigation = useNavigation();
  const [rating, setRating] = React.useState(0);
  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="flex-row py-6 mb-10 items-center justify-between">
          <View className=" flex-row items-center">
            <TouchableOpacity
              className="mr-4"
              onPress={() => {
                navigation.goBack();
              }}
            >
              <AntDesign name="arrowleft" size={24} color="black" />
            </TouchableOpacity>
            <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
              Details
            </Text>
          </View>
          <TouchableOpacity>
            <AntDesign name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>
        <ScrollView
          showsVerticalScrollIndicator={false}
          className=" mx-auto"
        >
          <View className="w-[335px] h-[265px]  py-[16px] px-[10px] border rounded-2xl border-[#F1F0F0] ">
            <View className=" w-[311px] h-[129px]">
              <Image
                source={require("../../../../../assets/images/car2.png")}
                style={{
                  width: "100%",
                  height: "100%",
                  // borderRadius: 100,
                }}
              />
            </View>
            <View className="flex-row justify-between items-center py-5">
              <Text className="text-[14px] font-[500] font-[Archivo] leading-[15.23px]">
                Power Steering Pumps 2
              </Text>
              <View className="w-[65px] pr-5">
                <StarRatingDisplay
                  starSize={15}
                  rating={rating}
                  color="#DCDCDC"
                  // onChange={setRating}
                  starStyle={{ width: 2 }}
                />
              </View>
            </View>
            <Text className="font-[600] text-[10px] font-[Archivo] leading-[10px]">
              Sold by <Text className="text-[#007FFF]"> Automobile</Text>
            </Text>
            <View className="flex-row items-center py-3">
              <Text className="font-[700] text-[16px] font-[Archivo] leading-[17.06px]">
                N40.000
              </Text>
              <View className="w-[32px] h-[21px] bg-[#FFF0EE] p-[6px] mx-3 rounded-full">
                <Text className="font-[500] text-[8px] font-[Archivo] leading-[8px] text-[#FF8376]">
                  -30%
                </Text>
              </View>
            </View>
          </View>
          <View className="w-[335px] h-[265px]  py-[16px] px-[10px] border rounded-2xl border-[#F1F0F0] my-[28px]">
            <View className="h-[183px]">
              <Text className="font-[700] text-[12px] font-[Archivo] leading-[13px]">
                Overview
              </Text>
              <View className="w-[265px] h-[138px]">
                {detailsData.map((item) => (
                  <View key={item.title} className=" flex-row my-0.5">
                    {item.icon}
                    <Text className="font-[400] text-[10px] font-[Archivo] leading-[23px]">
                      {item.title}
                    </Text>
                  </View>
                ))}
              </View>
            </View>
          </View>
          <View className="w-[335px] h-[180px]  py-[16px] px-[10px] border rounded-2xl border-[#F1F0F0]">
            <View className="h-[183px]">
              <Text className="font-[700] text-[12px] font-[Archivo] leading-[13px]">
                Shipping
              </Text>
              <View className="w-[265px] h-[138px]">
                <View className="  my-0.5">
                  <Text className="font-[500] text-[10px] font-[Archivo] leading-[28px]">
                    Delivery
                  </Text>

                  <Text className="font-[400] text-[10px] font-[Archivo] leading-[23px]">
                    Estimated delivery time: 1 - 7 days
                  </Text>
                </View>

                <View className="  my-1.5">
                  <Text className="font-[500] text-[10px] font-[Archivo] leading-[28px]">
                    Express Delivery Available
                  </Text>

                  <Text className="font-[400] text-[10px] font-[Archivo] leading-[23px]">
                    Same day delivery: Order before 11AM and get it today Next
                    day delivery: Order after 11AM and get it tomorrow
                  </Text>
                </View>
              </View>
            </View>
          </View>
        </ScrollView>
      </View>
      <View className=" flex-row justify-between items-center bg-white w-[390px] h-[63px] px-[14] py=[20px]  self-center shadow-lg shadow-black/100">
        <View className="w-[106px] h-[31px] flex-row border rounded border-[#D3D3D3] items-center justify-around">
          <View>
            <AntDesign name="minus" size={15} color="black" />
          </View>
          <View className="w-[1px] h-[31px] bg-[#D3D3D3]" />
          <Text>1</Text>
          <View className="w-[1px] h-[31px] bg-[#D3D3D3]" />

          <View>
            <AntDesign name="plus" size={15} color="black" />
          </View>
        </View>

        <View className="w-[218px]">
          <CustomButton
            primary
            title="Add to Cart"
            onPress={() => {
              navigation.navigate("StoreCartScreen");
            }}
          />
        </View>
      </View>
    </>
  );
};

export default StoreDetailsComp;
