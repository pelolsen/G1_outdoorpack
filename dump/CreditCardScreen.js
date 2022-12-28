import {Text, View, StyleSheet } from 'react-native';
import * as React from "react";

import CreditCard from 'react-native-credit-card';


//Husk at ændre navn
export default function CreditCardScreen() {
    return (
        <CreditCard
        type={this.state.type}
        imageFront={require('./images/card-front.png')}
        imageBack={require('./images/card-back.png')}
        shiny={false}
        bar={false}
        focused={this.state.focused}
        number={this.state.number}
        name={this.state.name}
        expiry={this.state.expiry}
        cvc={this.state.cvc}/>
    );
}

const styles = StyleSheet.create({
    buttonsContainer: {
      position: 'absolute',
      bottom: 50,
      width: '100%'
    }
  });