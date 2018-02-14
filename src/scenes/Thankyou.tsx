import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Linking
} from 'react-native';
import { StackNavigator } from 'react-navigation'

import TemplateTitle from '../components/TemplateTitle'
import TemplateSubtitle from '../components/TemplateSubtitle'
import Logo from '../components/Logo'
import Login from '../components/Login'
import Button from '../components/Button'

export default class Thankyou extends Component {
  render() {
    // const {askContainer, instructions, container}=styles;
    const { container, btn } = styles;

    return (
      <ImageBackground source={require('../../img/backG.png')} style={container}>
        <TemplateTitle name="GRACIAS" />
        {/* <TemplateSubtitle name="MENU"/> */}
        <Logo />
        <View style={{ flex: 12, justifyContent: 'center', alignItems: 'center' }}>
          <View style={{ height: 2, backgroundColor: 'white', width: 350 }}></View>
          <View style={{ backgroundColor: 'rgb(34,39,58)' }}>
            <Text>
              GRACIAS
                </Text>
          </View>

          {/* <View style={askContainer}> */}
          <View style={{ marginVertical: 20, }}>
            <Button
              buttonStyle={{ padding: 15, height: 55, width: 300, overflow: 'hidden', borderRadius: 4, backgroundColor: 'rgb(34,39,58)', }}
              // disabledContainerStyle={{ backgroundColor: 'grey' }}
              // onClick={this.redirectWebsite}
              // style={btn}
              text='INICIO'
            />
            <Button
              buttonStyle={{ padding: 15, height: 55, width: 300, overflow: 'hidden', borderRadius: 4, backgroundColor: 'rgb(34,39,58)', }}
              // disabledContainerStyle={{ backgroundColor: 'grey' }}
              // onClick={this.redirectWebsite}
              // style={btn}
              text="SIGUIENTE ENCUESTA"
            />
          </View>
        </View>
      </ImageBackground>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // flexDirection: 'column',
    // marginBottom:1,
    // marginLeft:1,
    // marginRight:1,
    // marginTop:0,
    // justifyContent: 'center',
    // alignItems: 'center',
    // backgroundColor: 'black',
    width: null,
    height: null,
    // resizeMode:'stretch',
    // resizeMode: 'cover',
  },
  btn: {
    flex: 1,
    color: 'white',
    // marginRight:15,
    fontSize: 15,
    // marginVertical: 15,
    // marginTop:10,
  },
  //   askContainer:{
  //     flex:2,
  //     // backgroundColor: 'pink',
  //     marginBottom: 5,
  //   },
  //   instructions: {
  //     // color: 'green',
  //     padding: 5,
  //     flexDirection: 'row',
  //     justifyContent: 'center'
  //   },
});
