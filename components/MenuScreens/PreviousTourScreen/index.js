import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet} from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import ButtonComponent from '../../ButtonComponent';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'

const PreviousTourScreen = ({route, navigation}) => {
    const uemail = firebase.auth().currentUser.email
    const [list,setList] = useState()
    const [id, setId] = useState('')
    
    const dbRef = firebase.database().ref()
    //const listID = route.params.listId
    //console.log(listID);
    
    useEffect(() => {
        
        if(!list) {
            firebase
                .database()
                .ref(`/UserTours`)
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
        console.log('Dette er IDET:' + id);
        const item = Object.entries(list).find( item => item[0] === id /*id*/)
        const listId = item[0]
        navigation.navigate("PackList", {listId})
    };

    //console.log(list);
    function objSearch(obj,uemail){
        let itemArray = []
        let itemKey=[]
        for (let key in obj) { 
            let atr;
        
            // get the value
            atr= obj[key];
            if(atr.uemail == uemail){
                itemArray.push(atr)
                itemKey.push(key)
            }
        }
        const resp = {
            itemArray: itemArray,
            itemKeys: itemKey
        }
        return resp
    }
    const sortetlist = objSearch(list,uemail)
    const itemArray = sortetlist.itemArray;
    const itemKeys = sortetlist.itemKeys;

    const renderTemperature = (temperature) =>{
        const temp = parseInt(temperature)
        const temps = ['-5°C to 5°C','5°C to 10°C','10°C to 15°C','15°C to 20°C','20°C to 30°C']
        const texttobe = temps[temp + 1]
        return (<Text style={styles.text}>Temperature: {texttobe}</Text>)
    }

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
                    <Text style={styles.title}>PREVIOUS TRIPS</Text>
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
            <View style={styles.listcontainer}>
                <View style={styles.listcontainerpad}>
                <FlatList
                    data={itemArray}
                    style={styles.flatliststyle}
                    keyExtractor={(item, index) => itemKeys[index]}
                    renderItem={({ item, index }) => {
                        //console.log([item, index]);
                        return(
                            <TouchableOpacity style={styles.listbutton} onPress={() => handleSelectItem(itemKeys[index])}>
                                <Text style={styles.textbold}>
                                    Trip to {item.location}
                                </Text>
                                <Text style={styles.text}>   -Equipment</Text>
                                {item.sleepingkit == '1'? <Text style={styles.text}>   -Sleeping Kit</Text>:null }
                                {item.food == '1'? <Text style={styles.text}>   -Food</Text>:null }
                                {item.tourlength == '1'? <Text style={styles.text}>Length: {item.tourlength} Day</Text>:<Text style={styles.text}>Length: {item.tourlength} Days</Text> }
                                {renderTemperature(item.temperature)}
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

export default PreviousTourScreen;