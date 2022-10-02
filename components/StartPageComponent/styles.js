import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    carcontainer: {
        width: '100%',
        height: '100%',
    
      },
      titles: {
        marginTop: '40%',
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
          position: 'absolute',
          bottom: 50,
          width: '100%'
      }
})

export default styles;