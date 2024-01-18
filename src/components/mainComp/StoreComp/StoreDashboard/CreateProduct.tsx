import { View, Text, Image } from "react-native";
import React from "react";
import { CustomButton } from "../../../customsComp/Input";
import CreateProductSheet from "./StoreBottonSheet/CreateProductSheet";
import CustomBottomSheet from "../../../customsComp/BottomSheet";

const CreateProduct = ({ setShowProduct }) => {
  const CreateProductSheetRef = React.useRef(null);

  const CreateProductHeight = 775;

  const CreateProductCloseSheet = () => {
    if (CreateProductSheetRef.current) {
      CreateProductSheetRef.current.close();
    }
  };
  const CreateProductOpenSheet = () => {
    if (CreateProductSheetRef.current) {
      CreateProductSheetRef.current.open();
    }
  };

  return (
    <>
      <View className=" flex-1 mt-20 bg-white p-6">
        <View className="items-center justify-center">
          <View className="w-[180px] h-[180] ">
            <Image
              source={require("../../../../../assets/images/empty_store.gif")}
              style={{ width: "100%", height: "100%" }}
            />
          </View>
          <View>
            <Text className="font-[Archivo] font-[500] text-[14px] leading-[15px] text-center">
              No products uploaded yet
            </Text>
            <Text className="font-[Archivo] font-[400] text-[12px] leading-[28px] text-center">
              Start selling your products by uploading them here
            </Text>
          </View>
        </View>
        <View className="w-[169px] h-[35px] self-center">
          <CustomButton
            primary
            title="Create your Store"
            onPress={() => {
              // navigation.navigate("VehiclesScreen");
              CreateProductOpenSheet();
            }}
          />
        </View>
      </View>
      <CustomBottomSheet
        ref={CreateProductSheetRef}
        height={CreateProductHeight}
        message={
          <CreateProductSheet
            CreateProductCloseSheet={CreateProductCloseSheet}
            setShowProduct={setShowProduct}
          />
        }
      />
    </>
  );
};

export default CreateProduct;
