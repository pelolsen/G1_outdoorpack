import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import ButtonComponent from '../../components/ButtonComponent';

const ListDumpScreen = () => {
    const itemArray = [{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'},{badge: 'HALO'}]
    const itemKeys = [1,2,3,4,5,6,7,8,9,10,11,12,13,14,15,16,17,18,19,20,21,22]
    const packprice = 1234.1249
    return (
        <View style={styles.container}>
            <View style={styles.titlecontainer}>
                <Text style={styles.title}>PACKING LIST</Text>
            </View>
            <View style={styles.listcontainer}>
                <View style={styles.listcontainerpad}>
                <FlatList
                    data={itemArray}
                    style={styles.flatliststyle}
                    // Vi bruger carKeys til at finde ID på den aktuelle bil og returnerer dette som key, og giver det med som ID til CarListItem
                    keyExtractor={(item, index) => itemKeys[index]}
                    renderItem={({ item, index }) => {
                        //console.log([item, index]);
                        return(
                            <TouchableOpacity style={styles.listbutton} onPress={() => handleSelectItem(itemKeys[index])}>
                                <Text style={styles.text}>
                                    Tour to {item.location}
                                </Text>
                                <Text style={styles.text}>
                                    {item.uemail}
                                </Text>
                            </TouchableOpacity>
                        )
                    }}
                />
                </View>
            </View>
            <View style={styles.buttomcontainer}>
                
            </View>
        </View>
        
    );
}

export default ListDumpScreen;

const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#181818',
    },
    titlecontainer: {
        flex: 1,
        alignItems: 'center'
    },
    listcontainer:{
        flex: 6
    },
    buttomcontainer: {
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center'
    },
    listcontainerpad:{
        flex: 1
    },
    title:{
        top: 60,
        color: 'green',
        fontSize: 20,
        fontWeight:'300',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10
    },
    flatliststyle:{

    },
    text:{
        color: 'green',
        fontWeight:'3000'
    },
    listbutton: {
        flex: 1,
        borderWidth: 1,
        borderRadius:10,
        borderColor: 'green',
        margin: 5,
        padding: 5,
        height: 50,
        justifyContent:'center'
    },
  });