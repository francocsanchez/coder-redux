import React, { useState, useEffect } from "react";
import { View, Text, FlatList, Pressable } from "react-native";
import { Cartitem } from "./components";
import { dataCart } from "../../data";
import { styles } from "./Cart.Styles";

const Cart = () => {
  const [cart, setCart] = useState([]);

  useEffect(() => {
    setCart(dataCart);
  }, []);

  return (
    <View style={styles.container}>
      <View style={styles.listContainer}>
        <FlatList
          data={dataCart}
          keyExtractor={(item) => item.id}
          renderItem={() => <Cartitem />}
        />
      </View>
      <View style={styles.buttonContainer}>
        <Pressable style={styles.confirmButton}>
          <Text style={styles.confirmButtonText}>Confirm</Text>
        </Pressable>
        <Text style={styles.totalText}>{`Total $100`}</Text>
      </View>
    </View>
  );
};

export default Cart;
