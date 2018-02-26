import React, { Component } from 'react';
import {
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';

import Button from '../components/Button';
import Link from '../components/Link';
import Logo from '../components/Logo';

import { colors } from '../Styles';

const platformBehavior = Platform.OS === 'ios' ? { behavior: 'padding' as 'padding' } : {};

export default class LogIn extends Component {

  static navigationOptions = {
    title: 'LogIn',
  };

  goToSignIn() {
    Linking.openURL('http://www.google.com');
  }

  login() {

  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} {...platformBehavior}>
        <Logo style={styles.logo} />
        <View style={styles.otherContent}>
          <View style={styles.loginForm}>
            <TextInput placeholderTextColor={colors.darkGray} placeholder='Email' style={styles.texts} />
            <TextInput placeholderTextColor={colors.darkGray} placeholder='Contraseña' style={[styles.texts, styles.divisor]} />
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
      </KeyboardAvoidingView >
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
    borderTopColor: colors.darkerGray,
    borderTopWidth: 1
  },
  link: {
    color: colors.purple,
    marginLeft: 10
  },
  loginForm: {
    borderColor: colors.darkerGray,
    borderRadius: 11,
    borderWidth: 1,
    marginHorizontal: 20,
  },
  logo: {
    flex: 2,
    paddingTop: Platform.OS === 'ios' ? 20 : 0
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
