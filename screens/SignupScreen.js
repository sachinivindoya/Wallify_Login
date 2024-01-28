import React from 'react';
import { StatusBar } from 'expo-status-bar';
import { useNavigation } from '@react-navigation/native';
import Animated, { FadeIn, FadeInDown, FadeInUp } from 'react-native-reanimated';
import { View, Text, Image, SafeAreaView, TextInput, TouchableOpacity } from 'react-native'

function SignupScreen() {
    const navigation = useNavigation();
  return (
    <View className="bg-white h-full w-full">
        <StatusBar style="light" />
       
    </View>
    
  )
}

export default SignupScreen