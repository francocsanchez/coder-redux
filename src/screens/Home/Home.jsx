import { SafeAreaView } from "react-native";
import React from "react";

import { styles } from "./Home.Styles";

import { ListCategories } from "./components";

const Home = ({ navigation }) => {
  return (
    <SafeAreaView style={styles.container}>
      <ListCategories navigation={navigation} />
    </SafeAreaView>
  );
};

export default Home;
