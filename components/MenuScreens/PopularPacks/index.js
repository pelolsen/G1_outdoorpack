import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import ButtonComponent from '../../ButtonComponent';
import styles from './styles';

const PopularPacks = ({route, navigation}) => {

    const [list,setList] = useState()
    
   // const dbRef = firebase.database().ref()
   // const listID = route.params.listId
    //console.log(listID);
    
    useEffect(() => {
        
        if(!list) {
            firebase
                .database()
                .ref(`/popularpacks`)
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
        navigation.navigate('Item Details', { item });
    };

    // Flatlist forventer et array. Derfor tager vi alle values fra vores cars objekt, og bruger som array til listen
    const itemArray = Object.values(list);
    const itemKeys = Object.keys(list);


    return (
        
        <View style={styles.view}>
        <Text style={styles.title}>POPULAR PACKS</Text>
        <FlatList
            data={itemArray}
            style={styles.listen}
            // Vi bruger carKeys til at finde ID på den aktuelle bil og returnerer dette som key, og giver det med som ID til CarListItem
            keyExtractor={(item, index) => itemKeys[index]}
            renderItem={({ item, index }) => {
                //console.log([item, index]);
                return(
                    <TouchableOpacity style={styles.container} onPress={() => handleSelectItem(itemKeys[index])}>
                        <View style={{flexDirection:"row"}}>
                            <View style={{flex:1}}>
                            <Image source={{uri: `${item.img}`}}
                                style={styles.img} />
                            </View>
                            <View style={{flex:1}}>
                                <Text style={styles.txt1}>{"\n"}{item.brand}: {"\n"}</Text>
                                <Text style={styles.txt1}>   - {item.badge}{"\n"}</Text>
                                <Text style={styles.txt1}>Buy: DKK {item.price},00</Text>
                                <Text style={styles.txt1}>Rent: DKK {item.rental},00</Text>
                                
                            </View>
                        </View>
                    </TouchableOpacity>
                )
            }}
        />
        </View>
        
    );
}

export default PopularPacks;

