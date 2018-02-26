import React, { Component } from 'react';
import {
  ActivityIndicator,
  Dimensions,
  KeyboardAvoidingView,
  Linking,
  Platform,
  StyleSheet,
  Text,
  TextInput,
  View
} from 'react-native';
import { tryLogin } from '../Store';

import Button from '../components/Button';
import Link from '../components/Link';
import Logo from '../components/Logo';

import { colors } from '../Styles';

const platformBehavior = Platform.OS === 'ios' ? { behavior: 'padding' as 'padding' } : {};

interface ILoginState {
  user: string;
  password: string;
  isLoggedIn: boolean;
  error: ErrorStates;
  loading: boolean;
}

enum ErrorStates {
  none,
  invalidCredentials,
  genericError
}

const ErrorMessages = new Map([
  [ErrorStates.invalidCredentials, 'Usuario o contraseña incorrectos'],
  [ErrorStates.genericError, 'Ha ocurrido un error al iniciar sesión por favor vuelva a intentar más tarde']
]);

export default class LogIn extends Component<{}, ILoginState> {

  constructor(props: any) {
    super(props);
    this.state = {
      error: ErrorStates.none,
      isLoggedIn: false,
      loading: false,
      password: '',
      user: '',
    };
  }

  goToSignIn() {
    Linking.openURL('http://www.google.com');
  }
  // tslint:disable-next-line:space-before-function-paren
  login = async () => {
    try {
      this.setState({ loading: true });
      const success = await tryLogin(this.state.user, this.state.password);
      if (success) {
        this.setState({ isLoggedIn: true, error: ErrorStates.none });
      } else {
        this.setState({ error: ErrorStates.invalidCredentials });
      }
    } catch (e) {
      this.setState({ error: ErrorStates.genericError });
    } finally {
      this.setState({ loading: false });
    }
  }

  handleUserChange = (value: string) => {
    this.setState({
      user: value
    });
  }

  handlePasswordChange = (value: string) => {
    this.setState({
      password: value
    });
  }

  render() {
    return (
      <KeyboardAvoidingView style={styles.container} {...platformBehavior}>
        <Logo style={styles.logo} />
        <View style={styles.otherContent}>
          <View style={styles.loginForm}>
            <TextInput placeholderTextColor={colors.darkGray} placeholder='Email' style={styles.texts}
              onChangeText={this.handleUserChange} />
            <TextInput placeholderTextColor={colors.darkGray} placeholder='Contraseña' style={[styles.texts, styles.divisor]}
              onChangeText={this.handlePasswordChange} />
          </View>

          {this.state.error !== ErrorStates.none &&
            <View style={styles.errorContainer}>
              <Text style={styles.errorText}>{ErrorMessages.get(this.state.error)}</Text>
            </View>}
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
        <ActivityIndicator size='large' color={colors.purple} animating={this.state.loading} />
      </KeyboardAvoidingView >
    );
  }
}


const styles = StyleSheet.create({
  activityIndicator: {
    left: Dimensions.get('screen').width / 2 - 20,
    position: 'absolute',
    top: Dimensions.get('screen').height * 3 / 2,
  },
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
  errorContainer: {
    marginHorizontal: 20
  },
  errorText: {
    color: '#f00'
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
