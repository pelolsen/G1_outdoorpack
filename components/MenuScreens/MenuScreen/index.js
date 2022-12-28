import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles'
import firebase from "firebase/compat";
import MenuButtonComponent from '../MenuButtonComponent';
import { NavigationContainer } from '@react-navigation/native';

function MenuScreen ({navigation}) {
    //Log User out
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };
    //Ekstra security if Firebase is not working properly
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Hello, {firebase.auth().currentUser.email}</Text>
            <View style={styles.BigButtonsContainer}>
                <View style={styles.twoButtonsContainer}>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent style={{heigh: 200}} type = "primary" content={"New Trip"} onPress = {()=>  navigation.navigate('NewTour')}/>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"Previous Trips"} onPress = {()=>  navigation.navigate('PreviousTour')}/>
                    </View>
                </View>
                <View style={styles.twoButtonsContainer}>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"Popular Packs"} onPress = {()=>  navigation.navigate('PopularPacks')}/>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"Contact Us"} onPress = {()=>  navigation.navigate('ContactScreen')}/>
                    </View>
                </View>
                <View style={styles.twoButtonsContainer}>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"Settings"} onPress = {()=>  navigation.navigate('Setting')}/>
                    </View>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent type = "primary" content={"Log Out"} onPress = {()=>  handleLogOut()}/>
                    </View>
                </View>
            </View>

        </View>
    );

}

export default MenuScreen