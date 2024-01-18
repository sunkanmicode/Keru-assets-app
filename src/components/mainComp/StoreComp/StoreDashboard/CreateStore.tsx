import { View, Text, Image } from "react-native";
import React from 'react'
import { CustomButton } from "../../../customsComp/Input";
import CustomBottomSheet from "../../../customsComp/BottomSheet";
import CreateStoreSheet from "./StoreBottonSheet/CreateStoreSheet";

const CreateStore = ({ setShowStore }) => {
  const createStoreSheetRef = React.useRef(null);

  const createStoreHeight = 775;

  const createStoreCloseSheet = () => {
    if (createStoreSheetRef.current) {
      createStoreSheetRef.current.close();
    }
  };
  const createStoreOpenSheet = () => {
    if (createStoreSheetRef.current) {
      createStoreSheetRef.current.open();
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
              No Store Created
            </Text>
            <Text className="font-[Archivo] font-[400] text-[12px] leading-[28px] text-center">
              Start selling your porducts here
            </Text>
          </View>
        </View>
        <View className="w-[169px] self-center">
          <CustomButton
            primary
            title="Create your Store"
            onPress={() => {
              createStoreOpenSheet();
            }}
          />
        </View>
      </View>
      <CustomBottomSheet
        ref={createStoreSheetRef}
        height={createStoreHeight}
        message={
          <CreateStoreSheet
            createStoreCloseSheet={createStoreCloseSheet}
            setShowStore={setShowStore}
          />
        }
      />
    </>
  );
};

export default CreateStore