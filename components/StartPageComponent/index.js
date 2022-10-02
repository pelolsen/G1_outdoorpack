import React from 'react'
import { View, Text, ImageBackground, StatusBar } from 'react-native'
import styles from './styles'
import ButtonComponent from '../ButtonComponent'

const StartPageComponent = (props, {navigation})=> {
    const {name, tagline, image} = props
    return (
        <View style={styles.carcontainer}>
        <ImageBackground 
        source={image}
        style = {styles.image}
        />
        <View style={styles.titles}>
          <Text style={styles.title}>{name}</Text>
          <Text style={styles.subtitle}>{tagline}</Text>
        </View>
        < StatusBar style="auto" />
      </View>
    )
}

export default StartPageComponent;