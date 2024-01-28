import React from 'react'
import { View, Text } from 'react-native';
import { useNavigation } from '@react-navigation/native'

function SignupScreen() {
    const navigation = useNavigation();
  return (
    <View>
        <Text>SignupScreen</Text>
    </View>
    
  )
}

export default SignupScreen