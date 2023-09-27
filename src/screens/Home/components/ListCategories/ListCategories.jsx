import { Text, FlatList, View, Pressable } from "react-native";
import React from "react";
import { FontAwesome } from "@expo/vector-icons";

import { styles } from "./ListCategories.Styles";

const ListCategories = ({ categories, navigation }) => {
  return (
    <FlatList
      data={categories}
      keyExtractor={(item) => item.id}
      renderItem={({ item }) => (
        <Pressable
          style={styles.categoryItem}
          onPress={() => navigation.navigate("Category", { item })}
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
