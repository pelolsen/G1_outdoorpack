import { StyleSheet } from "react-native";

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    backgroundColor: "#23272a",
    height: "100%",
    width: "100%",
  },
  buttonsContainer: {
    top: 80,
    width: "100%",
    justifyContent: "center",
    alignItems: "center",
  },
  title: {
    top: 50,
    color: "#134737",
    fontSize: 30,
    fontWeight: "300",
    textShadowColor: "rgba(0, 0, 0, 0.75)",
    textShadowOffset: { width: -3, height: 3 },
    textShadowRadius: 10,
  },
  input: {
    borderWidth: 2,
    padding:5,
    flex: 1,
    borderColor: '#134737'
},
row: {
    height: 100,
    width: 250,
    margin: 10,
    
},
  scrollcontainer: {
    top: 60,
    justifyContent: "center",
    alignItems: "center",
 
    width: "100%",
    height: "70%",
  },
});
export default styles;
