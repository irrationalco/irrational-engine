import { AppRegistry } from 'react-native';

import React from 'react';
<<<<<<< HEAD
import { StackNavigator } from 'react-navigation';

import LogIn from './scenes/LogIn';
import { isLoggedIn, registerOnLoginChange } from './Store';

interface IAppState {
  isLoggedIn: boolean;
}

export default class App extends React.Component<{}, IAppState> {

  constructor(props: any) {
    super(props);
    this.state = {
      isLoggedIn: false
    };
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

  render() {
    if (this.state.isLoggedIn) {
      return <AppNavigator />;
    }
    return <LogIn />;
    // return <LogIn />;
    // return <SurveyList />;
  }
}

const AppNavigator = StackNavigator({
  SurveyList: {
    screen: null // TODO: change this to a screen or nothing will work
  }
}, {
    headerMode: 'none',
    initialRouteName: 'SurveyList',
  });

AppRegistry.registerComponent('App', () => App);
