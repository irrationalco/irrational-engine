import { AppRegistry } from 'react-native';

import React from 'react';
import LogIn from './scenes/LogIn';

export default class App extends React.Component<{}, {}> {
  render() {
    return <LogIn />;
  }
}

AppRegistry.registerComponent('App', () => App);
