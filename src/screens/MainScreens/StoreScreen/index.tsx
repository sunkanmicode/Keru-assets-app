import { View, Text } from "react-native";
import React, { useState } from "react";
import StoreComp from "../../../components/mainComp/StoreComp";

export type StoreCategoriesType = {
  name: string;
  onPress: () => void;
}[];
const StoreScreen = () => {
  const [categoriesIndex, setCategoriesIndex] = useState(0);
  const [showStore, setShowStore] = useState(false)
  const [showProduct, setShowProduct] =useState(false)

  const storeCategories: StoreCategoriesType = [
    {
      name: "Store",
      onPress: () => {},
    },
    {
      name: "My Orders",
      onPress: () => {},
    },
    {
      name: "Sales",
      onPress: () => {},
    },
  ];
  const storeData = [
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),
    },
    {
      name: "Toyota RAV- Yamaha",
      image: require("../../../../assets/images/car1.png"),
    },
  ];
  return (
    <StoreComp
      storeData={storeData}
      storeCategories={storeCategories}
      categoriesIndex={categoriesIndex}
      setCategoriesIndex={setCategoriesIndex}
      showStore={showStore} 
      setShowStore={setShowStore}
      showProduct={showProduct} setShowProduct={setShowProduct}
    />
  );
};

export default StoreScreen;
