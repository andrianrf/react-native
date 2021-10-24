import React, { useEffect, useState } from 'react';
import {Text, ScrollView, View} from 'react-native';
import AxiosFetchAPI from './src/pages/sample/AxiosFetchAPI';
import BasicComponent from './src/pages/sample/BasicComponent';
import BasicDebugger from './src/pages/sample/BasicDebugger';
import BasicFetchAPI from './src/pages/sample/BasicFetchAPI';
import BasicLayouting from './src/pages/sample/BasicLayouting';
import BasicPositioning from './src/pages/sample/BasicPositioning';
import BasicStyling from './src/pages/sample/BasicStyling';
import ComponentCommunication from './src/pages/sample/ComponentCommunication';
import LifeCycleClass from './src/pages/sample/LifeCycleClass';
import LifeCycleFunction from './src/pages/sample/LifeCycleFunction';
import LoadSvg from './src/pages/sample/LoadSvg';
import PropsDinamis from './src/pages/sample/PropsDinamis';
import StateDinamis from './src/pages/sample/StateDinamis';

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
        <Text>AxiosFetchAPI : </Text>
        <AxiosFetchAPI />
        <Text>BasicFetchAPI : </Text>
        <BasicFetchAPI />
        <Text>LoadSvg : </Text>
        <LoadSvg />
        <Text>ComponentCommunication : </Text>
        <ComponentCommunication />
        <Text>StateDinamis : </Text>
        <StateDinamis />
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
