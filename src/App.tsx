import { AppRegistry } from 'react-native';

import React from 'react';
import { StackNavigator } from 'react-navigation';

import LogIn from './scenes/LogIn';
import SurveyList from './scenes/SurveyList';
import { isLoggedIn, registerOnLoginChange } from './Store';
import { colors } from './Styles';

import SurveyDisplay from './scenes/SurveyDisplay';

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
  }
}

const AppNavigator = StackNavigator({
  SurveyDisplay: {
    screen: SurveyDisplay
  },
  SurveyList: {
    screen: SurveyList
  }
}, {
    cardStyle: {
      backgroundColor: colors.white
    },
    // headerMode: 'none',
    initialRouteName: 'SurveyList',
  });

AppRegistry.registerComponent('App', () => App);
