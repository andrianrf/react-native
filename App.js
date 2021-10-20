import React from 'react';
import {Text, ScrollView, View} from 'react-native';
import BasicComponent from './src/pages/sample/BasicComponent';
import BasicDebugger from './src/pages/sample/BasicDebugger';
import BasicLayouting from './src/pages/sample/BasicLayouting';
import BasicPositioning from './src/pages/sample/BasicPositioning';
import BasicStyling from './src/pages/sample/BasicStyling';

export const App = () => {
  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <Text>Basic Debugger : </Text>
        <BasicDebugger />
        <Text>Basic Positioning : </Text>
        <BasicPositioning />
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
