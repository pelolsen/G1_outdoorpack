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
  listcontainer:{
      flex: 6
  },
  buttomcontainer: {
      flex: 1,
      alignItems: 'center',
      justifyContent: 'center'
  },
  listcontainerpad:{
      flex: 1
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
  flatliststyle:{

  },
  text:{
      color: 'white',
      fontWeight:'3000'
  },
  listbutton: {
      flex: 1,
      borderWidth: 1,
      borderRadius:10,
      borderColor: 'green',
      margin: 5,
      padding: 5,
      height: 60,
      justifyContent:'center'
  },
  img:{
    width: 50, 
    height: 50,
    borderRadius:10
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