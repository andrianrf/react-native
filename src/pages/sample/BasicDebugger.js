import React from 'react'
import { View, Text } from 'react-native'

export default function BasicDebugger() {
    console.log("ini basic debugger");
    return (
        <View style={{borderWidth:1}}>
            <Text>https://reactnative.dev/docs/debugging</Text>
            <Text>You can access the developer menu by shaking your device or by selecting "Shake Gesture" inside the Hardware menu in the iOS Simulator. You can also use the ⌘D keyboard shortcut when your app is running in the iOS Simulator, or ⌘M when running in an Android emulator on Mac OS and Ctrl+M on Windows and Linux.</Text>

            <Text>Chrome Developer Tools</Text>
            <Text>http://localhost:8081/debugger-ui &gt; Inspect</Text>

            <Text>React Developer Tools</Text>
            <Text>npm install -g react-devtools</Text>
            <Text>react-devtools</Text>
        </View>
    )
}
