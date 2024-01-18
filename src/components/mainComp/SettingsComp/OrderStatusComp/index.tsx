import { View, Text, TouchableOpacity } from "react-native";
import React from "react";
import { AntDesign, Ionicons } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import PendingOrder from "./OrderStatusCategories/PendingOrder";
import CompletedOrder from "./OrderStatusCategories/CompletedOrder";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import StatusOrderBearkdown from "./OrderStatusCategories/StatusOrderBearkdown";
import CompletedOrderBeark from "./OrderStatusCategories/CompletedOrderBeark";

export type StatusCategoriesType = {
  name: string;
  onPress: () => void;
}[];


const OrderStatus = ({}) => {
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);
  const navigation = useNavigation();

    const StatusSheetRef = React.useRef(null);

    const height = 775;

    const statusCloseSheet = () => {
      if (StatusSheetRef.current) {
        StatusSheetRef.current.close();
      }
    };
    const statusOpenSheet = () => {
      if (StatusSheetRef.current) {
        StatusSheetRef.current.open();
      }
    };

     const completedOrderSheetRef = React.useRef(null);

     const completedOrderheight = 775;

     const completedOrderCloseSheet = () => {
       if (completedOrderSheetRef.current) {
         completedOrderSheetRef.current.close();
       }
     };
     const completedOrderOpenSheet = () => {
       if (completedOrderSheetRef.current) {
         completedOrderSheetRef.current.open();
       }
     };

  const StatusCategories: StatusCategoriesType = [
    {
      name: "Pending Order",
      onPress: () => {},
    },
    {
      name: "Completed Order",
      onPress: () => {},
    },
  ];
  const OrderStatusData = [
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../../assets/images/car1.png"),
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
            Fleet Order
          </Text>
        </View>
        <View>
          <View className="flex-row  ">
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
        </View>
        {categoriesIndex == 0 && (
          <PendingOrder statusOpenSheet={statusOpenSheet} />
        )}
        {categoriesIndex == 1 && (
          <CompletedOrder completedOrderOpenSheet={completedOrderOpenSheet} />
        )}
      </View>
      {categoriesIndex == 0 && (
        <CustomBottomSheet
          height={height}
          ref={StatusSheetRef}
          message={<StatusOrderBearkdown statusCloseSheet={statusCloseSheet} />}
        />
      )}

      {categoriesIndex == 1 && (
        <CustomBottomSheet
          height={completedOrderheight}
          ref={completedOrderSheetRef}
          message={
            <CompletedOrderBeark
              completedOrderCloseSheet={completedOrderCloseSheet}
            />
          }
        />
      )}
    </>
  );
};

export default OrderStatus;
