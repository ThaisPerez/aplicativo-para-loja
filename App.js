import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from './src/screen/home';
import Detalhe from './src/screen/detalhe';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

const Tab = createBottomTabNavigator();
const Stack = createNativeStackNavigator();

function NavigationHome() {
  return (
    <Stack.Navigator initialRouteName='Detalhe' screenOptions={{ headerShown: false }}>
        <Stack.Screen name="Home" component={Home} />
        <Stack.Screen name="Detalhe" component={Detalhe} />
      </Stack.Navigator>
  );
}
function App() {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{
        tabBarActiveTintColor: '#7762FF',
        headerShown: false     
        
      }}>
        <Tab.Screen name="Página Inicial " component={NavigationHome} options={{
          tabBarLabel: 'Início',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="home" color={color} size={size} />
          ),
        }} /> 
        
        <Tab.Screen name="Pesquisa" component={Detalhe} options={{
          tabBarLabel: 'Pesquisa',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="shopping-search" color={color} size={size} />
          ),
        }} /> 
        <Tab.Screen name="Carrinho" component={Detalhe} options={{
          tabBarLabel: 'Carrinho',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="cart" color={color} size={size} />
          ),
        }} /> 
        <Tab.Screen name="Favoritas" component={Home} options={{
          tabBarLabel: 'Favoritas',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="heart" color={color} size={size} />
          ),
        }} /> 
        <Tab.Screen name="Perfil" component={Home} options={{
          tabBarLabel: 'Perfil',
          tabBarIcon: ({ color, size }) => (
            <MaterialCommunityIcons name="account" color={color} size={size} />
          ),
        }} /> 
        
        
        
      </Tab.Navigator>
    </NavigationContainer>
  );
}

export default App;