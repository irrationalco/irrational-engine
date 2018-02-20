import { AppRegistry } from 'react-native';

import React from 'react';
import Signin from './scenes/SignIn';

export default class App extends React.Component<{}, {}> {
  render() {
    return <Signin />;
  }
}

AppRegistry.registerComponent('App', () => App);
