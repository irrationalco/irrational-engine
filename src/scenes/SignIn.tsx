import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  View
} from 'react-native';
// import { StackNavigator } from 'react-navigation'
// import Menu from './Menu';
// import AddFollower from './AddFollower'

import Button from '../components/Button';
import Link from '../components/Link';
import Login from '../components/Login';
import Logo from '../components/Logo';

import { colors } from '../Styles';


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
    flexDirection: 'row',
    justifyContent: 'center',
    marginTop: 20,
    padding: 5,
  },
  link: {
    color: colors.purple,
    marginLeft: 10
  }
});
