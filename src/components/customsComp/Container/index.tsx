import { View, Text } from 'react-native'
import React, { Children } from 'react'

type ContianerType = {
    children: React.ReactNode
    style?: StyleSheet
}

const Contianer = ({ children, style }: ContianerType) => {
  return (
    <View className="flex-1 bg-white p-6">
      <Text>{children}</Text>
    </View>
  );
};

export default Contianer