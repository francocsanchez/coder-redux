import React from "react";
import { View, Text, Image, ScrollView, SafeAreaView } from "react-native";

import { styles } from "./Product.Styles";

const Product = ({ route }) => {
  const product = route.params.product;

  return (
    <SafeAreaView>
      <ScrollView style={styles.container}>
        <Image source={{ uri: product.thumbnail }} style={styles.thumbnail} />
        <Text style={styles.title}>{product.title}</Text>
        <Text style={styles.brand}>Brand: {product.brand}</Text>
        <Text style={styles.price}>Price: ${product.price}</Text>
        <Text style={styles.discount}>
          Discount: {product.discountPercentage}%
        </Text>
        <Text style={styles.stock}>Stock: {product.stock}</Text>
        <Text style={styles.rating}>Rating: {product.rating}</Text>
        <Text style={styles.description}>{product.description}</Text>
        <Text style={styles.title}>Imagenes</Text>
        <View style={styles.imageGrid}>
          {product.images.map((image, index) => (
            <Image
              source={{ uri: image }}
              style={styles.thumbnail}
              key={index}
            />
          ))}
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Product;
