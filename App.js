import React from 'react'
import { Text, ScrollView, View } from 'react-native'
import BasicComponent from './src/pages/sample/BasicComponent'
import BasicStyling from './src/pages/sample/BasicStyling'

export const App = () => {
  return (
    <ScrollView>
      <View style={{padding:20}}>
      <Text>Basic Component : </Text>
      <BasicComponent />
      <Text>Basic Styling : </Text>
      <BasicStyling />
      </View>
    </ScrollView>
  )
}

export default App;
