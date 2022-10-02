//STADIG UNDER UDVIKLING//
import {Text, View, StyleSheet } from 'react-native';
import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import ProfileScreen from './ProfileScreen';
import LoginComponent from './LoginComponent';
import SignInComponent from './SignInComponent';
import ButtonComponent from './ButtonComponent';


//Fungere ikke endnu
export default function LoggedinStackNavigator() {
    const Stack = createStackNavigator()
    return (
            <Stack.Navigator initialRouteName="ProfileScreen">
                <Stack.Screen name="Profile Screen" component={ProfileScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Login" component={LoginComponent} options={{headerShown: false}}/>
                <Stack.Screen name="SignIn" component={SignInComponent} options={{headerShown: false}}/>
            </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    }
  });