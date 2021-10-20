import React from 'react'
import { View, Text, ScrollView, Image } from 'react-native'
import foto from '../../assets/img/foto.jpg'

const Story = (props) => {
    return (
        <View style={{alignItems:'center', marginRight:10, marginLeft:10}}>
            <Image source={props.gambar} style={{width:70, height:70, borderRadius:70/2}} />
            <Text style={{maxWidth:70, textAlign:'center'}}>{props.judul}</Text> 
        </View>
    )
}


export default function PropsDinamis() {
    return (
        <ScrollView horizontal>
            <View style={{flexDirection: 'row'}}>
                <Story gambar={foto} judul="Judul 1" />
                <Story gambar={foto} judul="Judul 2" />
                <Story gambar={foto} judul="Judul 3" />
                <Story gambar={foto} judul="Judul 4" />
                <Story gambar={foto} judul="Judul 5" />
            </View>
        </ScrollView>
    )
}
