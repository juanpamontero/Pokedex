import About from "../screens/About";
import Principal from "../screens/Principal";
import Serch from "../screens/Serch";
import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { MaterialIcons } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import theme from "../assets/theme";

const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();

export const MyStack = () => {
    return (
        <Stack.Navigator
            initialRouteName="PokedexStack"
        >
            <Stack.Screen name="PokedexStack" component={Principal} options={{
                headerShown: false
            }} />
            <Stack.Screen name="AboutStack" component={About} options={{
                headerShown: false
            }} />
        </Stack.Navigator>
    )
}

export const TabNavigator = () => {
    return (
        <NavigationContainer>
            <Tab.Navigator screenOptions={{
                tabBarActiveTintColor: theme.colors.primary,
            }}>
                <Tab.Screen name="Pokedex" component={MyStack} options={{
                    tabBarIcon: ({ color, size }) => (
                        <MaterialIcons name="list-alt" color={color} size={size} />
                    ),
                    headerShown: false
                }} />
                <Tab.Screen name="Serch" component={Serch} options={{
                    tabBarIcon: ({ color, size }) => (
                        <Ionicons name="ios-search" color={color} size={size} />
                    ),
                    headerShown: false

                }} />
            </Tab.Navigator>
        </NavigationContainer>
    )
}