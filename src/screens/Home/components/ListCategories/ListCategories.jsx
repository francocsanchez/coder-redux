import { Text, FlatList, View, Pressable } from "react-native";
import React from "react";

import { styles } from "./ListCategories.Styles";
import { FontAwesome } from "@expo/vector-icons";

import { useSelector, useDispatch } from "react-redux";
import { setCategorySelected } from "../../../../features/shop/shopSlice";

const ListCategories = ({ navigation }) => {
  const dispatch = useDispatch();

  const categories = useSelector((state) => state.shop.categories);

  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          style={styles.categoryItem}
          onPress={() => {
            dispatch(setCategorySelected(item));
            navigation.navigate("Category");
          }}
        >
          <Text style={styles.categoryTitle}>{item.title}</Text>
          <View style={styles.iconContainer}>
            <FontAwesome name="folder-open" size={24} color="#5cceee" />
          </View>
        </Pressable>
      )}
    />
  );
};

export default ListCategories;
