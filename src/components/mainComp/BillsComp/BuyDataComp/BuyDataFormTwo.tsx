import { View, Image, Text } from 'react-native'
import React from 'react'
import CustomInput from '../../../customsComp/Input';

const BuyDataFormTwo = () => {
  return (
    <View className='mt-10'>
      <View className=" w-[30px] h-[31px] self-end">
        <Image
          source={require("../../../../../assets/images/mtn_logo.png")}
          style={{
            width: "100%",
            height: "100%",
              borderRadius: 100,
          }}
        />
      </View>
      <CustomInput primary label="Data Type" placeholder="Select" />
      <CustomInput primary label="Amount" placeholder="Enter Amount" />
    </View>
  );
}

export default BuyDataFormTwo