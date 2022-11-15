//STADIG UNDER UDVIKLING//
import {Text, View, StyleSheet } from 'react-native';
import * as React from "react";
import { createStackNavigator } from '@react-navigation/stack';
import SignInComponent from '../SignInComponent';
import MenuScreen from './MenuScreen';
import NewTourScreen from './NewTourScreen';
import MenuButtonComponent from './MenuButtonComponent';
import PackListScreen from './PackListScreen';
import ItemDetails from './ItemDetails';


//Fungere ikke endnu
export default function LoggedinStackNavigator() {
    const Stack = createStackNavigator()
    const StartPageScreen = ({navigation}) =>{
        return (
            <View style={styles.container} >
            {/*<Text style={styles.title}>Hello, {firebase.auth().currentUser.email}</Text>*/}
            <View style={styles.BigButtonsContainer}>
                <View style={styles.twoButtonsContainer}>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"New Tour"} onPress = {()=>  navigation.navigate('NewTour')}/>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"Previous Tours"} onPress = {()=>  handleLogOut()}/>
                    </View>
                </View>
                <View style={styles.twoButtonsContainer}>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"To be specified"} onPress = {()=>  handleLogOut()}/>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"To be specified"} onPress = {()=>  handleLogOut()}/>
                    </View>
                </View>
                <View style={styles.twoButtonsContainer}>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"Settings"} onPress = {()=>  handleLogOut()}/>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"Log Out"} onPress = {()=>  handleLogOut()}/>
                    </View>
                </View>
            </View>

        </View>
        )
    }
    return (
            <Stack.Navigator initialRouteName="MenuScreen">
                <Stack.Screen name="MenuScreen" component={MenuScreen} options={{headerShown: false}}/>
                <Stack.Screen name="NewTour" component={NewTourScreen} options={{headerShown: false}}/>
                <Stack.Screen name="PackList" component={PackListScreen} options={{headerShown: false}}/>
                <Stack.Screen name="Item Details" component={ItemDetails} options={{headerShown: false}}/>
            </Stack.Navigator>
    );
}

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: '#181818',
        height: '100%',
        width: '100%'
    },
    buttonsContainer: {
        width: '40%',
        margin: 20, 
    },
    BigButtonsContainer:{
        top:70,
        height: "80%"
    },
    twoButtonsContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
    },
    title:{
        top: 60,
        color: 'green',
        fontSize: 20,
        fontWeight:'300',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10
    }
});
