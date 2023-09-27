import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import React from "react";
import { StyleSheet, View } from "react-native";

import CartNavigator from "./CartNavigator";
import StackNavigator from "./StackNavigator";
import OrderNavigator from "./OrderNavigator";

import Feather from "@expo/vector-icons/Feather";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <Tab.Navigator
      initialRouteName="HomeTab"
      screenOptions={{
        headerShown: false,
        tabBarShowLabel: false,
        tabBarStyle: styles.tabBar,
      }}
    >
      <Tab.Screen
        name="HomeTab"
        component={StackNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="home" size={24} color="#fff" />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="CartTab"
        component={CartNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="shopping-bag" size={24} color={"#fff"} />
            </View>
          ),
        }}
      />
      <Tab.Screen
        name="OrderTab"
        component={OrderNavigator}
        options={{
          tabBarIcon: ({ focused }) => (
            <View style={focused ? styles.iconContainer : null}>
              <Feather name="shopping-cart" size={24} color="#fff" />
            </View>
          ),
        }}
      />
    </Tab.Navigator>
  );
};

export default TabNavigator;

const styles = StyleSheet.create({
  tabBar: {
    backgroundColor: "#5cceee",
    borderTopRightRadius: 15,
    borderTopLeftRadius: 15,
    paddingTop: 5,
  },
  iconContainer: {
    backgroundColor: "#384E77",
    borderRadius: 20,
    padding: 8,
    justifyContent: "center",
    alignItems: "center",
  },
});
