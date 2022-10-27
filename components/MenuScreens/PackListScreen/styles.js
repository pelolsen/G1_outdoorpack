import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: {
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


});

export default styles;