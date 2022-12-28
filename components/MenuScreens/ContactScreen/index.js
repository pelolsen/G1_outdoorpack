import * as React from 'react';
import { useCallback } from "react";
import {View, Text, TouchableOpacity, Linking, Alert} from 'react-native';
import styles from './styles'
import Ionicons from 'react-native-vector-icons/Ionicons'


function ContactScreen ({navigation}) {
    const urlTel='tel:+4545454545'
    const handlePressTel = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(urlTel);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(urlTel);
        } else {
          Alert.alert(`Something went wrong`);
        }
      }, [urlTel]);
      const urlMail='mailto:info@outpack.dk'
    const handlePressMail = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(urlMail);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(urlMail);
        } else {
          Alert.alert(`Something went wrong`);
        }
      }, [urlMail]);

      const urlAdd = 'https://goo.gl/maps/BTRmsuXqn1K2MFBt7'
      const handlePressAdd = useCallback(async () => {
        // Checking if the link is supported for links with custom URL scheme.
        const supported = await Linking.canOpenURL(urlAdd);
    
        if (supported) {
          // Opening the link with some app, if the URL scheme is "http" the web link should be opened
          // by some browser in the mobile
          await Linking.openURL(urlAdd);
        } else {
          Alert.alert(`Something went wrong`);
        }
      }, [urlAdd]);



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
                    <Text style={styles.title}>Contact Us</Text>
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
            <View style={styles.contentcontainer}>
                <TouchableOpacity style={styles.content} onPress={() => handlePressMail()}>
                    <Text style={styles.textBold}>Email:{"\n"}</Text>
                    <Text style={styles.text}>info@outpack.dk</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content} onPress={() => handlePressTel()}>
                    <Text style={styles.textBold}>Phone:{"\n"}</Text>
                    <Text style={styles.text}>+45 45 45 45 45</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.content} onPress={() => handlePressAdd()}>
                    <Text style={styles.textBold}>Address:{"\n"}</Text>
                    <Text style={styles.text}>OutPack A/S{"\n"}</Text>
                    <Text style={styles.text}>Solbjerg Pl. 3,</Text>
                    <Text style={styles.text}>2000 Frederiksberg - DK{"\n"}</Text>
                    <Text style={styles.text}>CVR-nr: 12312312</Text>
                </TouchableOpacity>

            </View>
       </View>
    );

}

export default ContactScreen