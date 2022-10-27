import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        alignItems: "center",
        backgroundColor: '#181818',
        height: '100%',
        width: '100%'
    },
    buttonsContainer: {
        width: '40%',
        margin: 20, 
    },
    BigButtonsContainer:{
        top:70,
        height: "80%"
    },
    twoButtonsContainer:{
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-between',
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