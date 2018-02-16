import React, { Component } from 'react';
import {
  StyleSheet,
  Text,
  View,
  Linking
} from 'react-native';
// import { StackNavigator } from 'react-navigation'
// import Menu from './Menu';
// import AddFollower from './AddFollower'

import Logo from '../components/Logo'
import Login from '../components/Login'
import Button from '../components/Button';
import Link from '../components/Link';

import { colors } from '../Styles'


export default class SignIn extends Component {
  static navigationOptions = {
    title: 'SignIn',
  };

  render() {
    const { createAccountContainer, container, link } = styles;
    return (
      <View style={container}>
        <Logo />
        <Login />
        <Button onClick={() => { }} style={{ marginTop: 15 }}>Iniciar Sesión</Button>
        <View style={createAccountContainer}>
          <Text>Nuevo en Engine?</Text>
          <Link textStyle={link}
            onClick={() => Linking.openURL('http://www.google.com')}
          >Crea una cuenta</Link>
        </View>
      </View >
    );
  }
}


const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  createAccountContainer: {
    padding: 5,
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20
  },
  link: {
    color: colors.purple,
    marginLeft: 10
  }
});