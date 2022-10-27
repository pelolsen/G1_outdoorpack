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

    const listMaker = async ()=>{
      const newTour = {
        location: valueLocation,
        tourlength: valueTourlength,
        temperature: valueTemperature,
        rain: valueRain,
        terrain: valueTerrain,
        level: valueLevel,
        gender: valueGender
    }
    console.log('====================================');
    console.log(newTour);
    console.log('====================================');
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
      gender: valueGender
  }
    const { location, tourlength, temperature, rain, terrain, level, gender } = newTour;
    const uemail = firebase.auth().currentUser.email
    //const uemail = 'ppp@ppp.dk'
    if(location === null || tourlength === null || temperature === null || rain === null || terrain === null || level === null || gender === null ){
        return Alert.alert('Please fill all the fields');
    }
    const packlist = await listMaker()

    try {
        firebase
            .database()
            .ref('/UserTours/')
            .push({ uemail, location, tourlength, temperature, rain, terrain, level, gender, packlist })
            .then((snap) => {
                //Det her er kun for at få den unikt ID som push method genere. 
                //HUSK at slette hvis den ikke bruges
                let listId = snap.key
                navigation.navigate("PackList", {listId})
                
             })
        Alert.alert(`Saved on your profile`);
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
};
  
  
    
    return (
        <View style={{flex: 1, justifyContent: 'center', backgroundColor: 'grey'}}>
            <View style={{flex: 1, justifyContent: 'center', width: '80%', left: 35, bottom: 100}}>
        <ScrollView
          contentContainerStyle={{flexGrow : 1, justifyContent : 'center'}}>
          <Text style={{flex: 1, color: 'black'}}>Hi</Text>
          <View>
              <Text>Where are you going?</Text>
          </View>
          <View>
          <TextInput
            placeholder={'Location'}
            value={valueLocation}
            onChangeText={(txt)=>setValueLocation(txt)}
            style={{borderWidth: 2,padding:5,flex: 1}}
          />
          </View>
          <View>
              <Text>How long is your tour?</Text>
          </View>
          <View style={{zIndex: open ? 1: 0 }}>
          <DropDownPicker
            listMode="SCROLLVIEW"
            schema={{
              label: 'value',
              value: 'key'
            }}
            placeholder="Choose tour length"
            open={open}
            value={valueTourlength}
            items={items}
            setOpen={setOpen}
            setValue={setValueTourlength}
            setItems={setItems}
          /></View>
          <View>
              <Text>How is the temperature like?</Text>
          </View>
          <View style={{zIndex: open2 ? 1: 0 }}>
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
            /></View>
            <View>
              <Text>Is it Raining?</Text>
            </View>
            <View style={{zIndex: open3 ? 1: 0 }}>
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
          /></View>
          <View>
              <Text>Which kind of Terrain is it?</Text>
          </View>
          <View style={{zIndex: open4 ? 1: 0 }}>
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
          /></View>
          <View>
              <Text>What's your level?</Text>
          </View>
          <View style={{zIndex: open5 ? 1: 0 }}>
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
            /></View>
            <View>
              <Text>Gender</Text>
            </View>
            <View style={{zIndex: open6 ? 1: 0 }}>
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
            /></View>
            </ScrollView>
            <Button title={"Create Tour"} onPress={() => handleSave()}/>
            <View>
            <ButtonComponent type = "primary" content={"Create Packing List"} onPress = {()=>  handleSave()}/>
            </View>
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