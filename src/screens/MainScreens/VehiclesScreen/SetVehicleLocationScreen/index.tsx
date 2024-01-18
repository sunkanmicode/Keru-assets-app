import { View, Text } from 'react-native'
import React, { useRef } from 'react'
import SetVehicleLocationnComp from '../../../../components/mainComp/VehiclesComp/SetVehicleLocationComp'
import { useNavigation } from '@react-navigation/native'

const SetVehicleLocationScreen = () => {
  const navigation = useNavigation()
   const SetLocationsheetRef = useRef(null);
   const [formStep, setFormStep] = React.useState(0);

   const height = 775;

   const closeSheet = () => {
     if (SetLocationsheetRef.current) {
       SetLocationsheetRef.current.close();
     }
   };
   const openSheet = () => {
     if (SetLocationsheetRef.current) {
       SetLocationsheetRef.current.open();
     }
   };

   const nextStepForm = () => {
     setFormStep((cur) => cur + 1);
   };
   const prevStepForm = () => {
     if (formStep === 0) {
       return navigation.goBack();
     }
     setFormStep((cur) => cur - 1);
   };
  return (
    <SetVehicleLocationnComp
      formStep={formStep}
      setFormStep={setFormStep}
      nextStepForm={nextStepForm}
      prevStepForm={prevStepForm}
      openSheet={openSheet}
      height={height}
      SetLocationsheetRef={SetLocationsheetRef}
      closeSheet={closeSheet}
    />
  );
}

export default SetVehicleLocationScreen