import React, {Component} from 'react'
import {Text,View,Image, StyleSheet} from 'react-native'

const Template_subtitle = () =>{

    defaultProps = {
        vstyle: {

        },
        provinceList: [],
      };

    return(
        <View style={this.props.styles.vstyle}>
            <Text style={{color:'white',fontSize:12}}>
                {this.props.name}
            </Text>
            {/* <Text>Hello</Text> */}
        </View>
    );
}

const styles = {
    tstyle:{
        // backgroundColor: '#F5FCFF',
        height:50,
        flexDirection:'row',
        justifyContent: 'center',
        alignItems:'center',
        // fontSize:10,
        // backgroundColor:'white',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
  };

