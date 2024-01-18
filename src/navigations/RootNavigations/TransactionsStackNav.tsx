
import React from 'react'
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import TransactionsScreen from '../../screens/MainScreens/TransactionsScreen';


const TransStack = createNativeStackNavigator();


const TransactionsStackNav = () => {
  return (
    <TransStack.Navigator>
      <TransStack.Group>
        <TransStack.Screen
          name="TransactionsScreen"
          component={TransactionsScreen}
          options={{ headerShown: false }}
        />
      </TransStack.Group>
    </TransStack.Navigator>
  );
}

export default TransactionsStackNav