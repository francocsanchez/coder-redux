import { SafeAreaView } from "react-native";
import React, { useState, useEffect } from "react";

import { styles } from "./Home.Styles";

import { ListCategories } from "./components";

import { Category } from "../../data";

const Home = ({ navigation }) => {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    setCategories(Category);
    console.log(categories);
  }, []);

  return (
    <SafeAreaView style={styles.container}>
      <ListCategories categories={categories} navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
