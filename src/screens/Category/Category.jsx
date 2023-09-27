import React, { useState, useEffect } from "react";
import { FlatList, SafeAreaView, View } from "react-native";

import { styles } from "./Category.Styles";

import { Products } from "../../data";

import { ProductCard, Counter } from "./components";

const Category = ({ route, navigation }) => {
  const category = route.params.item;
  const [productsList, setProductsList] = useState([]);

  useEffect(() => {
    const filterCategory = Products.filter(
      (item) => item.category === category.title
    );
    setProductsList(filterCategory);
  }, []);

  return (
    <SafeAreaView>
      <Counter />
      <FlatList
        data={productsList}
        keyExtractor={(item) => item.id.toString()}
        contentContainerStyle={styles.container}
        renderItem={({ item }) => (
          <ProductCard product={item} navigation={navigation} />
        )}
      />
    </SafeAreaView>
  );
};

export default Category;
