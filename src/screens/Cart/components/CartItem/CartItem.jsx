import React from "react";
import { View, Image, Text, Pressable } from "react-native";
import Feather from "@expo/vector-icons/Feather";

import { styles } from "./CartItem.Styles";

const CartItem = () => {
  return (
    <View style={styles.container}>
      <View style={styles.imageContainer}>
        <Image
          source={{
            uri: "https://reactnative.dev/img/tiny_logo.png",
          }}
          style={styles.image}
        />
      </View>
      <View style={styles.textContainer}>
        <Text style={styles.name}>Nombre del Producto</Text>
      </View>
      <View style={styles.infoContainer}>
        <View style={styles.quantityContainer}>
          <Text style={styles.quantity}>Cantidad: 2</Text>
          <Text style={styles.price}>Precio: $24.99</Text>
        </View>
        <Pressable>
          <Feather name="trash" size={24} color={"red"} />
        </Pressable>
      </View>
    </View>
  );
};

export default CartItem;
