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
        <Image className="h-full w-full absolute" source={require('../assets/img/background.png')} />
       
        <View className="flex-row justify-around w-full absolute">
             <Animated.Image 
                entering={FadeInUp.delay(200).duration(1000).springify()} 
                 source={require('../assets/img/light.png')} 
                className="h-[225] w-[90]"
             />
            <Animated.Image 
                entering={FadeInUp.delay(400).duration(1000).springify()} 
                source={require('../assets/img/light.png')} 
                className="h-[160] w-[65] opacity-75" 
            />
        </View>

        <View  className="h-full w-full flex justify-around pt-48">
        <View className="flex items-center">
             <Animated.Text 
                   entering={FadeInUp.duration(1000).springify()} 
                   className="text-white font-bold tracking-wider text-5xl">
                   Sign Up
             </Animated.Text>
        </View>

        </View>
    </View>
    
  )
}

export default SignupScreen