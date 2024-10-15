import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { View,Text } from 'react-native'

export default function passagers() {
  return (
    <View>
    <Text>How many of you are going?</Text>
    <CustomButton
      title={"Book"}
      onPress={() =>
           router.replace("/(tabs)/trips")
      }
      className="w-11/12 mt-10"
    />
  
</View>
  )
}
