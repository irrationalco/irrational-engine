import React, { Component } from 'react';
import {
  Text,
  ImageBackground,
} from 'react-native';

import  {StackNavigator} from 'react-navigation'

export default class SurveyOptions extends Component{
  render() {
    const {container}=styles;
    return (
      <ImageBackground source={require('../../img/backG.png')} style={container}>
        <Text>Hey</Text>
      </ImageBackground>
    );
  }
}

const styles = {
  container: {
    flex: 1,
    width:null,
    height: null,
  },
};
