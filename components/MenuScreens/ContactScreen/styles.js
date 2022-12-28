import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: '#181818',
    },
    titlecontainer: {
        flex: 1,
        flexDirection: 'row'
    },
    contentcontainer:{
        flex: 6,
        paddingHorizontal: 30,
        paddingTop: 50,
        paddingBottom: 100
    },
    content:{
        flex: 1,
        backgroundColor: '#134737',
        margin: 10,
        borderRadius: 30,
        alignItems: 'center',
        justifyContent: 'center'
    },
    text:{
        color: 'white'
    },
    textBold:{
        color: 'white',
        fontWeight: 'bold'
    },
    title:{
        top: 60,
        color: 'white',
        fontSize: 20,
        fontWeight:'bold',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10
    },
    backbutton:{
        flex: 1,
        alignItems: 'center',
      },
      titleinnercontainer:{
        flex: 4,
        alignItems: 'center'
      },
      homebutton:{
        flex: 1,
        alignItems: 'center',
      }
  });
  
  export default styles;
  