import { View, Text, Image, Pressable } from 'react-native'
import React from 'react'

import {styles} from "./ProductCard.Styles"

const ProductCard = ({product, navigation}) => {
  return (
    <Pressable style={styles.card}
    onPress={() => navigation.navigate("Product", { product })}
    >
      <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
        <Text style={styles.brand}>Brand: {product.brand}</Text>
      </View>
    </Pressable>
  )
}

export default ProductCard