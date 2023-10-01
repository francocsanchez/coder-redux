import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Category, Product } from "../screens";
import { useSelector } from "react-redux";

const Stack = createStackNavigator();

const StackNavigator = () => {
  const { categorySelected, productIdSelected } = useSelector(
    (state) => state.shop
  );

  return (
    <Stack.Navigator initialRouteName="Home">
      <Stack.Screen
        name="Home"
        component={Home}
        options={{
          headerTitleAlign: "center",
          headerTitle: "TIENDA DE ARTICULOS",
        }}
      />
      <Stack.Screen
        name="Category"
        component={Category}
        options={() => {
          return {
            headerTitleAlign: "center",
            headerTitle: categorySelected.title.toUpperCase(),
          };
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={() => {
          return {
            headerTitleAlign: "center",
            headerTitle: productIdSelected.title.toUpperCase(),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
