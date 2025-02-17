import { Button, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { createStackNavigator } from '@react-navigation/stack'
import { Cart, Favorite, Home, Profile, Splashscreen } from '../pages';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import ButtonTabs from '../components/molescules/BottomTabs';

const Stack = createStackNavigator();

const Tab = createBottomTabNavigator();

const MainApp = () => {
  return (
    <Tab.Navigator screenOptions={{ headerShown: false }} tabBar={props => <ButtonTabs {...props}/>}>
      <Tab.Screen name='Home' component={Home}/>
      <Tab.Screen name='Favorite' component={Favorite}/>
      <Tab.Screen name='Cart' component={Cart}/>
      <Tab.Screen name='Profile' component={Profile}/>
    </Tab.Navigator>
  )
}



const Router = () => {
  return (
    <Stack.Navigator screenOptions={{ headerShown: false }}>
        <Stack.Screen name='Splashscreen' component={Splashscreen}/>
        <Stack.Screen name='Home' component={Home}/>
        <Stack.Screen name='MainApp' component={MainApp}/>
    </Stack.Navigator>
  )
}

export default Router
