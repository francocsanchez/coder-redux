import { Order } from '../screens'
import { createNativeStackNavigator } from '@react-navigation/native-stack'

const Stack = createNativeStackNavigator()

const OrderNavigator = () => {
    return (
        <Stack.Navigator
          initialRouteName="Order"
        >
          <Stack.Screen name="Order" component={Order}  options={{
          headerTitleAlign: "center",
          headerTitle: "ORDENES CONFIRMADAS",
        }}/>
        </Stack.Navigator>
      )
}

export default OrderNavigator