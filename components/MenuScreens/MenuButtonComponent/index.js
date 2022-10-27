import React from 'react'
import { View, Text, Pressable } from 'react-native'
import styles from './styles'

const MenuButtonComponent = (props) => {
    //const type = props.type;
    //const content = props.content
    //const onPress = props.onPress
    //det som står ovenpå kan også skrives på en lijne:
    const {type, content, onPress} = props;
    
    const backgroundColor = type === 'primary' ? '#134737': 'white'
    const textColor = type === 'primary' ? 'white' : 'black'
    return (
        <View style={styles.container}>
            <Pressable
            style={[styles.buttom, {backgroundColor: backgroundColor}]}
            onPress = {()=> onPress()}
            >
                <Text style={[styles.text, {color: textColor}]}>{content}</Text>


            </Pressable>
        </View>
    )
}

export default MenuButtonComponent