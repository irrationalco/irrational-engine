import React, { Component } from 'react';
import {
  Platform,
  StyleSheet,
  Text,
  View,
  ImageBackground,
  Alert
} from 'react-native';
import Button from 'react-native-button';
import  {StackNavigator} from 'react-navigation'

import Logo from '../general/Logo'


export default class SignIn extends Component{
    static navigationOptions={
        title:'Menu',
    }

    redirectWebsite(){
        // this.props.navigation.navigate('Menu')
        Alert.alert('You tapped the button!')
    }

    render() {
        const {container, btn, btnContainer}=styles;
        // const { navigate } = this.props.navigation;
        return (
        <ImageBackground source={require('../../img/backG.png')} style={container}>
            <Logo/>
            <View style={btnContainer}>
                <Button 
                    containerStyle={{margin:20, padding:10, height:45, width:300, overflow:'hidden', borderRadius:4, backgroundColor: 'rgba(39,43,62,0.8)',}}
                    disabledContainerStyle={{backgroundColor: 'grey'}}
                    onPress={this.redirectWebsite}
                    style={btn}
                    >
                    INGRESAR SEGUIDORES
                </Button>
                {/* <View style={{height:2, backgroundColor:'rgba(41,45,62,0.8)'}}></View> */}
                <View style={{height:2, backgroundColor:'rgba(39,43,62,0.8)'}}></View>
                <Button 
                    containerStyle={{margin:20,padding:10, height:45, width:300, overflow:'hidden', borderRadius:4, backgroundColor: 'rgba(39,43,62,0.8)',}}
                    disabledContainerStyle={{backgroundColor: 'grey'}}
                    onPress={this.redirectWebsite}
                    style={btn}
                    >
                    HACER ENCUESTA
                </Button>
            </View>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    btnContainer:{
        flex:10,
        // flexGrow:1,
        // justifyContent:'center',
        alignItems: 'center',
        // flexGrow:1,
        // backgroundColor: 'yellow',
        // marginTop:20,
    },
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
        width:null,
        height: null,
        // resizeMode:'stretch',
        // resizeMode: 'cover',
      },
      btn:{
        flex:1,
        color:'white',
        fontSize: 15,
        // marginTop:10,
    },
});
