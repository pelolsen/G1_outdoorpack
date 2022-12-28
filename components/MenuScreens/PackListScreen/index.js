import * as React from 'react';
import {View, Text, FlatList, TouchableOpacity, StyleSheet, Image} from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import ButtonComponent from '../../ButtonComponent';
import styles from './styles';
import Ionicons from 'react-native-vector-icons/Ionicons'

const PackListScreen = ({route, navigation}) => {

    const [list,setList] = useState()
    const [days, setDays] = useState('')
    
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
            firebase
                .database()
                .ref(`/UserTours/${listID}/tourlength`)
                .on('value', snapshot => {
                    setDays(snapshot.val())
                });
            
        }
    },[]);

    // Vi viser ingenting hvis der ikke er data
    if (!list && !days) {
        return <Text>-_- Something went wrong -_-</Text>;
    }

    const handleSelectItem = id => {
        /*Her søger vi direkte i vores array af biler og finder bil objektet som matcher idet vi har tilsendt*/
        const item = Object.entries(list).find( item => item[0] === id /*id*/)
        //Mangler at lave Item details
        console.log(item);
        navigation.navigate('Item Details', { item });
    };
    console.log('==============LIST MED ID======================');
    //console.log(list);
    console.log('====================================');
    // Flatlist forventer et array. Derfor tager vi alle values fra vores cars objekt, og bruger som array til listen
    const itemArray = Object.values(list);
    console.log('====================================');
    console.log(itemArray);
    console.log('====================================');
    const itemKeys = Object.keys(list);
    console.log('================KEYS====================');
    //console.log(itemKeys);
    console.log('====================================');
    const tourl = parseInt(days)
    function getPriceofPack(){
        let sum = 0
        itemArray.forEach((element)=>{
            const special = ['Outdoor Pants', 'Warm Baselayer Top', 'Baselayer Top', 'Warm Baselayer Pants', 'Baselayer Pants']
            if(special.includes(element.badge)){
                if(tourl >= 3){
                    sum += 2 * parseInt(element.price)
                } else {sum += parseInt(element.price)}
            } else if(element.badge == 'Socks') {
                if(tourl >= 2 && tourl <=3 ){
                    sum += 2 * parseInt(element.price)
                } else if(tourl >= 4){
                    sum += 4 * parseInt(element.price)
                } else{
                    sum += parseInt(element.price)
                }
            } else {
                sum += parseInt(element.price)
            }
        })
        const pricingrate = 0.075
        let packprice = sum * pricingrate
        console.log(packprice);
        return packprice
    }
    
    let packprice = getPriceofPack()
    
    function setItemQuantity(item, tourlength){
        const special = ['Outdoor Pants', 'Warm Baselayer Top', 'Baselayer Top', 'Warm Baselayer Pants', 'Baselayer Pants']
        let num;
        if(special.includes(item)){
            if(tourlength >= 3){
                num = 'x2'
            } else {num = 'x1'}
        } else if(item == 'Socks') {
            if(tourlength >= 2 && tourlength <=3 ){
                num = 'x2'
            } else if(tourlength >= 4){
                num = 'x4'
            }else {num = 'x1'}
        } else {
            num = 'x1'
        }
        return (<Text style={styles.text}>{num}</Text>)
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
                    <Text style={styles.title}>PACKLIST</Text>
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
                    // Vi bruger carKeys til at finde ID på den aktuelle bil og returnerer dette som key, og giver det med som ID til CarListItem
                    keyExtractor={(item, index) => itemKeys[index]}
                    renderItem={({ item, index }) => {
                    //console.log([item, index]);
                    return(
                        <TouchableOpacity style={styles.listbutton} onPress={() => handleSelectItem(itemKeys[index])}>
                            <View style={{flexDirection:"row"}}>
                                <View style={{flex:1}}>
                                    <Image source={{uri: `${item.img}`}}
                                        style={styles.img} />
                                </View>
                                <View style={{flex:4, justifyContent:'center'}}>
                                    <Text style={styles.text}>
                                        {item.badge}
                                    </Text>
                                </View>
                                <View style={{flex:1, justifyContent:'center'}}>
                                   {setItemQuantity(item.badge, tourl)} 
                                </View>
                            </View>
                            
                        </TouchableOpacity>
                    )
                    }}
                />
                </View>
            </View>
            <View style={styles.buttomcontainer}>
                <ButtonComponent type = "primary" content={'Rent this PACK for ONLY DKK' + packprice.toFixed(2)} onPress = {()=>  handleSave()}/>
            </View>
        </View> 
    );
}

export default PackListScreen;


