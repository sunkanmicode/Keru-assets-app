import { View, Text } from 'react-native'
import React from 'react'
import RegisterComp from '../../../components/authComp/RegisterComp';
import Toast from 'react-native-toast-message';
import { RegisterFormData, registerUser } from '../../../api_services/auth_apis';
import { useMutation } from '@tanstack/react-query';
import useAuthStore from '../../../stores/authStore';
import { useNavigation } from '@react-navigation/native';

const RegisterScreen = () => {
  const navigation = useNavigation()
  const [isSecureEntry, setIsSecureEntry] = React.useState(true);
  const [isChecked, setChecked] = React.useState(false);


  //STORE
  const { setAuthUser, setAuthDataInfo, authDataInfo } = useAuthStore(
    (state) => ({
      setAuthUser: state.setAuthUser,
      setAuthDataInfo: state.setAuthDataInfo,
      authDataInfo: state.authDataInfo,
    })
  );

  const registerMutation = useMutation({
    mutationFn: registerUser,
    onSuccess: (data) => {
      // console.log(data);
      Toast.show({
        type: "success",
        text2: `${data?.message}`,
      });
      navigation.navigate("VerifyAccountScreen");
    },
    onError: (error: any) => {
      console.log(error);
      Toast.show({
        type: "error",
        text1: `${error?.response?.data?.message}`,
      });
    },
  });

  const onSubmit = (data: RegisterFormData) => {
    // console.log(data, isChecked, "kkkkkk");
    setAuthDataInfo({  email: data.email });
    setAuthUser(data);
    registerMutation.mutate(data);
  };
  return (
    <RegisterComp
      {...{
        isSecureEntry,
        setIsSecureEntry,
        onSubmit,
        setChecked,
        isChecked,
        registerMutation,
      }}
    />
  );
}

export default RegisterScreen