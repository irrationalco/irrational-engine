import { Alert, AppRegistry, Text, TouchableOpacity } from 'react-native';

import React from 'react';
import { StackNavigator } from 'react-navigation';

import Button from './components/Button';
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


  logout = () => {
    this.setState({
      isLoggedIn: false
    });
    logOut();
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
        <Button style={{backgroundColor: colors.red, margin: 15}} onClick={() => {
          Alert.alert(
            'Estás seguro que quieres salir?',
            'Se borrarán todos tus datos si presiona Salir',
          [
            {text: 'Salir', onPress: () => {
              self.logout();
            }},
            {text: 'Cancelar'}
           ],
           { onDismiss: () => {} }
          );
        }} >
          <Text>Salir</Text>
        </Button >,
    },
  }
);

AppRegistry.registerComponent('App', () => App);
