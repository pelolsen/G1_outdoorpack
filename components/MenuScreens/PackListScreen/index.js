import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import styles from './styles';

const PackListScreen = ({route, navigation}) => {

    const [list,setList] = useState()
    const [id, setId] = useState('')
    
    const dbRef = firebase.database().ref()
    const listID = route.params.listId
    console.log(listID);
    
    useEffect(() => {
        
        if(!list) {
            firebase
                .database()
                .ref(`/UserTours/${listID}/packlist`)
                .on('value', snapshot => {
                    setList(snapshot.val())
                });
        }
    },[]);

    // Vi viser ingenting hvis der ikke er data
    if (!list) {
        return <Text>-_- Something went wrong -_-</Text>;
    }

    const handleSelectItem = id => {
        /*Her søger vi direkte i vores array af biler og finder bil objektet som matcher idet vi har tilsendt*/
        const item = Object.entries(list).find( item => item[0] === id /*id*/)
        //Mangler at lave Item details
        console.log(item);
        //navigation.navigate('Item Details', { item });
    };

    // Flatlist forventer et array. Derfor tager vi alle values fra vores cars objekt, og bruger som array til listen
    const itemArray = Object.values(list);
    console.log('====================================');
    console.log(itemArray);
    console.log('====================================');
    const itemKeys = Object.keys(list);


    return (
        <View style={styles.view}>
        <Text style={styles.title}>PACKING LIST</Text>
        <FlatList
            data={itemArray}
            // Vi bruger carKeys til at finde ID på den aktuelle bil og returnerer dette som key, og giver det med som ID til CarListItem
            keyExtractor={(item, index) => itemKeys[index]}
            renderItem={({ item, index }) => {
                return(
                    <TouchableOpacity style={styles.container} onPress={() => handleSelectItem(itemKeys[index])}>
                        <Text style={styles.text}>
                            {item.badge}
                        </Text>
                    </TouchableOpacity>
                )
            }}
        />
        </View>
    );
}

export default PackListScreen;


