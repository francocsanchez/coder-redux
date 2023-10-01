import { View, Text, Image, Pressable } from "react-native";
import React from "react";

import { styles } from "./ProductCard.Styles";

import { useDispatch } from "react-redux";
import { setProductIdSelected } from "../../../../features/shop/shopSlice";

const ProductCard = ({ product, navigation }) => {
  const dispatch = useDispatch();

  return (
    <Pressable
      style={styles.card}
      onPress={() => {
        dispatch(setProductIdSelected(product));
        navigation.navigate("Product");
      }}
    >
      <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
      <View style={styles.info}>
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
        <Text style={styles.brand}>Brand: {product.brand}</Text>
      </View>
    </Pressable>
  );
};

export default ProductCard;
