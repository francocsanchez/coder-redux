import { Cart } from "../screens";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

const Stack = createNativeStackNavigator();

function CartNavigator() {
  return (
    <Stack.Navigator initialRouteName="Cart">
      <Stack.Screen name="Cart" component={Cart} options={{
          headerTitleAlign: "center",
          headerTitle: "CARRITO DE COMPRAS",
        }}/>
    </Stack.Navigator>
  );
}

export default CartNavigator;
