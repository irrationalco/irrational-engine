import { Alert, AppRegistry, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { StackNavigator } from 'react-navigation';

import FontAwesome, { Icons } from 'react-native-fontawesome';

import Link from './components/Link';
import LogIn from './scenes/LogIn';
import SurveyList from './scenes/SurveyList';
import { isLoggedIn, logOut, registerOnLoginChange } from './Store';
import { colors } from './Styles';

import SurveyDisplay from './scenes/SurveyDisplay';

// tslint:disable-next-line:prefer-const
var self;

interface IAppState {
  isLoggedIn: boolean;
}

export default class App extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
    self = this;
    registerOnLoginChange(this.onLoginChange);
  }

  async componentWillMount() {
    this.setState({
      isLoggedIn: await isLoggedIn()
    });
  }

  onLoginChange = (state: boolean) => {
    this.setState({
      isLoggedIn: state
    });
  }


  async logout() {
    await logOut();
  }

  render() {
    if (this.state.isLoggedIn) {
      return <AppNavigator />;
    }
    return <LogIn />;
  }
}

const AppNavigator = StackNavigator(
  {
    SurveyDisplay: {
      screen: SurveyDisplay
    },
    SurveyList: {
      screen: SurveyList
    }
  },
  {
    cardStyle: {
      backgroundColor: colors.white
    },
    // headerMode: 'none',
    initialRouteName: 'SurveyList',
    navigationOptions: {
      headerRight:
        // Add this pink to styles
        <Link style= {{margin: 15}} onClick={() => {
          Alert.alert(
            'Estás seguro que quieres salir?',
            'Se borrarán todos tus datos si presionas Salir',
          [
            {text: 'Salir', onPress: () => {
              self.logout();
            }},
            {text: 'Cancelar'}
           ],
           { onDismiss: () => {} }
          );
        }} >
          <FontAwesome style={{color: colors.red, fontSize: 28}}>{Icons.signOut}</FontAwesome>
        </Link >,
    },
  }
);

AppRegistry.registerComponent('App', () => App);
