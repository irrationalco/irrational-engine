import React, { Component } from 'react'
import {
    StyleSheet,
    View,
    ImageBackground,
} from 'react-native'

//   import  {StackNavigator} from 'react-navigation'

import TemplateTitle from '../components/TemplateTitle'
import TemplateSubtitle from '../components/TemplateSubtitle'
import FollowerForm from '../components/FollowerForm'
import NextStrip from '../components/NextStrip'

export default class AddFollower extends Component {

    static navigationOptions = {
        title: 'AddFollower',
    };

    // redirectWebsite(){
    //     // this.props.navigation.navigate('Menu')
    //     Alert.alert('You tapped the button!')
    // }

    render() {
        const { container } = styles;
        // const { navigate } = this.props.navigation;
        return (
            <ImageBackground source={require('../../img/backG.png')} style={container}>
                <TemplateTitle name="SEGUIDORES" />
                <TemplateSubtitle name="INGRESAR SEGUIDORES" />
                <View style={{ alignItems: 'center' }}>
                    {/* <View style={{height:2,width:300, backgroundColor:'rgba(39,43,62,0.8)'}}></View> */}
                    <View style={{ height: 1, width: 340, backgroundColor: 'white', opacity: 0.8 }}></View>
                </View>
                <FollowerForm />
                <NextStrip />
            </ImageBackground>
        );
    }
}

const styles = StyleSheet.create({
    container: {
        // backgroundColor: '#F5FCFF',
        flex: 8,
        // alignItems:'center',
        // flexDirection:'row',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },


});

