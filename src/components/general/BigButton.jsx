import React, {Component} from 'react';
import {Text, View, StyleSheet, Alert} from 'react-native';
import Button from 'react-native-button';   //Only temporary
// import  {StackNavigator} from 'react-navigation';


const BigButton= (styles) =>{
    return(
        <View style={styles.container}>
            <Button 
            containerStyle={{padding:10, height:45, width:300, overflow:'hidden', borderRadius:4, backgroundColor: '#242E5D',}}
            disabledContainerStyle={{backgroundColor: 'grey'}}
            onPress={this.validate}
            // onPress={() =>props.navigation.navigate('Menu')}
            style={styles.btn}
            >
            ENTRAR
            </Button>
        </View>
    );
}

export default BigButton;