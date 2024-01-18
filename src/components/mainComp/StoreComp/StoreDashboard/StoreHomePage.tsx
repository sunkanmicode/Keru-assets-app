import { View, Text, TouchableOpacity } from "react-native";
import React from 'react'
import StoreCat from "../StoreCategories/StoreCat";
import MyOrderCat from "../StoreCategories/MyOrderCat";
import SalesCat from "../StoreCategories/SalesCat";

const StoreHomePage = ({
  categoriesIndex,
  setCategoriesIndex,
  storeCategories,
  storeData,
}) => {
  return (
    <View>
      <View>
        <View className="flex-row my-5 ">
          {storeCategories.map((item: any, index: number) => (
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
              <View style={{ width: 5 }} />
            </>
          ))}
        </View>
      </View>
      <View>
        {/* <Shadow> */}
        {categoriesIndex == 0 && <StoreCat storeData={storeData} />}
        {categoriesIndex == 1 && <MyOrderCat />}
        {categoriesIndex == 2 && <SalesCat />}

        {/* </Shadow> */}
      </View>
    </View>
  );
};

export default StoreHomePage