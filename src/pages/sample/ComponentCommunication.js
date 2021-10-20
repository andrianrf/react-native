import React, { useState } from 'react'
import { View, Text } from 'react-native'
import Cart from '../../components/Cart'
import Product from '../../components/Product'

export default function ComponentCommunication() {
    const [quantity, setQuantity] = useState(0)
    return (
        <View>
            <Cart quantity={quantity} />
            <Product onBeli={() => setQuantity(quantity+1)} />
        </View>
    )
}
