import React, { useEffect } from "react";
import { FlatList, SafeAreaView } from "react-native";

import { styles } from "./Category.Styles";

import { ProductCard } from "./components";
import { useSelector, useDispatch } from "react-redux";
import { setProductsFilteredByCategory } from "../../features/shop/shopSlice";

const Category = ({ navigation }) => {
  const dispatch = useDispatch();

  const { products, categorySelected, productsFilteredByCategory } =
    useSelector((state) => state.shop);

  useEffect(() => {
    const filterCategory = products.filter(
      (item) => item.category === categorySelected.title
    );
    dispatch(setProductsFilteredByCategory(filterCategory));
  }, []);

  return (
    <SafeAreaView>
      <FlatList
        data={productsFilteredByCategory}
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
