import React, { useState } from 'react'
import { View, Text, Button } from 'react-native'

const Counter = () => {
    const [number, setNumber] = useState(0);
    return (
        <View>
            <Text>{number}</Text>
            <Button title="Tambah" onPress={() => setNumber(number+1)}/>
        </View>
    )
}

export default function StateDinamis() {
    return (
        <View>
            <Counter />
            <Counter />
            <Counter />
        </View>
    )
}
