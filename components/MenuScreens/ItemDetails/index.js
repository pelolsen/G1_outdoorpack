import * as React from 'react';
import { View, Text, Platform, FlatList, StyleSheet, Button, Alert, Image } from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import styles from './styles';


const ItemDetails = ({route,navigation}) => {
    
    const [item,setItem] = useState({});

    useEffect(() => {
        //Henter car values og sætter dem
        setItem(route.params.item[1]);

        //Når vi forlader screen, tøm object
        return () => {
            setItem({})
        }
    });

    const handleEdit = () => {
        // Vi navigerer videre til EditCar skærmen og sender bilen videre med
        const car = route.params.item
        console.log('====================================');
        console.log(item);
        console.log('====================================');
        navigation.navigate('Edit Car', { car });
    };

    // Vi spørger brugeren om han er sikker
    const confirmDelete = () => {
        //Er det mobile?
        if(Platform.OS ==='ios' || Platform.OS ==='android'){
            Alert.alert('Are you sure?', 'Do you want to delete the car?', [
                { text: 'Cancel', style: 'cancel' },
                // Vi bruger this.handleDelete som eventHandler til onPress
                { text: 'Delete', style: 'destructive', onPress: () => handleDelete() },
            ]);
        }
    };

    // Vi sletter den aktuelle bil
    const  handleDelete = () => {
        const id = route.params.car[0];
        try {
            firebase
                .database()
                // Vi sætter bilens ID ind i stien
                .ref(`/Cars/${id}`)
                // Og fjerner data fra den sti
                .remove();
            // Og går tilbage når det er udført
            navigation.goBack();
        } catch (error) {
            Alert.alert(error.message);
        }
    };


    if (!item) {
        return <Text>No data</Text>;
    }
    
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
                <Text style={styles.pricetext}>{item.price}</Text>

            </View>
            <View style={styles.description}>
                <Text style={styles.descriptionrtexttitle}>Description</Text>
                <Text  style={styles.descriptionrtext}>{item.description}</Text>
            </View>
            <View style={styles.button}>

            </View>

        </View>
    );
}

export default ItemDetails;

