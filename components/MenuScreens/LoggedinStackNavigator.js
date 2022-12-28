//STADIG UNDER UDVIKLING//
import {Text, View, StyleSheet, Settings } from 'react-native';
import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SignInComponent from '../SignInComponent';
import MenuScreen from './MenuScreen';
import NewTourScreen from './NewTourScreen';
import MenuButtonComponent from './MenuButtonComponent';
import PackListScreen from './PackListScreen';
import ItemDetails from './ItemDetails';
import PopularPacks from './PopularPacks';
import PreviousTourScreen from './PreviousTourScreen';
import ContactScreen from './ContactScreen';
import SettingsNavigator from './SettingScreens/SettingsNavigator';

//Fungere ikke endnu
export default function LoggedinStackNavigator() {
    const Stack = createStackNavigator()
    return (
            <Stack.Navigator initialRouteName="MenuScreen">
                <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown: false}}/>
                <Stack.Screen name="NewTour" component={NewTourScreen} options={{headerShown: false}}/>
                <Stack.Screen name="PackList" component={PackListScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Item Details" component={ItemDetails} options={{headerShown: false}}/>
                <Stack.Screen name="PopularPacks" component={PopularPacks} options={{headerShown: false}}/>
                <Stack.Screen name="PreviousTour" component={PreviousTourScreen} options={{headerShown: false}}/>
                <Stack.Screen name="ContactScreen" component={ContactScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Setting" component={SettingsNavigator} options={{headerShown: false}}/>
            </Stack.Navigator>
    );
}