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
import { VehicleIcon } from "../../../helper/CustomIcon/Icons";
import { Feather } from "@expo/vector-icons";
import HomeHeaderComp from "./HomeHeaderComp";
import QuickLink from "./QuickLink";
import CustomBottomSheet from "../../customsComp/BottomSheet";
import HomeBottomSheet from "./HomeBottomSheet";
import { useNavigation } from "@react-navigation/native";
import AccountDetails from "./HomeCatgegories/AccountDetails";
import Analytics from "./HomeCatgegories/Analytics";
import WalletSetModal from "./WalletSetModel";

const HomeComp = ({
  quicklinkData,
  sheetRef,
  openSheet,
  height,
  visible,
  setVisible,
  getUserInfoQuery,
  getDashboardQuery,
}) => {
  const navigation = useNavigation();
  const [categoriesIndex, setCategoriesIndex] = React.useState(0);

  return (
    <>
      <WalletSetModal visible={visible} setVisible={setVisible} />

      <View className="flex-1 bg-black">
        <HomeHeaderComp
          categoriesIndex={categoriesIndex}
          setCategoriesIndex={setCategoriesIndex}
          getUserInfoQuery={getUserInfoQuery}
        />
        <ScrollView className="bg-white p-6">
          {categoriesIndex === 0 && (
            <AccountDetails
              quicklinkData={quicklinkData}
              getDashboardQuery={getDashboardQuery}
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
