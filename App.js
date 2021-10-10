import React from 'react'
import { View, Text } from 'react-native'
import BasicComponent from './src/pages/sample/BasicComponent'
import BasicStyling from './src/pages/sample/BasicStyling'

export const App = () => {
  return (
    <View>
      <Text>Basic Component : </Text>
      <BasicComponent />
      <Text>Basic Styling : </Text>
      <BasicStyling />
    </View>
  )
}

export default App;
