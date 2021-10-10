import React, {Component} from 'react';
import {Image, Text, View} from 'react-native';
import foto from '../../assets/img/foto.jpg';

export default class BasicLayouting extends Component {
  render() {
    return (
      <View style={{borderWidth: 1}}>
        <Text>Default Layout</Text>
        <View>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', flex: 1, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', flex: 2, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', flex: 3, height: 50}} />
        </View>
        <Text>Row Layout</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'center',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', flex: 1, height: 100}} />
          <View style={{backgroundColor: '#1dd1a1', flex: 2, height: 150}} />
          <View style={{backgroundColor: '#5f27cd', flex: 3, height: 200}} />
        </View>
        <Text>Align Items (flex-start/center/flex-end)</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            alignItems: 'flex-end',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', flex: 1, height: 100}} />
          <View style={{backgroundColor: '#1dd1a1', flex: 2, height: 150}} />
          <View style={{backgroundColor: '#5f27cd', flex: 3, height: 200}} />
        </View>
        <Text>justifyContent (flex-start/center/space-between/flex-end)</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            justifyContent: 'center',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 50, height: 100}} />
          <View style={{backgroundColor: '#1dd1a1', width: 50, height: 150}} />
          <View style={{backgroundColor: '#5f27cd', width: 50, height: 200}} />
        </View>
        <Text>justifyContent (flex-start/center/space-between/flex-end)</Text>
        <View
          style={{
            flexDirection: 'row',
            backgroundColor: '#c8d6e5',
            justifyContent: 'space-between',
          }}>
          <View style={{backgroundColor: '#ee5253', width: 50, height: 50}} />
          <View style={{backgroundColor: '#feca57', width: 50, height: 50}} />
          <View style={{backgroundColor: '#1dd1a1', width: 50, height: 50}} />
          <View style={{backgroundColor: '#5f27cd', width: 50, height: 50}} />
        </View>

        <Text>Implementasi 1 :</Text>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-around',
          }}>
          <Text>Beranda</Text>
          <Text>Video</Text>
          <Text>Playlist</Text>
          <Text>Komunitas</Text>
          <Text>Channel</Text>
          <Text>Tentang</Text>
        </View>

        <Text>Implementasi 2 :</Text>
        <View style={{flexDirection:'row', alignItems: 'center'}}>
            <Image source={foto} style={{width:75, height:75, borderRadius:50, margin:10}} />
            <View>
            <Text style={{fontSize:20, fontWeight:'bold'}}>Andrian RF</Text>
            <Text>Application Developer</Text>
            </View>
        </View>

      </View>
    );
  }
}
