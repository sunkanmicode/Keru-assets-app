import { View, Text } from 'react-native'
import React from 'react'
import LoginComp from '../../../components/authComp/LoginComp'
import useAuthStore from '../../../stores/authStore'
import { useNavigation } from '@react-navigation/native'
import Toast from 'react-native-toast-message'
import { useMutation } from '@tanstack/react-query'
import { LoginFormData, loginUser } from '../../../api_services/auth_apis'

const LoginScreen = () => {
  const navigation = useNavigation()
   const [isSecureEntry, setIsSecureEntry] = React.useState(true);

  const { setIsLoggedIn, setAuthDataInfo, authDataInfo } = useAuthStore(
    (state) => ({
      setIsLoggedIn: state.setIsLoggedIn,
      setAuthDataInfo: state.setAuthDataInfo,
      authDataInfo: state.authDataInfo,
    })
  );

  console.log(authDataInfo, "authDataInfo");

  const navigateTo = (screen: any, toastMessage: string) => {
    // const navigation = useNavigation()
    navigation.navigate(screen);
    Toast.show({
      type: "error",
      text1: toastMessage,
    });
  };

   const handleLoginErrorConditions = (data: any) => {
     // Check if data and data.data are defined
     if (data?.data && data?.data?.user) {
       // Destructure the properties from data.data
       const {  is_verified} = data?.data?.user;
       // Use if-else statements to handle different conditions
       if (!is_verified) {
         navigateTo("VerifyAccountScreen", "Please verify your account");
       } 
     
       else {
         // Default case
         Toast.show({
           type: "error",
           text1: "Oops! Something went wrong",
           text2: `${data?.response?.data?.message}`,
         });
       }
     } else {
       // Handle the case when data or data.data is undefined
       Toast.show({
         type: "error",
         text1: "Oops! Something went wrong",
         text2: "Invalid data",
       });
     }
   };

   const handleLoginSuccess = (data: any) => {
     if (
       data?.data?.user?.is_verified 
      //  data?.data?.user?.is_pin_set
       // data?.data?.user?.is_wallet_set
     ) {
       Toast.show({
         type: "success",
         text1: "Logged Successfully",
       });

       setIsLoggedIn(true);
       console.log(data, "SUCCESSLogin");
     } else {
       handleLoginErrorConditions(data);
     }
   };

   const handleLoginError = (error: any) => {
     console.log(error, "ERROR");
     Toast.show({
       type: "error",
       text1: "Oops! Something went wrong",
       text2: `${error?.response?.data?.message}`,
     });
   };

   const loginUserMutation = useMutation({
     mutationFn: loginUser,
     onSuccess: handleLoginSuccess,
     onError: handleLoginError,
   });


    const onSubmit = (data: LoginFormData) => {
      // console.log(data, isChecked, "kkkkkk");
      loginUserMutation.mutate({
        email: data?.email,
        password: data?.password,
        type: "OWNER",
      });
      setAuthDataInfo({ email: data.email });
    };


  return (
    <LoginComp
      isSecureEntry={isSecureEntry}
      setIsSecureEntry={setIsSecureEntry}
      onSubmit={onSubmit}
      loginUserMutation={loginUserMutation}
    />
  );
}

export default LoginScreen