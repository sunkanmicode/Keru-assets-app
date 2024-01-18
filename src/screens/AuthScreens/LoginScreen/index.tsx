import { View, Text } from 'react-native'
import React from 'react'
import LoginComp from '../../../components/authComp/LoginComp'
import useAuthStore from '../../../stores/authStore'

const LoginScreen = () => {
  const setIsLoggedIn = useAuthStore((state) => state.setIsLoggedIn);
   const [isSecureEntry, setIsSecureEntry] = React.useState(true);
  return (
    <LoginComp
      isSecureEntry={isSecureEntry}
      setIsSecureEntry={setIsSecureEntry}
      setIsLoggedIn={setIsLoggedIn}
    />
  );
}

export default LoginScreen