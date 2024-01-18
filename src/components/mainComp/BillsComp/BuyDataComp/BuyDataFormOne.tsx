import { View, Text } from 'react-native'
import React from 'react'
import { useNavigation } from '@react-navigation/native';
import CustomInput from '../../../customsComp/Input';
import CountryPicker from "react-native-country-picker-modal";

const BuyDataFormOne = () => {
      const navigation = useNavigation();
      const [form, setForm] = React.useState<{ [key: string]: any }>({});
      const [formStep, setFormStep] = React.useState(0);

  return (
    <View className="mt-10">
      <CustomInput primary
        label="Enter Phone Number"
        placeholder="Enter Phone Number"
        keyboardType={"numeric"}
        icon={
          <CountryPicker
            //  countryCode
            withFilter
            withFlag
            countryCode={form.cCountryCode || "NG"}
            withCountryNameButton={false}
            // withCallingCodeButton
            withCallingCode
            withEmoji
            onSelect={(v) => {
              const cCallingCode = v.callingCode[0];
              const cCountryCode = v.cca2;
              setForm({
                ...form,
                country_Code: cCallingCode,
                cCountryCode,
              });

              console.log(v, "v");
            }}
          />
        }
        iconPostion="left"
      />
    </View>
  );
}

export default BuyDataFormOne