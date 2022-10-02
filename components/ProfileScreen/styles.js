import {StyleSheet} from 'react-native'

const styles = StyleSheet.create({
    container: {
        justifyContent: 'center',
        alignItems: "center",
        backgroundColor: '#181818',
        height: '100%',
        width: '100%'
    },
    buttonsContainer: {
        bottom: 0,
        width: '30%',
        justifyContent: "center",
        alignItems: "center",
    },
    title:{
        color: 'green',
        fontSize: 30,
        fontWeight:'300',
        textShadowColor: 'rgba(0, 0, 0, 0.75)',
        textShadowOffset: {width: -3, height: 3},
        textShadowRadius: 10
    }
});
export default styles;