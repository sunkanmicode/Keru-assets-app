import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import HomeScreen from "../../screens/MainScreens/HomeScreen";
import SettingsScreen from "../../screens/MainScreens/SettingsScreen";
import WalletComp from "../../components/mainComp/SettingsComp/WalletComp";
import OrderStatus from "../../components/mainComp/SettingsComp/OrderStatusComp";
import EditProfile from "../../screens/MainScreens/SettingsScreen/EditProfile";
import ChangePasswordComp from "../../components/mainComp/SettingsComp/ChangePasswordComp";
import ReferAndEarnComp from "../../components/mainComp/SettingsComp/ReferAndEarnComp";
import SendMoneyScreen from "../../components/mainComp/SettingsComp/WalletComp/sendMoneyScreen";
import SendMoneySummary from "../../components/mainComp/SettingsComp/WalletComp/sendMoneyScreen/SendMoneySummary";
import SendMoneySuccess from "../../components/mainComp/SettingsComp/WalletComp/sendMoneyScreen/SendMoneySuccess";
import SendMoneyEnterPin from "../../components/mainComp/SettingsComp/WalletComp/sendMoneyScreen/SendMoneyEnterPin";
import FundWalletComp from "../../components/mainComp/SettingsComp/WalletComp/FundWalletComp";
import BillsStackNavigation from "./BillsStackNavigation";
import TransactionsStackNav from "./TransactionsStackNav"
import FundWalletSuccess from "../../components/mainComp/SettingsComp/WalletComp/FundWalletComp/FundWalletSuccess";
import ChangePinComp from "../../components/mainComp/SettingsComp/ChangePinComp";
import ReEnterPin from "../../components/mainComp/SettingsComp/ChangePinComp/ReEnterPin";
import FundWalletEnterPin from "../../components/mainComp/SettingsComp/WalletComp/FundWalletComp/FundWalletEnterPin";
import BillsScreens from "../../screens/MainScreens/BillsScreens";
import BuyDataComp from "../../components/mainComp/BillsComp/BuyDataComp";
import BuyAirtimeSuccess from "../../components/mainComp/BillsComp/BuyAirtimeComp/BuyAirtimeSuccess";
import BuyElectricityComp from "../../components/mainComp/BillsComp/BuyElectricityComp";
import BuyAirtimeComp from "../../components/mainComp/BillsComp/BuyAirtimeComp";
import BuyInternetComp from "../../components/mainComp/BillsComp/BuyInternetComp";
import BuyCableComp from "../../components/mainComp/BillsComp/BuyCableComp";
import PayExamComp from "../../components/mainComp/BillsComp/PayExamComp";
import EditSuccessComp from "../../components/mainComp/SettingsComp/EditProfileComp/EditSuccessComp";
import PasswordSccessComp from "../../components/mainComp/SettingsComp/ChangePasswordComp/PasswordSccessComp";
import ChangePinSuccess from "../../components/mainComp/SettingsComp/ChangePinComp/ChangePinSuccess";
import NotificationComp from "../../components/mainComp/HomeComp/HomeHeaderComp/NotificationComp";
import FingerPrintComp from "../../components/mainComp/SettingsComp/FingerPrintComp";
import ScanFingerPrint from "../../components/mainComp/SettingsComp/FingerPrintComp/ScanFingerPrint";
import FingerPrintSuccess from "../../components/mainComp/SettingsComp/FingerPrintComp/FingerPrintSuccess";
import SendMoneyBeneficiaries from "../../components/mainComp/SettingsComp/WalletComp/sendMoneyScreen/Beneficiaries";
import Bookings from "../../components/mainComp/SettingsComp/Bookings";
import FleetOrderComp from "../../components/mainComp/SettingsComp/RequestComp";
import RequestComp from "../../components/mainComp/SettingsComp/RequestComp";
import RequestDriverAssign from "../../components/mainComp/SettingsComp/RequestComp/RequestDriverAssign";
import RequestDriverSuccess from "../../components/mainComp/SettingsComp/RequestComp/RequestDriverSuccess";
import TransactionPinScreen from "../../components/mainComp/KYCComp/TransactionPIn";
import ReEnterPIN from "../../components/mainComp/KYCComp/TransactionPIn/ReEnterPIN";
import WalletSetModal from "../../components/mainComp/HomeComp/WalletSetModel";
import CreateWallet from "../../components/mainComp/KYCComp/CreateWallet";

const HomeStack = createNativeStackNavigator();

const HomeStackNavigation = () => {
  return (
    <HomeStack.Navigator>
      <HomeStack.Group>
        <HomeStack.Screen
          name="HomeScreen"
          component={HomeScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="SettingsScreen"
          component={SettingsScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="WalletComp"
          component={WalletComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="OrderStatus"
          component={OrderStatus}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="EditProfile"
          component={EditProfile}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="EditSuccessComp"
          component={EditSuccessComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ChangePasswordComp"
          component={ChangePasswordComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="PasswordSccessComp"
          component={PasswordSccessComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ReferAndEarnComp"
          component={ReferAndEarnComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="SendMoneyScreen"
          component={SendMoneyScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="SendMoneySummary"
          component={SendMoneySummary}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="SendMoneySuccess"
          component={SendMoneySuccess}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="SendMoneyEnterPin"
          component={SendMoneyEnterPin}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="FundWalletComp"
          component={FundWalletComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="BillsStackNavigation"
          component={BillsStackNavigation}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="TransactionsStackNav"
          component={TransactionsStackNav}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="FundWalletSuccess"
          component={FundWalletSuccess}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ChangePinComp"
          component={ChangePinComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ReEnterPin"
          component={ReEnterPin}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ChangePinSuccess"
          component={ChangePinSuccess}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="NotificationComp"
          component={NotificationComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="FundWalletEnterPin"
          component={FundWalletEnterPin}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="FingerPrintComp"
          component={FingerPrintComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ScanFingerPrint"
          component={ScanFingerPrint}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="FingerPrintSuccess"
          component={FingerPrintSuccess}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="SendMoneyBeneficiaries"
          component={SendMoneyBeneficiaries}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="Bookings"
          component={Bookings}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="RequestComp"
          component={RequestComp}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="RequestDriverAssign"
          component={RequestDriverAssign}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="RequestDriverSuccess"
          component={RequestDriverSuccess}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="TransactionPinScreen"
          component={TransactionPinScreen}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="ReEnterPIN"
          component={ReEnterPIN}
          options={{ headerShown: false }}
        />
        <HomeStack.Screen
          name="CreateWallet"
          component={CreateWallet}
          options={{ headerShown: false }}
        />

        <HomeStack.Screen
          name="WalletSetModal"
          component={WalletSetModal}
          options={{ headerShown: false }}
        />
      </HomeStack.Group>
    </HomeStack.Navigator>
  );
};

export default HomeStackNavigation;
