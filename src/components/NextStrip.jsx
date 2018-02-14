import React, {Component} from 'react'
import {Text,View,Image, StyleSheet,Alert} from 'react-native'
import Button from 'react-native-button';

export default class NextStrip extends Component{

    redirectWebsite(){
        Alert.alert('You tapped the Next Button!')
    }

    render(){
        const {tstyle, btn}=styles;
        return(
            <View style={tstyle}>
                {/* <Text style={{justifyContent:'flex-end'}}> */}
                <Text style={{marginRight:40}}>
                    <Button 
                        containerStyle={{margin:25, padding:11, height:45, width:100, overflow:'hidden', borderRadius:4, backgroundColor: 'rgb(34,43,86)',}}
                        disabledContainerStyle={{backgroundColor: 'grey'}}
                        onPress={this.redirectWebsite}
                        style={btn}
                        >
                        Guardar
                    </Button>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    tstyle:{
        // backgroundColor: '#F5FCFF',
        flex:1,
        flexDirection:'row',
        justifyContent: 'flex-end',
        // alignItems:'center',
        // backgroundColor:'yellow',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    btn:{
        flex:1,
        color:'white',
        // marginRight:15,
        fontSize: 15,
        // marginTop:10,
    },
  });

