import React from 'react'
import {StyleSheet, Text, View} from 'react-native'
import {NavigationContainer} from '@react-navigation/native'
import HomeStackNavigator from './src/navigations/Navigator'

const App = () => {
  return (
    <NavigationContainer>
      <HomeStackNavigator />
    </NavigationContainer>
  )
}

export default App
