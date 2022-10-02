import {Text, View, StyleSheet } from 'react-native';
import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import StartPageComponent from './StartPageComponent';
import LoginComponent from './LoginComponent';
import SignInComponent from './SignInComponent';
import ButtonComponent from './ButtonComponent';


//Husk at ændre navn
export default function StackNavigator() {
    const Stack = createStackNavigator()
    const StartPageScreen = ({navigation}) =>{
        return (
            <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <StartPageComponent name = {"OutPack"} tagline = {"Packing list and shop for outdoor lovers"} image = {require('../assets/startpagebackground.jpg')}/>
                <View style={styles.buttonsContainer}>
                    <ButtonComponent type = "primary" content={"Login"} onPress = {()=>  navigation.navigate('Login')}/>
                    <ButtonComponent type = "secondary" content={"Sign Up"} onPress = {()=>  navigation.navigate('SignIn')}/>
                </View>
            </View>
        )
    }
    return (
            <Stack.Navigator initialRouteName="StartPage">
                <Stack.Screen name="StartPage" component={StartPageScreen} options={{headerShown: false}}/>
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