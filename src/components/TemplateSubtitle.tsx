import React, { Component } from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

interface ITemplateSubtitleProps {
    vstyle: any;
    provinceList: any;
}

const TemplateSubtitle: React.SFC<ITemplateSubtitleProps> = () => {

    return (
        <View style={this.props.styles.vstyle}>
            <Text style={{ color: 'white', fontSize: 12 }}>
                {this.props.name}
            </Text>
            {/* <Text>Hello</Text> */}
        </View>
    );
}

TemplateSubtitle.defaultProps = {
    vstyle: {},
    provinceList: [],
};

const styles = {
    tstyle: {
        // backgroundColor: '#F5FCFF',
        height: 50,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: 'center',
        // fontSize:10,
        // backgroundColor:'white',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
};

