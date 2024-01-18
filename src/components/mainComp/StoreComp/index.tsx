import React from "react";
import { View, Text, TouchableOpacity, Image, FlatList } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Shadow } from "react-native-shadow-2";
import { useNavigation } from "@react-navigation/native";
import { StoreCategoriesType } from "../../../screens/MainScreens/StoreScreen";
import StoreCat from "./StoreCategories/StoreCat";
import MyOrderCat from "./StoreCategories/MyOrderCat";
import SalesCat from "./StoreCategories/SalesCat";
import StoreHomePage from "./StoreDashboard/StoreHomePage";
import CreateStore from "./StoreDashboard/CreateStore";
import CreateProduct from "./StoreDashboard/CreateProduct";

const StoreComp = ({
  storeData,
  storeCategories,
  categoriesIndex,
  setCategoriesIndex,
  showStore,
  setShowStore,
  showProduct,
  setShowProduct,
}) => {
  const naviagtion = useNavigation();

  return (
    <View className=" flex-1 py-10 px-6 bg-white">
      <View className="flex-row items-center pt-2 justify-between">
        <Text className="text-[28px] text-[#000]  font-[600] font-[Archivo] leading-[30.46px]">
          Store
        </Text>
        <TouchableOpacity>
          <Ionicons name="md-cart-outline" size={24} color="black" />
        </TouchableOpacity>
      </View>
      {showStore && (
        <View>
          <View className=" flex-row justify-between h-[75px] px-[10px] py-[16px] border border-[#F1F0F0] rounded-2xl my-6">
            <View>
              <Text className="font-[500] text-[14px] font-[Archivo] leading-[15.06px] mb-3">
                Softamos Store
              </Text>
              <Text className="font-[400] text-[10px] font-[Archivo] leading-[10px]">
                Sellers of parts and autombile in installments
              </Text>
            </View>
            <View>
              <Text className="font-[600] text-[10px] font-[Archivo] leading-[10px] text-[#007FFF]">
                090988888833
              </Text>
            </View>
          </View>
        </View>
      )}
      {!showStore ? (
        <CreateStore setShowStore={setShowStore} />
      ) : !showProduct && showStore ? (
        <CreateProduct setShowProduct={setShowProduct} />
      ) : (
        <View>
          <StoreHomePage
            storeData={storeData}
            storeCategories={storeCategories}
            categoriesIndex={categoriesIndex}
            setCategoriesIndex={setCategoriesIndex}
          />
        </View>
      )}

      {/* <View>
        <StoreHomePage
          storeData={storeData}
          storeCategories={storeCategories}
          categoriesIndex={categoriesIndex}
          setCategoriesIndex={setCategoriesIndex}
        />
      </View> */}
    </View>
  );
};

export default StoreComp;
