import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { Home, Category, Product } from "../screens";

const Stack = createStackNavigator();

const StackNavigator = () => {
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
        options={({ route }) => {
          return {
            headerTitleAlign: "center",
            headerTitle: route.params.item.title.toUpperCase(),
          };
        }}
      />
      <Stack.Screen
        name="Product"
        component={Product}
        options={({ route }) => {
          return {
            headerTitleAlign: "center",
            headerTitle: route.params.product.title.toUpperCase(),
          };
        }}
      />
    </Stack.Navigator>
  );
};

export default StackNavigator;
