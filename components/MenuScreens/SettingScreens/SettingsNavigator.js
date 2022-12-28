import {Text, View, StyleSheet } from 'react-native';
import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SettingScreen from './SettingScreen';


//Fungere ikke endnu
export default function SettingsNavigator() {
    const Stack = createStackNavigator()
    return (
            <Stack.Navigator initialRouteName="SettingScreen">
                <Stack.Screen name="SettingScreen" component={SettingScreen} options={{headerShown: false}}/>
            </Stack.Navigator>
    );
}