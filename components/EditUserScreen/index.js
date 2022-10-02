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

const EditUserScreen = ({navigation,route}) => {

    const initialState = {
        email: '',
        name: '',
        lastname: '',
        phone: '',
    }

    const [newUser,setNewUser] = useState(initialState);

    /*Returnere true, hvis vi er på edit user*/
    const isEditUser = route.name === "Edit User";

    useEffect(() => {
        if(isEditUser){
            const user = route.params.user[1];
            setNewUser(user)
        }
        /*Fjern data, når vi går væk fra screenen*/
        return () => {
            setNewUser(initialState)
        };
    }, []);

    const changeTextInput = (name,event) => {
        setNewUser({...newUser, [name]: event});
    }

    const handleSave = () => {

        const { email, name, lastname, phone } = newUser;

        if(email.length === 0 || name.length === 0 || lastname.length === 0 || phone.length === 0 ){
            return Alert.alert('Et af felterne er tomme!');
        }

        if(isEditUser){
            const id = route.params.user[0];
            try {
                firebase
                    .database()
                    .ref(`/Users/${id}`)
                    // Vi bruger update, så kun de felter vi angiver, bliver ændret
                    .update({ email, name, lastname, phone });
                // Når bilen er ændret, går vi tilbage.
                Alert.alert("Din info er nu opdateret");
                const user = [id,newUser]
                navigation.navigate("User Details",{user});
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }

        }else{

            try {
                firebase
                    .database()
                    .ref('/Users/')
                    .push({ email, name, lastname, phone });
                Alert.alert(`Saved`);
                setNewUser(initialState)
            } catch (error) {
                console.log(`Error: ${error.message}`);
            }
        }

    };

    return (
        <SafeAreaView style={styles.container}>
            <ScrollView>
                {
                    Object.keys(initialState).map((key,index) =>{
                        return(
                            <View style={styles.row} key={index}>
                                <Text style={styles.label}>{key}</Text>
                                <TextInput
                                    value={newUser[key]}
                                    onChangeText={(event) => changeTextInput(key,event)}
                                    style={styles.input}
                                />
                            </View>
                        )
                    })
                }
                {/*Hvis vi er inde på edit user, vis save changes i stedet for add user*/}
                <Button title={"Update User"} onPress={() => handleSave()} />
            </ScrollView>
        </SafeAreaView>
    );
}

export default Add_edit_user;

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center'
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
});