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
import SafeAreaView from 'react-native-safe-area-view'
import styles from './styles'
import ButtonComponent from '../../ButtonComponent';
import SelectList from 'react-native-dropdown-select-list'
import { InputData } from '../../../models/selectitemdata';
import DropDownPicker from 'react-native-dropdown-picker';


const NewTourScreen = ({navigation,route}) => {

    const initialState = {
        location: '',
        tourlength: '',
        temperature: '',
        rain: '',
        terrain: '',
        level: '',
        gender: ''
    }
    

    const [newTour,setNewTour] = useState(initialState);
    const [listId, setListId] = useState()

    /*Returnere true, hvis vi er på edit car*/
    //const isEditCar = route.name === "Edit Car";

    useEffect(() => {
        return () => {
            setNewTour(initialState)
        };
    }, []);

    const changeTextInput = (name,event) => {
        setNewTour({...newTour, [name]: event});
    }

    const listMaker = async ()=>{
        let list ={}
        const dbRef = firebase.database().ref();

        //-----------BACKPACK---------------
        let tourlength = parseInt(newTour.tourlength)
        console.log(tourlength);
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
            });}
            /*
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
        }
        let hattype;
        if(temperature > 3 && rain == 0){
            hattype = 'sunhat'
        } else if (temperature <= 3 && temperature > 1 && rain == 0){
            hattype = 'benny'
        }else if (temperature <= 3 && temperature > 1 && rain == 1){
            hattype = 'rainbenny'
        } else if (temperature == 1){
            hattype = 'winter'
        }
        //måske inddel hat i genders også... finder vi sgu ud af
        if(hattype != undefined){
            await dbRef.child('hat').child(hattype).orderByChild('temperature').equalTo(temperature).get().then((snapshot) => {
                if (snapshot.exists()) {
    
                    Object.assign(list, snapshot.val())
                } else {
                    console.log("No data available");
                }
            }).catch((error) => {
                console.error(error);
            });
        }*/
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
        console.log("✅✅✅✅ FINISHED LIST ✅✅✅✅");
        console.log(list);
        //return list
    }

    const handleSave = async () => {

        const { location, tourlength, temperature, rain, terrain, level, gender } = newTour;
        const uemail = firebase.auth().currentUser.email
        const packlist = await listMaker()
        if(location.length === 0 || length.length === 0 || temperature.tourlength === 0 || rain.length === 0 || terrain.length === 0 || level.length === 0 || gender.length === 0 ){
            return Alert.alert('Please fill all the fields');
        }

        try {
            firebase
                .database()
                .ref('/UserTours/')
                .push({ uemail, location, tourlength, temperature, rain, terrain, level, gender, packlist })
                .then((snap) => {
                    //Det her er kun for at få den unikt ID som push method genere. 
                    //HUSK at slette hvis den ikke bruges
                    const key = snap.key
                    if(key != undefined){
                        setListId(key)
                    }
                 })
            Alert.alert(`Saved`);
            navigation.navigate("Pack List", {listId})
        } catch (error) {
            console.log(`Error: ${error.message}`);
        }
        /*
        if(isEditCar){
            const id = route.params.car[0];
            try {
                firebase
                    .database()
                    .ref(`/Cars/${id}`)
                    // Vi bruger update, så kun de felter vi angiver, bliver ændret
                    .update({ brand, model, year, licensePlate });
                // Når bilen er ændret, går vi tilbage.
                Alert.alert("Din info er nu opdateret");
                const car = [id,newCar]
                navigation.navigate("Car Details",{car});
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }

        }else{

            try {
                firebase
                    .database()
                    .ref('/Cars/')
                    .push({ brand, model, year, licensePlate });
                Alert.alert(`Saved`);
                setNewCar(initialState)
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        }
        */
    };
    const selectData = InputData
    return (
        <View style={styles.container}>
            <Text style={styles.title}>Create a Packlist</Text>
            <View style={styles.scrollcontainer}>
                <ScrollView >
                    <View style={styles.row}>
                    <TextInput
                        placeholder={'Location'}
                        placeholderTextColor="#134737" 
                        value={''}
                        onChangeText={(event) => changeTextInput(key,event)}
                        style={styles.input}
                    />
                    </View>
                    <View style={styles.row}>
                    <DropDownPicker
                    schema={{
                        label: 'value',
                        value: 'key'
                      }}
                    items={selectData.tourlength}
                    // defaultValue={"Picked Up By"}
                    placeholder="Choose building" 
                    containerStyle={{height: 40, marginTop: 10}}
                    style={{backgroundColor: 'white', color: "gray"}}
                    dropDownStyle={{backgroundColor: '#fafafa'}}
                    onChangeItem={item => {
                        (event) => changeTextInput("temperature",event)
                    console.log("item is ",item.value);
                  }}
                  
                  zIndex={30}
                />
                    </View>
                    <View style={styles.row}>
                        <SelectList 
                            data = {selectData.temperature} 
                            setSelected = {(event) => changeTextInput("temperature",event)} 
                            dropdownStyles = {{backgroundColor: 'grey'}}
                            dropdownItemStyles = {{marginHorizontal: 10}}
                            dropdownTextStyles = {{color: 'white'}}
                            TextStyles = {{color: 'white'}}
                            search={false} 
                            boxStyles={{borderRadius:0, borderWidth: 2, borderColor: '#134737'}}
                            inputStyles ={{color: '#134737'}}
                            placeholder= 'Temperature'
                            maxHeight = {400}
                            />
                    </View>
                    <View style={styles.row}>
                        <SelectList 
                            data = {selectData.temperature} 
                            setSelected = {(event) => changeTextInput("temperature",event)} 
                            dropdownStyles = {{backgroundColor: 'grey'}}
                            dropdownItemStyles = {{marginHorizontal: 10}}
                            dropdownTextStyles = {{color: 'white'}}
                            TextStyles = {{color: 'white'}}
                            search={false} 
                            boxStyles={{borderRadius:0, borderWidth: 2, borderColor: '#134737'}}
                            inputStyles ={{color: '#134737'}}
                            placeholder= 'Temperature'
                            maxHeight = {400}
                            />
                    </View>
                    <View style={styles.row}>
                        <SelectList 
                            data = {selectData.temperature} 
                            setSelected = {(event) => changeTextInput("temperature",event)} 
                            dropdownStyles = {{backgroundColor: 'grey'}}
                            dropdownItemStyles = {{marginHorizontal: 10}}
                            dropdownTextStyles = {{color: 'white'}}
                            TextStyles = {{color: 'white'}}
                            search={false} 
                            boxStyles={{borderRadius:0, borderWidth: 2, borderColor: '#134737'}}
                            inputStyles ={{color: '#134737'}}
                            placeholder= 'Temperature'
                            maxHeight = {400}
                            />
                    </View>
                    <View style={styles.row}>
                        <SelectList 
                            data = {selectData.temperature} 
                            setSelected = {(event) => changeTextInput("temperature",event)} 
                            dropdownStyles = {{backgroundColor: 'grey'}}
                            dropdownItemStyles = {{marginHorizontal: 10}}
                            dropdownTextStyles = {{color: 'white'}}
                            TextStyles = {{color: 'white'}}
                            search={false} 
                            boxStyles={{borderRadius:0, borderWidth: 2, borderColor: '#134737'}}
                            inputStyles ={{color: '#134737'}}
                            placeholder= 'Temperature'
                            maxHeight = {400}
                            />
                    </View>
                   
                    {/*
                        Object.keys(initialState).map((key,index) =>{
                            return(
                                <View style={styles.row} key={index}>
                                    <TextInput
                                        placeholder={key}
                                        value={newTour[key]}
                                        onChangeText={(event) => changeTextInput(key,event)}
                                        style={styles.input}
                                    />
                                </View>
                            )
                        })
                    */}
                    {/*Hvis vi er inde på edit car, vis save changes i stedet for add car*/}
                    {/*<Button title={ isEditCar ? "Save changes" : "Add car"} onPress={() => handleSave()}/> */}
                    {/*<Button title={"Create Tour"} onPress={() => handleSave()}/>*/}
                    
                </ScrollView>

            </View>
            <View style={styles.buttonsContainer}>
                <ButtonComponent type = "primary" content={"Log Out"} onPress = {()=>  console.log(newTour)}/>
            </View>
        </View>
    );
}

export default NewTourScreen;
/*
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        top: 100
    },
    row: {
        flexDirection: 'row',
        height: 30,
        margin: 10,
    },
    label: {
        fontWeight: 'bold',
        width: 100
    },
    input: {
        borderWidth: 1,
        padding:5,
        flex: 1
    },
});*/