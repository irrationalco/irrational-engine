import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Linking,
  AppRegistry
} from 'react-native';
import  {StackNavigator} from 'react-navigation'
import Menu from './Menu';
import AddFollower from './AddFollower'

import Logo from '../general/Logo'
import Login from '../general/Login'
import BigButton from '../general/BigButton'


export default class SignIn extends Component{
  static navigationOptions = {
    title: 'SignIn',
  };

  render() {
    const {askContainer, instructions, container}=styles;
    return (
      <ImageBackground source={require('../../img/backG.png')} style={container}>
        <Logo/>
        <Login/>
        <BigButton />
        <View style={askContainer}>
          <View style={instructions}>
            <Text style={{color:'white'}} textAlign= 'center'>Nuevo en Engine?</Text>
            <Text style={{textAlign: 'center'}} 
            textAlign= 'center'
            onPress={() => Linking.openURL('http://www.google.com')}
            > Crea una Cuenta</Text>
          </View>
        </View>
      </ImageBackground>
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // marginBottom:1,
    // marginLeft:1,
    // marginRight:1,
    // marginTop:0,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
    width:null,
    height: null,
    // resizeMode:'stretch',
    // resizeMode: 'cover',
  },
  askContainer:{
    flex:2,
    // backgroundColor: 'pink',
    marginBottom: 5,
  },
  instructions: {
    // color: 'green',
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center'
  },
});

// AppRegistry.registerComponent('try1', ()=>AppNavigator);