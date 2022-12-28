import * as React from 'react';
import {
    View,
    Text,
    StyleSheet,
    TextInput,
    Button,
    Alert,
    ScrollView,
} from 'react-native';
import firebase from 'firebase/compat';
import {useEffect, useState} from "react";
import styles from './styles'
import ButtonComponent from '../../ButtonComponent';
import { InputData } from '../../../models/selectitemdata';
import DropDownPicker from 'react-native-dropdown-picker';
import Ionicons from 'react-native-vector-icons/Ionicons'

const NewTourScreen = ({navigation,route}) => {
 
    useEffect(() => {
        return () => {
            setValueLocation(null)
            setValueTourlength(null)
            setValueTemperature(null)
            setValueRain(null)
            setValueTerrain(null)
            setValueLevel(null)
            setValueGender(null)
            setValueSizetop(null)
            setValueSizebottom(null)
            setValueFood(null)
            setValueKitchen(null)
            setValueSleepingkit(null)
            setListId('')
        };
    }, []);

    const selectData = InputData
    const [listId, setListId] = useState('')
    const [valueLocation, setValueLocation] = useState(null)
    const [open, setOpen] = useState(false);
    const [valueTourlength, setValueTourlength] = useState(null);
    const [items, setItems] = useState(selectData.tourlength);
    const [open2, setOpen2] = useState(false);
    const [valueTemperature, setValueTemperature] = useState(null);
    const [itemsTemp, setItemsTemp] = useState(selectData.temperature);
    const [open3, setOpen3] = useState(false);
    const [valueRain, setValueRain] = useState(null);
    const [itemsRain, setItemsRain] = useState(selectData.rain);
    const [open4, setOpen4] = useState(false);
    const [valueTerrain, setValueTerrain] = useState(null);
    const [itemsTerreain, setItemsTerreain] = useState(selectData.terrain);
    const [open5, setOpen5] = useState(false);
    const [valueLevel, setValueLevel] = useState(null);
    const [itemsLevel, setItems5] = useState(selectData.level);
    const [open6, setOpen6] = useState(false);
    const [valueGender, setValueGender] = useState(null);
    const [itemsGender, setItemsGender] = useState(selectData.gender);
    const [open7, setOpen7] = useState(false);
    const [valueSizetop, setValueSizetop] = useState(null);
    const [itemsSizetop, setItemsSizetop] = useState(selectData.sizetop);
    const [open8, setOpen8] = useState(false);
    const [valueSizebottom, setValueSizebottom] = useState(null);
    const [itemsSizebottom, setItemsSizebottom] = useState(selectData.sizebottom);
    const [open9, setOpen9] = useState(false);
    const [valueFood, setValueFood] = useState(null);
    const [itemsFood, setItemsFood] = useState(selectData.food);
    const [open10, setOpen10] = useState(false);
    const [valueKitchen, setValueKitchen] = useState(null);
    const [itemsKitchen, setItemsKitchen] = useState(selectData.kitchen);
    const [open11, setOpen11] = useState(false);
    const [valueSleepingkit, setValueSleepingkit] = useState(null);
    const [itemsSleepingkit, setItemsSleepingkit] = useState(selectData.sleepingkit);

//Algoritme til at montere listen
    const listMaker = async ()=>{
      const newTour = {
        location: valueLocation,
        tourlength: valueTourlength,
        temperature: valueTemperature,
        rain: valueRain,
        terrain: valueTerrain,
        level: valueLevel,
        gender: valueGender,
        sizetop: valueSizetop,
        sizebottom: valueSizebottom,
        food: valueFood,
        kitchen: valueKitchen,
        sleepingkit: valueSleepingkit
    }
      let list ={}
      const dbRef = firebase.database().ref();

      //-----------BACKPACK---------------
      let tourlength = parseInt(newTour.tourlength)
      console.log(tourlength);
      //orderByChild sammenlagt med equalTo gør at jeg kan udvægle bestemte genstande fra databasen 
      await dbRef.child('backpacks').orderByChild('tourlength').equalTo(tourlength).get().then((snapshot) => {
          if (snapshot.exists()) { 
              Object.assign(list, snapshot.val())
              console.log('✅ Backpack');
          } else {
              console.log("No data available");
          }
      }).catch((error) => {
          console.error(error);
      }); 
      //-----------PANTS---------------
      const temperature = parseInt(newTour.temperature)
      const gender = newTour.gender
      await dbRef.child('pants').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
          if (snapshot.exists()) {
              Object.assign(list, snapshot.val())
              console.log('✅ Pants');
          } else {
              console.log("No data available");
          }
      }).catch((error) => {
          console.error(error);
      });
      //--------BASELAYERS---------
      if(temperature <=2){
          await dbRef.child('baselayerTop').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
              if (snapshot.exists()) {
                  Object.assign(list, snapshot.val())
                  console.log('✅ Baselayer Top');
              } else {
                  console.log("No data available");
              }
          }).catch((error) => {
              console.error(error);
          });
          await dbRef.child('baselayerBottom').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
              if (snapshot.exists()) {
                  Object.assign(list, snapshot.val())
                  console.log('✅ Baselayer Bottom');
              } else {
                  console.log("No data available");
              }
          }).catch((error) => {
              console.error(error);
          });

      }
      //---------RAIN GEAR TEMEPERATURE OVER 3-----------
      const rain = parseInt(newTour.rain)
      //Her siger jeg at det skal regne og temperaturen over niveau 3 fordi under det vil jakkerne selv være vandttæt
      if(rain == 1 && temperature >= 3){
          //Kig på orderByChild her fordi det kan være at der kun er en bukse
          await dbRef.child('rainPants').child(gender).get().then((snapshot) => {
              if (snapshot.exists()) {
                  Object.assign(list, snapshot.val())
                  console.log('✅ Rain Pants');
              } else {
                  console.log("No data available");
              }
          }).catch((error) => {
              console.error(error);
          });
          //Samme her
          await dbRef.child('rainTop').child(gender).get().then((snapshot) => {
              if (snapshot.exists()) {
                  Object.assign(list, snapshot.val())
                  console.log('✅ Rain Top');
              } else {
                  console.log("No data available");
              }
          }).catch((error) => {
              console.error(error);
          });
        }
      //------FLECE---------
        if(temperature <= 3){
          await dbRef.child('fleece').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
              if (snapshot.exists()) {
                  Object.assign(list, snapshot.val())
                  console.log('✅ Flecee');
              } else {
                  console.log("No data available");
              }
          }).catch((error) => {
              console.error(error);
          });
        }
          
           //--------JACKETS---------
           await dbRef.child('jackets').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
              if (snapshot.exists()) {
  
                  Object.assign(list, snapshot.val())
              } else {
                  console.log("No data available");
              }
          }).catch((error) => {
              console.error(error);
          });
          //--------GLOVES---------
          await dbRef.child('gloves').child(gender).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
              if (snapshot.exists()) {
  
                  Object.assign(list, snapshot.val())
              } else {
                  console.log("No data available");
              }
          }).catch((error) => {
              console.error(error);
          });
      //-------HAT----------
      if(temperature <= 3){
        await dbRef.child('hat').orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Sleepingbag');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
      }
      //-------SOCKS-------
      await dbRef.child('socks').child(gender).get().then((snapshot) => {
          if (snapshot.exists()) {
              Object.assign(list, snapshot.val())
              console.log('✅ Socks');
          } else {
              console.log("No data available");
          }
      }).catch((error) => {
          console.error(error);
      });
      //--------FOOD--------
      const food = parseInt(newTour.food)
      if(food == 1){
        await dbRef.child('food').orderByChild('tourlength').equalTo(tourlength).get().then((snapshot) => {
            if (snapshot.exists()) { 
                Object.assign(list, snapshot.val())
                console.log('✅ Food');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        }); 
      }
      //--------KITCHEN--------
      const kitchen = parseInt(newTour.kitchen)
      if(kitchen == 1){
        await dbRef.child('kitchen').get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Kitchen');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
      }
      //--------SLEEPINGKIT--------
      const sleep = parseInt(newTour.sleepingkit)
      if(sleep == 1){
        //-----------TENT-------------
        await dbRef.child('tent').get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Tent');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        //--------SLEEPING BAG-------------
        await dbRef.child('sleepingbag').orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Sleepingbag');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });
        //--------SLEEPING PAD-------------
        await dbRef.child('sleepingpad').get().then((snapshot) => {
            if (snapshot.exists()) {
                Object.assign(list, snapshot.val())
                console.log('✅ Sleepingpad');
            } else {
                console.log("No data available");
            }
        }).catch((error) => {
            console.error(error);
        });

      }
      console.log("✅✅✅✅ FINISHED LIST ✅✅✅✅");
      console.log(list);
      return list
  }
  const handleSave = async () => {
    const newTour = {
      location: valueLocation,
      tourlength: valueTourlength,
      temperature: valueTemperature,
      rain: valueRain,
      terrain: valueTerrain,
      level: valueLevel,
      gender: valueGender,
      sizetop: valueSizetop,
      sizebottom: valueSizebottom,
      food: valueFood,
      kitchen: valueKitchen,
      sleepingkit: valueSleepingkit
  }
    const { location, tourlength, temperature, rain, terrain, level, gender, sizetop, sizebottom, food, kitchen, sleepingkit} = newTour;
    const uemail = firebase.auth().currentUser.email
    //Bruges til testing \/
    //const uemail = 'ppp@ppp.dk'
    if(location === null || tourlength === null || temperature === null || rain === null || terrain === null || level === null || gender === null || sizetop === null || sizebottom === null || food=== null || kitchen === null || sleepingkit === null){
        return Alert.alert('Please fill all the fields');
    }
    const packlist = await listMaker()

    try {
        firebase
            .database()
            .ref('/UserTours/')
            .push({ uemail, location, tourlength, temperature, rain, terrain, level, gender, sizetop, sizebottom, food, kitchen, sleepingkit, packlist })
            .then((snap) => {
                //Det her er kun for at få den unikt ID som push method genere. 
                let listId = snap.key
                navigation.navigate("PackList", {listId})
                
             })
        Alert.alert(`Saved on your profile`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
    };

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
                    <Text style={styles.title}>NEW TRIP</Text>
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
                    <ScrollView style={{flex: 1}}>
                        <View style={{paddingBottom:10,}}>
                            <Text style={styles.text}>Where are you going?</Text>
                        </View>
                        <View style={{paddingBottom:15, height: 64}}>
                            <TextInput
                                placeholder={'Location'}
                                placeholderTextColor="black"
                                value={valueLocation}
                                onChangeText={(txt)=>setValueLocation(txt)}
                                style={{borderWidth: 0,padding:5,flex: 1,height: 40,backgroundColor: 'white', borderRadius:8 }}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>How long is your trip?</Text>
                        </View>
                        <View style={{zIndex: open ? 1: 0, paddingBottom:15 }}>
                            <DropDownPicker
                                listMode="SCROLLVIEW"
                                schema={{
                                label: 'value',
                                value: 'key'
                                }}
                                placeholder="Choose trip length"
                                open={open}
                                value={valueTourlength}
                                items={items}
                                setOpen={setOpen}
                                setValue={setValueTourlength}
                                setItems={setItems}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>How is the temperature like?</Text>
                        </View>
                        <View style={{zIndex: open2 ? 1: 0, paddingBottom:15 }}>
                            <DropDownPicker
                                listMode="SCROLLVIEW"
                                schema={{
                                label: 'value',
                                value: 'key'
                                }}
                                placeholder="Choose temperature"
                                open={open2}
                                value={valueTemperature}
                                items={itemsTemp}
                                setOpen={setOpen2}
                                setValue={setValueTemperature}
                                setItems={setItemsTemp}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>Is it Raining?</Text>
                        </View>
                        <View style={{zIndex: open3 ? 1: 0, paddingBottom:15 }}>
                            <DropDownPicker
                            listMode="SCROLLVIEW"
                            schema={{
                            label: 'value',
                            value: 'key'
                            }}
                            placeholder="Is is Raining?"
                            open={open3}
                            value={valueRain}
                            items={itemsRain}
                            setOpen={setOpen3}
                            setValue={setValueRain}
                            setItems={setItemsRain}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>Which kind of Terrain is it?</Text>
                        </View>
                        <View style={{zIndex: open4 ? 1: 0, paddingBottom:15 }}>
                            <DropDownPicker
                                listMode="SCROLLVIEW"
                                schema={{
                                label: 'value',
                                value: 'key'
                                }}
                                placeholder="Choose Terrain"
                                open={open4}
                                value={valueTerrain}
                                items={itemsTerreain}
                                setOpen={setOpen4}
                                setValue={setValueTerrain}
                                setItems={setItemsTerreain}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>What's your level?</Text>
                        </View>
                        <View style={{zIndex: open5 ? 1: 0, paddingBottom:15 }}>
                            <DropDownPicker
                                listMode="SCROLLVIEW"
                                schema={{
                                label: 'value',
                                value: 'key'
                                }}
                                placeholder="Choose Level"
                                open={open5}
                                value={valueLevel}
                                items={itemsLevel}
                                setOpen={setOpen5}
                                setValue={setValueLevel}
                                setItems={setItems5}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>Gender</Text>
                        </View>
                        <View style={{zIndex: open6 ? 1: 0, paddingBottom:15}}>
                            <DropDownPicker
                            listMode="SCROLLVIEW"
                            schema={{
                            label: 'value',
                            value: 'key'
                            }}
                            placeholder="Choose Gender"
                            open={open6}
                            value={valueGender}
                            items={itemsGender}
                            setOpen={setOpen6}
                            setValue={setValueGender}
                            setItems={setItemsGender}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>Top Size</Text>
                        </View>
                        <View style={{zIndex: open7 ? 1: 0, paddingBottom:15}}>
                            <DropDownPicker
                            listMode="SCROLLVIEW"
                            schema={{
                            label: 'value',
                            value: 'key'
                            }}
                            placeholder="Top Size"
                            open={open7}
                            value={valueSizetop}
                            items={itemsSizetop}
                            setOpen={setOpen7}
                            setValue={setValueSizetop}
                            setItems={setItemsSizetop}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>Bottom Size</Text>
                        </View>
                        <View style={{zIndex: open8 ? 1: 0, paddingBottom:15}}>
                            <DropDownPicker
                            listMode="SCROLLVIEW"
                            schema={{
                            label: 'value',
                            value: 'key'
                            }}
                            placeholder="Bottom Size"
                            open={open8}
                            value={valueSizebottom}
                            items={itemsSizebottom}
                            setOpen={setOpen8}
                            setValue={setValueSizebottom}
                            setItems={setItemsSizebottom}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>Food</Text>
                        </View>
                        <View style={{zIndex: open9 ? 1: 0, paddingBottom:15}}>
                            <DropDownPicker
                            listMode="SCROLLVIEW"
                            schema={{
                            label: 'value',
                            value: 'key'
                            }}
                            placeholder="Food?"
                            open={open9}
                            value={valueFood}
                            items={itemsFood}
                            setOpen={setOpen9}
                            setValue={setValueFood}
                            setItems={setItemsFood}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>Storm-Kitchen</Text>
                        </View>
                        <View style={{zIndex: open10 ? 1: 0, paddingBottom:15}}>
                            <DropDownPicker
                            listMode="SCROLLVIEW"
                            schema={{
                            label: 'value',
                            value: 'key'
                            }}
                            placeholder="Storm-Kitchen?"
                            open={open10}
                            value={valueKitchen}
                            items={itemsKitchen}
                            setOpen={setOpen10}
                            setValue={setValueKitchen}
                            setItems={setItemsKitchen}
                            />
                        </View>
                        <View style={{paddingBottom:10}}>
                            <Text style={styles.text}>Sleeping Kit?</Text>
                        </View>
                        <View style={{zIndex: open11 ? 1: 0, paddingBottom:45}}>
                            <DropDownPicker
                            listMode="SCROLLVIEW"
                            schema={{
                            label: 'value',
                            value: 'key'
                            }}
                            placeholder="Sleeping Kit?"
                            open={open11}
                            value={valueSleepingkit}
                            items={itemsSleepingkit}
                            setOpen={setOpen11}
                            setValue={setValueSleepingkit}
                            setItems={setItemsSleepingkit}
                            />
                        </View>
                    </ScrollView >
                </View>
            </View>
            <View style={styles.buttomcontainer}>
                <ButtonComponent type = "primary" content={"Create Packing List"} onPress = {()=>  handleSave()}/>
            </View>
        </View>
    );
} 
export default NewTourScreen;