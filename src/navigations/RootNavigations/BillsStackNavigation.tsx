import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import BillsScreens from '../../screens/MainScreens/BillsScreens';
import BuyDataComp from '../../components/mainComp/BillsComp/BuyDataComp';
import ReviewOrderComp from '../../components/mainComp/BillsComp/BuyDataComp/ReviewOrderComp';
import BuyDataSuccessComp from '../../components/mainComp/BillsComp/BuyDataComp/BuyDataSuccessComp';
import BuyAirtimeComp from '../../components/mainComp/BillsComp/BuyAirtimeComp';
import BuyAirtimeReviewComp from '../../components/mainComp/BillsComp/BuyAirtimeComp/BuyAirtimeReviewComp';
import BuyAirtimeSuccess from '../../components/mainComp/BillsComp/BuyAirtimeComp/BuyAirtimeSuccess';
import BuyElectricityComp from '../../components/mainComp/BillsComp/BuyElectricityComp';
import BuyElecttricityReviewComp from '../../components/mainComp/BillsComp/BuyElectricityComp/BuyElectricityReviewComp';
import BuyElectricitySuccess from '../../components/mainComp/BillsComp/BuyElectricityComp/BuyElectricitySuccess';
import BuyInternetComp from '../../components/mainComp/BillsComp/BuyInternetComp';
import BuyInternatReview from '../../components/mainComp/BillsComp/BuyInternetComp/BuyInternetReview';
import BuyInternetSuccess from '../../components/mainComp/BillsComp/BuyInternetComp/BuyInternetSuccess';
import BuyCableComp from '../../components/mainComp/BillsComp/BuyCableComp';
import BuyCableReview from '../../components/mainComp/BillsComp/BuyCableComp/BuyCableReview';
import BuyCableSuccess from '../../components/mainComp/BillsComp/BuyCableComp/BuyCableSuccess';
import PayExamComp from '../../components/mainComp/BillsComp/PayExamComp';
import PayExamReview from '../../components/mainComp/BillsComp/PayExamComp/PayExamReview';
import PayExamSuccess from '../../components/mainComp/BillsComp/PayExamComp/PayExamSuccess';
import AirtimeEnterPin from '../../components/mainComp/BillsComp/BuyAirtimeComp/AirtimeEnterPin';
import DataEnterPin from '../../components/mainComp/BillsComp/BuyDataComp/DataEnterPin';
import CableEnterPin from '../../components/mainComp/BillsComp/BuyCableComp/CableEnterPin';
import ElectricityEnterPin from '../../components/mainComp/BillsComp/BuyElectricityComp/ElectricityEnterPin';
import InternetEnterPin from '../../components/mainComp/BillsComp/BuyInternetComp/InternetEnterPin';
import PayExamEnterPin from '../../components/mainComp/BillsComp/PayExamComp/PayExamEnterPin';



const BillsStack = createNativeStackNavigator();


const BillsStackNavigation = () => {
  return (
    <BillsStack.Navigator>
      <BillsStack.Group>
        <BillsStack.Screen
          name="BillsScreens"
          component={BillsScreens}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyDataComp"
          component={BuyDataComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="ReviewOrderComp"
          component={ReviewOrderComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="DataEnterPin"
          component={DataEnterPin}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyDataSuccessComp"
          component={BuyDataSuccessComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyAirtimeComp"
          component={BuyAirtimeComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyAirtimeReviewComp"
          component={BuyAirtimeReviewComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="AirtimeEnterPin"
          component={AirtimeEnterPin}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyAirtimeSuccess"
          component={BuyAirtimeSuccess}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyElectricityComp"
          component={BuyElectricityComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyElecttricityReviewComp"
          component={BuyElecttricityReviewComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="ElectricityEnterPin"
          component={ElectricityEnterPin}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyElectricitySuccess"
          component={BuyElectricitySuccess}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyInternetComp"
          component={BuyInternetComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyInternatReview"
          component={BuyInternatReview}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="InternetEnterPin"
          component={InternetEnterPin}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyInternetSuccess"
          component={BuyInternetSuccess}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyCableComp"
          component={BuyCableComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyCableReview"
          component={BuyCableReview}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="CableEnterPin"
          component={CableEnterPin}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="BuyCableSuccess"
          component={BuyCableSuccess}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="PayExamComp"
          component={PayExamComp}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="PayExamReview"
          component={PayExamReview}
          options={{ headerShown: false }}
        />
        <BillsStack.Screen
          name="PayExamEnterPin"
          component={PayExamEnterPin}
          options={{ headerShown: false }}
        />

        <BillsStack.Screen
          name="PayExamSuccess"
          component={PayExamSuccess}
          options={{ headerShown: false }}
        />
      </BillsStack.Group>
    </BillsStack.Navigator>
  );
}

export default BillsStackNavigation;