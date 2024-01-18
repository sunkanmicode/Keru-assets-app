import { View, Text } from 'react-native'
import React from 'react'
import RegisterComp from '../../../components/authComp/RegisterComp';

const RegisterScreen = () => {
   const [isSecureEntry, setIsSecureEntry] = React.useState(true);
  return (
    <RegisterComp
      isSecureEntry={isSecureEntry}
      setIsSecureEntry={setIsSecureEntry}
    />
  );
}

export default RegisterScreen