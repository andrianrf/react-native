import React from 'react';
import {Image, Text, TextInput, View} from 'react-native';

export const BasicComponent = () => {
    return (
        <View>
        <View style={{width:80, height:80, backgroundColor: '#0abde3'}} />
        <Photo />
        <Text>Andrian Ramadhan Febriana</Text>
        <TextInput style={{borderWidth:1}} />
        </View>
    )
}

export const Photo = () => {
    return (
        <Image 
        source={{uri: 'https://placeimg.com/100/100/animals'}}
        style={{width:100, height:100, borderRadius:50}}
        />
    )
}

export default BasicComponent;