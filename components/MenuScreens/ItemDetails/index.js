import * as React from 'react';
import { useCallback } from "react";
import { View, Text, Platform, FlatList, StyleSheet, Button, Alert, Image, ScrollView, Linking } from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import styles from './styles';
import ButtonComponent from '../../ButtonComponent';


const ItemDetails = ({route,navigation}) => {
    
    const [item,setItem] = useState({});

    useEffect(() => {
        //Henter genstands values og sætter dem
        setItem(route.params.item[1]);

        //Når vi forlader screen, tøm object
        return () => {
            setItem({})
        }
    });

    if (!item) {
        return <Text>No data</Text>;
    }
    const url = item.link
    
    const handlePress = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(url);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(url);
        } else {
          Alert.alert(`Something went wrong`);
        }
      }, [url]);
    //all content
    return (
        <View style={styles.container}>
            <View style={styles.header}>
                <Text  style={styles.title}>{item.brand}</Text>
            </View>
            <View style={styles.picture}>
            <Image source={{uri: `${item.img}`}}
                style={{width: 400, height: 400}} />

            </View>
            <View style={styles.price}>
                <Text style={styles.pricetext}>DKK {item.price},00</Text>

            </View>
            <ScrollView style={styles.description}>
                <Text style={styles.descriptionrtexttitle}>Description</Text>
                <Text  style={styles.descriptionrtext}>{item.description}</Text>
            </ScrollView>
            <View style={styles.button}>
            <ButtonComponent type = "primary" content={"Buy"} onPress = {()=> handlePress()}/>
            </View>

        </View>
    );
}

export default ItemDetails;

