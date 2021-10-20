import React from 'react'
import { Image, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import foto from '../assets/img/foto.jpg';

export default function Product(props) {
    return (
        <View
        style={styles.wrapper}>
          <Image
            source={foto}
            style={styles.foto}
          />
        <Text style={styles.title}>
          New Macbook Pro 2019
        </Text>
        <Text
          style={styles.price}>
          Rp. 25.000.000
        </Text>
        <Text
          style={styles.city}>
          Jakarta Barat
        </Text>
        <TouchableOpacity onPress={props.onBeli}>
        <View
          style={styles.buttonWrapper}>
          <Text
            style={styles.button}>
            BELI
          </Text>
        </View>
        </TouchableOpacity>

      </View>
    )
}

const styles = StyleSheet.create({

    wrapper: {
        padding: 12,
        backgroundColor: '#F2F2F2',
        width: 212,
        borderRadius: 8,
        alignItems:'center'
      },
      foto: {width: 100, height: 107, borderRadius: 8},
      title: {fontSize: 14, fontWeight: 'bold', marginTop: 16},
      price: {
        fontSize: 12,
        fontWeight: 'bold',
        color: '#ff8000',
        marginTop: 12,
      },
      city: {
        fontSize: 12,
        fontWeight: '300',
        marginTop: 12,
      },
      buttonWrapper: {
        backgroundColor: '#00ff00',
        paddingVertical: 6,
        borderRadius: 25,
        marginTop: 20,
        width:100
      },
      button: {
        fontSize: 14,
        fontWeight: '600',
        color: 'white',
        textAlign: 'center',
      },

})
