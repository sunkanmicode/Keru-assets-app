export type AuthStackParamList = {
  Onboarding: undefined;
  Login: undefined;
  Register: undefined;
  ForgotPassword: undefined;
  VerifyAccountScreen: undefined;
  AccountCreatedScreen: undefined;
  GetStartedScreen: undefined;
  //   ResetPassword: undefined;
};

export type HomeStackParamList = {
  HomeScreen: undefined;
  VehiclesScreen: undefined;
  VehicleDetailsScreen: { item: object };
  SetVehicleLocationScreen: undefined;
  HomeStackNavigation: undefined;
  VehicleStackNavigation: { screen: any };
  VehicleSeeOrderScreen: undefined;
  ReviewServiceComp: undefined;
  StoreStackNavigation: { screen: any };
  DetailsScreen: undefined;
  StoreScreen: undefined;
  StoreCartScreen: undefined;
  StoreCheckoutScreen: undefined;
  StoreEnterPinScreen: undefined;
  OrderCompletedScreen: undefined;
  ManuallyDetails: undefined;
  RecommandedVehicle: undefined;
  SettingsScreen: undefined;
  WalletComp: undefined;
  OrderStatus: undefined;
  EditProfile: undefined;
  EditSuccessComp: undefined;
  ChangePasswordComp: undefined;
  PasswordSccessComp: undefined;
  ReferAndEarnComp: undefined;
  SendMoneyScreen: undefined;
  SendMoneySummary: undefined;
  SendMoneySuccess: undefined;
  SendMoneyEnterPin: undefined;
  FundWalletComp: undefined;
  BillsStackNavigation: { screen: any };
  BillsScreens: undefined;
  BuyDataComp: undefined;
  ReviewOrderComp: undefined;
  BuyDataSuccessComp: undefined;
  BuyAirtimeComp: undefined;
  BuyAirtimeReviewComp: undefined;
  BuyAirtimeSuccess: undefined;
  BuyElectricityComp: undefined;
  BuyElecttricityReviewComp: undefined;
  BuyElectricitySuccess: undefined;
  BuyInternetComp: undefined;
  BuyInternatReview: undefined;
  BuyInternetSuccess: undefined;
  BuyCableComp: undefined;
  BuyCableReview: undefined;
  BuyCableSuccess: undefined;
  PayExamComp: undefined;
  PayExamReview: undefined;
  PayExamSuccess: undefined;
  TransactionsStackNav: undefined;
  TransactionsScreen: undefined;
  FundWalletSuccess: undefined;
  ChangePinComp: undefined;
  ReEnterPin: undefined;
  ChangePinSuccess: undefined;
  FundWalletEnterPin: undefined;
  AirtimeEnterPin: undefined;
  DataEnterPin: undefined;
  CableEnterPin: undefined;
  ElectricityEnterPin: undefined;
  InternetEnterPin: undefined;
  PayExamEnterPin: undefined;
  NotificationComp: undefined;
  FingerPrintComp: undefined;
  ScanFingerPrint: undefined;
  FingerPrintSuccess: undefined;
  SendMoneyBeneficiaries: undefined;
  DriverDetailsComp: undefined;
  FleetSuccess: undefined;
  Bookings: undefined;
  RequestComp: undefined;
  RequestDriverAssign: undefined;
  RequestDriverSuccess: undefined;
  //   CartScreen: { item: object };
};

export interface RootStackParamList
  extends HomeStackParamList,
    AuthStackParamList {}

declare global {
  namespace ReactNavigation {
    interface RootParamList extends RootStackParamList {}
  }
}
