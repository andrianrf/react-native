import React, { useEffect, useState } from 'react'
import { View, Text } from 'react-native'

export default function LifeCycleFunction() {

    const [subscriber, setSubscriber] = useState(200);

    useEffect(() => {
        console.log('did mount');
    }, []);

    useEffect(() => {
        console.log('did update')
        setTimeout(() => {
            setSubscriber(400);
        }, 2000);
        return () => {
            console.log('did unmount')
        }
    }, [subscriber])

    return (
        <View>
            <Text>LifeCycleFunction {subscriber}</Text>
        </View>
    )
}
