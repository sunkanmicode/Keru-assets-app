import { View, Text, FlatList, TouchableOpacity, Dimensions } from "react-native";
import React from "react";
import { Feather } from '@expo/vector-icons';
<Feather name="delete" size={24} color="black" />

const{ width} = Dimensions.get('window')



const dialPad = [1, 2, 3, 4, 5, 6, 7, 8, 9, "", 0, "del"];
const dialPadSize = width * .2;
const _spacing = 20;
const dialPadTextSize = dialPadSize * 0.4

type Props = {
  onPress: (item: (typeof dialPad)[number]) => void;
  pinLength: number;
  code: number[];
  // onPress:(item:number)=>void;
};

const CustomEnterPin = ({ onPress,code, pinLength }: Props) => {
  return (
    <>
      <View
        style={{
          flexDirection: "row",
          gap: _spacing,
          marginBottom: _spacing * 2,
          // backgroundColor:"green",
          // height: pinSize * 2,
          alignSelf:"center",
          // alignItems:"center"
        }}
      >
        {[...Array(pinLength).keys()].map((c) => {
          const isSelected = !!code[c];
          // console.log(isSelected, "c");
          return (
            <View
              style={{
                // width: pinSize,
                // height: pinSize,
                width: 15,
                height: 15,
                borderRadius: 100,
                backgroundColor: isSelected ? "#42353B" : "#D9D9D9",
              }}
            />
          );
        })}
      </View>
      <FlatList
        data={dialPad}
        keyExtractor={(_, index) => index.toString()}
        numColumns={3}
        columnWrapperStyle={{ gap: 50 }}
        contentContainerStyle={{ gap: _spacing }}
        style={{ flexGrow: 0 }}
        renderItem={({ item }) => {
          return (
            <TouchableOpacity
            className={` ${typeof item !=="number"? '':' bg-white rounded-full'}`}
            // className="bg-white"
              disabled={item === ""}
              onPress={() => {
                onPress(item);
              }}
            >
              <View
                style={{
                  width: dialPadSize,
                  height: dialPadSize,
                  // borderWidth: typeof item !=="number"? 0: 1,
                  // borderColor:"black",
                  // borderRadius:dialPadSize,
                  alignItems: "center",
                  justifyContent: "center",
                  // backgroundColor: "yellow",
                }}
              >
                {item === "del" ? (
                  <Feather name="delete" size={dialPadTextSize} color="black" />
                ) : (
                  <Text className="text-[24px] font-[600] font-[Archivo] leading-[18px] text-[#42353B] pt-3">
                    {item}
                  </Text>
                )}
              </View>
            </TouchableOpacity>
          );
        }}
      />
    </>
  );
};

export default CustomEnterPin;
