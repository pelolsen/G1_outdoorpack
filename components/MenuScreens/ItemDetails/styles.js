import { StyleSheet } from "react-native";
const styles = StyleSheet.create({
    container: { flex: 1, justifyContent: 'flex-start' },
    row: {
        margin: 5,
        padding: 5,
        flexDirection: 'row',
    },
    header: {
        flex: 0.7,
        backgroundColor: '#181818',
        textAlign: 'center',
        alignItems: 'center',
        shadowColor: '#000',
        shadowOffset: { width: 1, height: 1 },
        shadowOpacity:  0.4,
        shadowRadius: 3,
        elevation: 5,
    },
    title: {
        top: 60,
        color: 'white',
        fontSize: 20,
    },
    picture:{
        height: 400,
        backgroundColor:'white',
        flex: 2.5,
    },
    price:{
        flex: 0.3,
        backgroundColor:'#292929',
        flexDirection: 'row',
        alignItems: 'center',
    },
    pricetext:{
        color: 'white',
        fontSize: 16,
        fontWeight: 'bold',
        left: 250
    },
    description:{
        flex: 0.9,
        backgroundColor:'#181818'
    },
    button:{
        flex: 0.6,
        backgroundColor:'#181818'
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