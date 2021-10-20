import React, { useEffect, useState } from 'react';
import {Text, ScrollView, View} from 'react-native';
import BasicComponent from './src/pages/sample/BasicComponent';
import BasicDebugger from './src/pages/sample/BasicDebugger';
import BasicLayouting from './src/pages/sample/BasicLayouting';
import BasicPositioning from './src/pages/sample/BasicPositioning';
import BasicStyling from './src/pages/sample/BasicStyling';
import LifeCycleClass from './src/pages/sample/LifeCycleClass';
import LifeCycleFunction from './src/pages/sample/LifeCycleFunction';
import PropsDinamis from './src/pages/sample/PropsDinamis';

export const App = () => {
  const [isShow, setIsShow] = useState(true);
  useEffect(() => {
    setTimeout(() => {
      setIsShow(false);
    }, 4000);
  }, [])
  return (
    <ScrollView>
      <View style={{padding: 20}}>
        <Text>PropsDinamis : </Text>
        <PropsDinamis />
        <Text>LifeCycleFunction : </Text>
        {isShow && <LifeCycleFunction />}
        <Text>LifeCycleClass : </Text>
        {isShow && <LifeCycleClass />}
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
