import React, {Component} from 'react'
import {
    Platform,
    StyleSheet,
    Text,
    View,
    ImageBackground,
    Alert
  } from 'react-native'

  import Button from 'react-native-button'
  import  {StackNavigator} from 'react-navigation'

  import Template_title from '../general/Template_title'
  import Template_subtitle from '../general/Template_subtitle'
  import FollowerForm from '../general/FollowerForm'
  import NextStrip from '../general/NextStrip'

  export default class AddFollower extends Component{

    static navigationOptions = {
        title: 'AddFollower',
      };

    // redirectWebsite(){
    //     // this.props.navigation.navigate('Menu')
    //     Alert.alert('You tapped the button!')
    // }

    render() {
        const {container}=styles;
        // const { navigate } = this.props.navigation;
        return (
        <ImageBackground source={require('../../img/backG.png')} style={container}>
            <Template_title name="SEGUIDORES"/>
            <Template_subtitle name="INGRESAR SEGUIDORES"/>
            <View style={{alignItems:'center'}}>
                {/* <View style={{height:2,width:300, backgroundColor:'rgba(39,43,62,0.8)'}}></View> */}
                <View style={{height:1,width:340, backgroundColor:'white', opacity:0.8}}></View>
            </View>
            <FollowerForm/>
            <NextStrip/>
        </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container:{
        // backgroundColor: '#F5FCFF',
        flex:8,
        // alignItems:'center',
        // flexDirection:'row',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    

  });

