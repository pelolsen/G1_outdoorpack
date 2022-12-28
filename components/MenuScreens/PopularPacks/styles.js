import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
 /*   container: {
        flex: 1,
        top: 100,
        borderWidth: 1,
        borderRadius:10,
        borderColor: 'green',
        margin: 5,
        padding: 5,
        height: 50,
        justifyContent:'center'
    },
    label: { fontWeight: 'bold' },
    view:{
        height: '100%',
        backgroundColor:'#181818',
        justifyContent: 'center',
        width: '100%'
    },
    text:{
        color: 'green',
        fontWeight:'3000'
    },
    title:{
        top: 60,
        color: 'green',
        fontSize: 20,
        fontWeight:'300',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10
    }
*/
title:{
    top: 60,
    left: 30,
    color: 'white',
    fontSize: 20,
    fontWeight:'bold',
    textShadowColor: 'rgba(0, 0, 0, 0.75)',
    textShadowOffset: {width: -3, height: 3},
    textShadowRadius: 10
},
container: {
    flex: 1,
    borderWidth: 0,
    borderRadius:10,
    borderColor: 'green',
    margin: 5,
    padding: 10,
    height: 150,
    justifyContent:'center'
},
label: { fontWeight: 'bold' },
listen: {
    top: 100,
},
text:{
    color: 'green',
    fontWeight:'3000'
},
view:{
    height: '100%',
    backgroundColor:'#181818',
    justifyContent: 'center',
    width: '100%'
},
img:{
    width: 135, 
    height: 135,
    borderRadius:10
},
txt1:{
    color: 'white',
    fontWeight: 'bold'
}
});

export default styles;