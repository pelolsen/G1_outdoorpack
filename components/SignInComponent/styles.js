import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    carcontainer: {
        width: '100%',
        height: '100%',
    
      },
      titles: {
        marginTop: '10%',
        width: '100%',
        alignItems: 'center',
    
      },
      title:{
        color: 'white',
        fontSize: 40,
        fontWeight:'600',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10
    
      },
      subtitle:{
        fontSize: 16,
        color: 'grey',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -2, height: 2},
        textShadowRadius: 10
      },
      image:{
        height: '100%',
        width: '100%',
        resizeMode: 'cover',
        position: 'absolute'
      },
      buttonsContainer: {
          bottom: 100,
          width: '30%',
          justifyContent: "center",
          alignItems: "center",
      },
      signincontainer: {
          marginTop: '45%',
          width: '95%',
          height: 400,
          alignItems: 'center',
          backgroundColor: 'rgba(0, 0, 0, 0.5)'
      },
      allcontainer:{
        alignItems: 'center',
        justifyContent: 'center',
      },
      inputField: {
        height: 50,
        margin: 12,
        width: 300,
        borderWidth: 2,
        padding: 10,
        backgroundColor: '#fff'
      },
      textinputcontainer:{
        marginTop: '10%', 
      }
})

export default styles;