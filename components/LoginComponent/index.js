import {React, useState} from 'react'
import { View, Text, ImageBackground, TextInput} from 'react-native'
import styles from './styles'
import ButtonComponent from '../ButtonComponent'
import firebase from "firebase/compat"
import { initializeApp } from "firebase/app";



const LoginComponent = ({navigation})=> {
    const handleSubmit = async() => {
        try {
            await firebase.auth().signInWithEmailAndPassword(email, password).then((data)=>{
            })
            .then(()=>{
                navigation.goBack()
            })
        } catch (error){
            setErrorMessage(error.message)
        }
    }
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')
    const [isCompleted, setCompleted] = useState(false)
    const [errorMessage, setErrorMessage] = useState(null)

    return (
        <View style={styles.carcontainer}>
        <ImageBackground 
        source={require('../../assets/startpagebackground.jpg')}
        style = {styles.image}
        />
        <View style={styles.allcontainer}>
        <View style={styles.signincontainer}>
            <View style={styles.titles}>
                <Text style={styles.title}>Login</Text>
            </View>
            <View style={styles.textinputcontainer}>
                <TextInput
                    placeholder="email"
                    value={email}
                    onChangeText={(email) => setEmail(email)}
                    style={styles.inputField}
                /> 
                <TextInput
                    secureTextEntry={true}
                    placeholder="password"
                    value={password}
                    onChangeText={(password) => setPassword(password)}
                    style={styles.inputField}
                />
                {errorMessage && (
                        <Text style={styles.subtitle}>Error: {errorMessage}</Text>
                )}
            </View>

        </View>
        <View style={styles.buttonsContainer}>
            <ButtonComponent type = "primary" content={"Login"} onPress = {()=>  handleSubmit()}/>
        </View>
        </View>
      </View>
    )
}

export default LoginComponent;