import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import BasicComponent from './src/pages/sample/BasicComponent';
import BasicLayouting from './src/pages/sample/BasicLayouting';
import BasicStyling from './src/pages/sample/BasicStyling';

export const App = () => {
  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <Text>Basic Layouting : </Text>
        <BasicLayouting />
        <Text>Basic Styling : </Text>
        <BasicStyling />
        <Text>Basic Component : </Text>
        <BasicComponent />
      </View>
    </ScrollView>
  );
};

export default App;
