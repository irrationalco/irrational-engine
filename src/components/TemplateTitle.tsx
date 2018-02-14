import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

interface ITemplateTitle {
    styles: any;
}

const TemplateTitle: React.SFC<ITemplateTitle> = (props) => {
    return (
        <View style={props.styles.tstyle}>
            {/* <Text style={{color:'rgb(198,223,233)'}}> */}
            <Text style={{ color: 'white', marginTop: 20 }}>
                {this.props.name}
            </Text>
            {/* <Text>Hello</Text> */}
        </View>
    );
}

export default TemplateTitle;
