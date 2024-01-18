import { View, Text } from 'react-native'
import React from 'react'
import TransactionComp from '../../../components/mainComp/TransactionComp'
import { useNavigation } from '@react-navigation/native';

const TransactionsScreen = () => {
   const navigation = useNavigation();
   const transSheetRef = React.useRef(null);

   const height = 775;

   const transCloseSheet = () => {
     if (transSheetRef.current) {
       transSheetRef.current.close();
     }
   };
   const transOpenSheet = () => {
     if (transSheetRef.current) {
       transSheetRef.current.open();
     }
   };
  return (
    <TransactionComp
      transSheetRef={transSheetRef}
      transCloseSheet={transCloseSheet}
      transOpenSheet={transOpenSheet}
      height={height}
    />
  );
}

export default TransactionsScreen