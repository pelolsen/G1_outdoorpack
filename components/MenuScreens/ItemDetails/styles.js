import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start' },
    row: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
    },
    //label: { width: 100, fontWeight: 'bold' },
    //value: { flex: 1 },
    header: {
        flex: 0.7,
        backgroundColor: 'grey',
        textAlign: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    title: {
        top: 70,
        color: 'white',
        fontSize: 25,
    },
    picture:{
        height: 400,
        backgroundColor:'white',
        flex: 2.5,
    },
    price:{
        flex: 0.3,
        backgroundColor:'purple',
        flexDirection: 'row',
        alignItems: 'center',
    },
    pricetext:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        left: 300
    },
    description:{
        flex: 1,
        backgroundColor:'black'
    },
    button:{
        flex: 0.5,
        backgroundColor:'green'
    },
    descriptionrtext: {
        color: 'white',
        padding: 20
    },
    descriptionrtexttitle: {
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        left: 20,
        top: 10
    }
});
export default styles;