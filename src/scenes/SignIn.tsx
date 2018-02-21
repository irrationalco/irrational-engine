import React, { Component } from 'react';
import {
  Linking,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Button from '../components/Button';
import Link from '../components/Link';
import Logo from '../components/Logo';

import { colors } from '../Styles';


export default class SignIn extends Component {

  static navigationOptions = {
    title: 'SignIn',
  };

  goToSignIn() {
    Linking.openURL('http://www.google.com');
  }

  login() {

  }

  render() {
    return (
      <View style={styles.container}>
        <Logo style={styles.logo} />
        <View style={styles.otherContent}>
          <View style={styles.loginForm}>
            <TextInput placeholderTextColor={colors.black} placeholder='Email' style={styles.texts} />
            <TextInput placeholderTextColor={colors.black} placeholder='Contraseña' style={[styles.texts, styles.divisor]} />
          </View>
          <View style={styles.bottomHalf}>
            <Button onClick={this.login}>Iniciar Sesión</Button>
            <View style={styles.createAccountContainer}>
              <Text>Nuevo en Engine?</Text>
              <Link textStyle={styles.link}
                onClick={this.goToSignIn}
              >Crea una cuenta</Link>
            </View>
          </View >
        </View >
      </View >
    );
  }
}


const styles = StyleSheet.create({
  bottomHalf: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'space-between',
    marginVertical: 20,
  },
  container: {
    flex: 1,
  },
  createAccountContainer: {
    flexDirection: 'row',
  },
  divisor: {
    borderTopColor: colors.black,
    borderTopWidth: 1
  },
  link: {
    color: colors.purple,
    marginLeft: 10
  },
  loginForm: {
    borderColor: colors.black,
    borderRadius: 11,
    borderWidth: 2,
    marginHorizontal: 20,
  },
  logo: {
    flex: 2
  },
  otherContent: {
    flex: 3,
    marginTop: 30
  },
  texts: {
    color: colors.black,
    paddingHorizontal: 5
  }
});
