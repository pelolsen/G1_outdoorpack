import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles'
import firebase from "firebase/compat";
import MenuButtonComponent from '../MenuButtonComponent';
import { NavigationContainer } from '@react-navigation/native';

function MenuScreen ({navigation}) {
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Hello, {firebase.auth().currentUser.email}</Text>
            <View style={styles.BigButtonsContainer}>
                <View style={styles.twoButtonsContainer}>
                    <View style={styles.buttonsContainer}>
                        <MenuButtonComponent style={{heigh: 200}} type = "primary" content={"New Tour"} onPress = {()=>  navigation.navigate('NewTour')}/>
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
    );

}

export default MenuScreen