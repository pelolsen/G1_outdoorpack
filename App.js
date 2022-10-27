import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import StartPageComponent from './components/StartPageComponent';
import SignInComponent from './components/SignInComponent';
import LoginComponent from './components/LoginComponent';
import firebase from "firebase/compat"
import * as React from "react";
import {useState, useEffect} from 'react'
import StackNavigator from './components/StackNavigator';
import ProfileScreen from './components/MenuScreens/ProfileScreen';
import MenuScreen from './components/MenuScreens/MenuScreen';
import NewTourScreen from './components/MenuScreens/NewTourScreen';
import LoggedinStackNavigator from './components/MenuScreens/LoggedinStackNavigator';
import PreviousTourScreen from './components/MenuScreens/ScreensNotMadeYet/PreviousTourScreen';


const firebaseConfig = {
  apiKey: "AIzaSyBDSAnjqfqqH4hgHQWTHoWpJLcvj0ewhsM",
  authDomain: "godkendelse1.firebaseapp.com",
  databaseURL: "https://godkendelse1-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "godkendelse1",
  storageBucket: "godkendelse1.appspot.com",
  messagingSenderId: "1043840074494",
  appId: "1:1043840074494:web:94a5da5445d793ef39dbaf"
};


export default function App() {
  if (!firebase.apps.length) {
    firebase.initializeApp(firebaseConfig);
  }
  const [user, setUser] = useState({ loggedIn: false });

  function onAuthStateChange(callback) {
    return firebase.auth().onAuthStateChanged(user => {
      if (user) {
        callback({loggedIn: true, user: user});
      } else {
        callback({loggedIn: false});
      }
    });
  }
  useEffect(() => {
    const unsubscribe = onAuthStateChange(setUser);
    return () => {
      unsubscribe();
    };
  }, []);

  const LoginPage = () => {
    return(
      <NavigationContainer>
        <StackNavigator/>
      </NavigationContainer>
    )
  }
  const LogedInPage = () => {
    return(
      <NavigationContainer>
        <LoggedinStackNavigator/>
      </NavigationContainer>
    )
  }
  
  return user.loggedIn ? <LogedInPage/> : <LoginPage/> ;
  //return <NewTourScreen/>
  //return <PreviousTourScreen/>
  //return <MenuScreen/>
  //return <LogedInPage/>
    
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
