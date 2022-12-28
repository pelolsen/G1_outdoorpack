import * as React from 'react';
import { useCallback } from "react";
import {View, Text, TouchableOpacity, Linking, Alert} from 'react-native';
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'

function SettingScreen ({navigation}) {
    const handlePressSet = useCallback(async () => {
        // Open the custom settings if the app has one
        await Linking.openSettings();
      }, []);
    return (
       <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <View style={styles.backbutton}>
                <Ionicons
                      name={'arrow-back'}
                      size={30}
                      color={'white'}
                      style={{top: 55}}
                      onPress = {() => navigation.goBack()}

                  />
                </View>
                <View style={styles.titleinnercontainer}>
                    <Text style={styles.title}>Settings</Text>
                </View>
                <View style={styles.homebutton}>
                <Ionicons
                      name={'home-outline'}
                      size={30}
                      color={'white'}
                      style={{top: 55}}
                      onPress = {() => navigation.navigate('MenuScreen')}

                  />
                </View>
            </View>
            <View style={styles.contentcontainer}>
                <TouchableOpacity style={styles.content}>
                    <Text style={styles.textBold}>Profile</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content}>
                    <Text style={styles.textBold}>Billing</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content} onPress={() => handlePressSet()}>
                    <Text style={styles.textBold}>App Settings</Text>
                </TouchableOpacity>

            </View>
       </View>
    );

}

export default SettingScreen