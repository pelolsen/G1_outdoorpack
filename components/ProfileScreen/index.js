import React from 'react';
import {View, Text, Button} from 'react-native';
import styles from './styles'
import { initializeApp } from "firebase/app";
import firebase from "firebase/compat";
import ButtonComponent from '../ButtonComponent';

function ProfileScreen ({navigate}) {
    const handleLogOut = async () => {
        await firebase.auth().signOut();
    };
    if (!firebase.auth().currentUser) {
        return <View><Text>Not found</Text></View>;
    }

    return (
        <View style={styles.container} >
            <Text style={styles.title}>Current user: {firebase.auth().currentUser.email}</Text>
            <View style={styles.buttonsContainer}>
                <ButtonComponent type = "primary" content={"Log Out"} onPress = {()=>  handleLogOut()}/>
            </View>
        </View>
    );

}

export default ProfileScreen