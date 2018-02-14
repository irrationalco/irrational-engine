import React, {Component} from 'react'
import {Text,View,Image, StyleSheet} from 'react-native'

const Template_title = (props,styles) =>{
    return(
        <View style={styles.tstyle}>
            {/* <Text style={{color:'rgb(198,223,233)'}}> */}
            <Text style={{color:'white',marginTop:20}}>
                {this.props.name}
            </Text>
            {/* <Text>Hello</Text> */}
        </View>
    );
}

export default Template_title;
