import React from "react";
import {
  View,
  ScrollView,
  Text,
  TouchableOpacity,
  TextInput,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { VehicleIcon } from "../../../helper/Icons";
import { Feather } from "@expo/vector-icons";
import HomeHeaderComp from "./HomeHeaderComp";
import QuickLink from "./QuickLink";
import CustomBottomSheet from "../../customsComp/BottomSheet";
import HomeBottomSheet from "./HomeBottomSheet";
import { useNavigation } from "@react-navigation/native";
import AccountDetails from "./HomeCatgegories/AccountDetails";
import Analytics from "./HomeCatgegories/Analytics";

const HomeComp = ({ quicklinkData, sheetRef, openSheet, height }) => {
  const navigation = useNavigation();
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);


  const summaryData = [
    {
      Amonut: "1000",
      title: "Store Sales",
    },
    {
      Amonut: "1000",
      title: "Total Vehicles",
    },
    {
      Amonut: "12000",
      title: "Revenue",
    },
  ];
  return (
    <>
      <View className="flex-1 bg-black">
        <HomeHeaderComp
          categoriesIndex={categoriesIndex}
          setCategoriesIndex={setCategoriesIndex}
        />
        <ScrollView className="bg-white p-6">
          
          {categoriesIndex === 0 && (
            <AccountDetails
              quicklinkData={quicklinkData}
              summaryData={summaryData}
            />
          )}
          {categoriesIndex === 1 && <Analytics />}
        </ScrollView>
      </View>
      <CustomBottomSheet
        ref={sheetRef}
        height={height}
        message={<HomeBottomSheet />}
      />
    </>
  );
};

export default HomeComp;
