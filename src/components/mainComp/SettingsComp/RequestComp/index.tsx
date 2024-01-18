import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import { useNavigation } from "@react-navigation/native";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import PendingRequest from "./RequestCategories/PendingRequest";
import CompletedRequest from "./RequestCategories/CompletedRequest";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import RequestBreakdown from "./RequestBottomSheet/RequestBreakdown";


const RequestComp  = () => {
  const navigation = useNavigation()
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);

  const requestSheetRef = React.useRef(null);

  const height = 775;

  const requestCloseSheet = () => {
    if (requestSheetRef.current) {
      requestSheetRef.current.close();
    }
  };
  const requestOpenSheet = () => {
    if (requestSheetRef.current) {
      requestSheetRef.current.open();
    }
  };

  const StatusCategories = [
    {
      name: "Pending Request",
      onPress: () => {},
    },
    {
      name: "Completed Request",
      onPress: () => {},
    },
  ];
  return (
    <>
      <View className="flex-1 bg-white p-6">
        <View className="py-6  flex-row items-center">
          <TouchableOpacity
            className="mr-4"
            onPress={() => {
              navigation.goBack();
            }}
          >
            <AntDesign name="arrowleft" size={24} color="black" />
          </TouchableOpacity>
          <Text className="text-[20px] font-[500] font-[Archivo] leading-[21px]">
            Requests
          </Text>
        </View>
        <View>
          <View className="flex-row ">
            {StatusCategories.map((item: any, index: number) => (
              <>
                <TouchableOpacity
                  key={index}
                  className={`flex-1 h-[35px] rounded-full bg-transparent  justify-center items-center py-[10px] px-[20px] ${
                    categoriesIndex == index && "bg-[#BAAFE9]"
                  }`}
                  onPress={() => {
                    setCategoriesIndex(index), item.onPress();
                  }}
                >
                  <Text
                    className={`text-[12px] font-[400] w-[131px] h-[15px] text-center font-[Archivo] leading-[15px] text-[#909090] ${
                      categoriesIndex == index && "text-white"
                    }`}
                  >
                    {item.name}
                  </Text>
                </TouchableOpacity>
                <View style={{ width: 20 }} />
              </>
            ))}
          </View>
          {categoriesIndex == 0 && (
            <PendingRequest requestOpenSheet={requestOpenSheet} />
          )}
          {categoriesIndex == 1 && <CompletedRequest />}
        </View>
      </View>
      <CustomBottomSheet
        ref={requestSheetRef}
        height={height}
        message={<RequestBreakdown requestCloseSheet={requestCloseSheet} />}
      />
    </>
  );
}

export default RequestComp