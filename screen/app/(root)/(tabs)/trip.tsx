import CustomButton from '@/components/CustomButton'
import { router } from 'expo-router'
import React from 'react'
import { View,Text } from 'react-native'

export default function trip() {
  return (
    <View>
        <Text>trip</Text>
        <CustomButton
          title={"Confirm"}
          onPress={() =>
               router.replace("/(tabs)/date")
          }
          className="w-11/12 mt-10"
        />
        </View>
  )
}
