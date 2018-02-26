import React, { Component } from 'react';
import {
  ImageBackground,
  Text,
} from 'react-native';

// import { StackNavigator } from 'react-navigation'

export default class SurveyOptions extends Component {
  render() {
    const { container } = styles;
    return (
      // tslint:disable-next-line
      <ImageBackground source={require('../../img/backG.png')} style={container}>
        <Text>Hey</Text>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    height: null,
    width: null,
  },
};
