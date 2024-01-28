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
        <Image className="h-full w-full absolute" source={require('../assets/img/bg.png.jpg')} />
       
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
                   className="text-black font-bold tracking-wider text-5xl">
                   Sign Up
             </Animated.Text>
        </View>
        <View className="flex items-center mx-5 space-y-4">
            <Animated.View 
                  entering={FadeInDown.duration(1000).springify()} 
                 className="bg-black/5 p-5 rounded-2xl w-full">
                 <TextInput
                     placeholder="Username"
                     placeholderTextColor={'gray'}
                />
             </Animated.View>
            <Animated.View 
                  entering={FadeInDown.delay(200).duration(1000).springify()} 
                  className="bg-black/5 p-5 rounded-2xl w-full">
                <TextInput
                   placeholder="Email"
                   placeholderTextColor={'gray'}
                  />
           </Animated.View>
             <Animated.View 
                   entering={FadeInDown.delay(400).duration(1000).springify()} 
                  className="bg-black/5 p-5 rounded-2xl w-full mb-3">
                  <TextInput
                     placeholder="Password"
                       placeholderTextColor={'gray'}
                       secureTextEntry
                    />
                </Animated.View>
                 <Animated.View className="w-full" entering={FadeInDown.delay(600).duration(1000).springify()}>
                   <TouchableOpacity className="w-full bg-sky-600 p-3 rounded-2xl mb-3">
                  <Text className="text-xl font-bold text-white text-center">SignUp</Text>
                </TouchableOpacity>
                  </Animated.View>
                 <Animated.View 
                   entering={FadeInDown.delay(800).duration(1000).springify()} 
                     className="flex-row justify-center">
                     <Text>Already have an account? </Text>
                     <TouchableOpacity onPress={()=> navigation.navigate('Login')}>
                     <Text className="text-sky-600">Login</Text>
                    </TouchableOpacity>
                </Animated.View>
            </View>
        </View>
    </View>
    
  );
}

export default SignupScreen