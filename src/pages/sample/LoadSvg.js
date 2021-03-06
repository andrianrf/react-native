import React from 'react';
import {View, Text} from 'react-native';
import { SvgCssUri } from 'react-native-svg';
import ImgSvg from '../../assets/img/undraw_searching_p5ux.svg';

export default function LoadSvg() {
    //reference https://github.com/react-native-svg/react-native-svg
  return (
    <View style={{borderWidth:1}}>
      <ImgSvg
        width={300}
        height={300}
        fill="yellow"
        stroke="yellow"
        color="yellow"
      />
      <SvgCssUri
        width="100"
        height="100"
        fill="yellow"
        stroke="#00FF00"
        color="green"
        uri="https://media.flaticon.com/dist/min/img/collections/collection-tour.svg"
      />
    </View>
  );
}
