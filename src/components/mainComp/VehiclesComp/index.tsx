import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import React from "react";
import { AntDesign } from "@expo/vector-icons";
import { useNavigation } from "@react-navigation/native";
import { Shadow } from "react-native-shadow-2";
import AllFleets from "./FleetsCategories/AllFleets";
import Drivers from "./FleetsCategories/Drivers";
import { CustomButton } from "../../customsComp/Input";
import CustomBottomSheet from "../../customsComp/BottomSheet";
import AddVehiclesSheet from "./AllFleetBottomSheet/VehiclesBottomSheet/AddVehiclesSheet";
import AddDriverSheet from "./AllFleetBottomSheet/DriverBottomSheet/AddDriverSheet";

const VehiclesComp = ({
  VehiclesData,
  setCategoriesIndex,
  categoriesIndex,
  fleetsCategories,
  FleetHeight,
  fleetSheetRef,
  fleetCloseSheet,
  fleetOpenSheet,
  driverSheetRef,
  driverHeight,
  driverCloseSheet,
  driverOpenSheet,
}) => {
  const navigation = useNavigation();
  return (
    <>
      <View className=" flex-1 pt-10 px-5 bg-white">
        <View className="flex-row items-center pt-2 justify-between">
          <Text className="text-[28px] text-[#000]  font-[600] font-[Archivo] leading-[30.46px]">
            Fleets
          </Text>
          <TouchableOpacity>
            <AntDesign name="filter" size={24} color="black" />
          </TouchableOpacity>
        </View>

        <View>
          <View className="flex-row my-5 ">
            {fleetsCategories.map((item: any, index: number) => (
              <>
                <TouchableOpacity
                  key={index}
                  className={`flex-1 h-[35px]  rounded-full bg-transparent  justify-center items-center py-[10px] px-[20px] ${
                    categoriesIndex == index && "bg-[#BAAFE9]"
                  }`}
                  onPress={() => {
                    setCategoriesIndex(index), item.onPress();
                  }}
                >
                  <Text
                    className={`text-[14px] font-[500] font-[Archivo] leading-[18px] text-[#909090] ${
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

        <View>
          {categoriesIndex === 0 && <AllFleets />}
          {categoriesIndex === 1 && <Drivers />}
        </View>
      </View>
      <View className="px-4">
        {categoriesIndex == 0 && (
          <CustomButton
            primary
            title="Add Fleet"
            onPress={() => {
              fleetOpenSheet();
            }}
          />
        )}
        {categoriesIndex === 1 && (
          <CustomButton
            primary
            title="Drivers"
            onPress={() => {
              driverOpenSheet();
            }}
          />
        )}
      </View>
      <View>
        <CustomBottomSheet
          ref={fleetSheetRef}
          height={FleetHeight}
          message={<AddVehiclesSheet fleetCloseSheet={fleetCloseSheet} />}
        />
        <CustomBottomSheet
          ref={driverSheetRef}
          height={driverHeight}
          message={<AddDriverSheet driverCloseSheet={driverCloseSheet} />}
        />
      </View>
    </>
  );
};

export default VehiclesComp;
