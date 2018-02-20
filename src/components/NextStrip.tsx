import React, { Component } from 'react';
import { Alert, StyleSheet, Text, View } from 'react-native';
import Button from './Button';

interface INextStripProps {
    tstyle?: any;
}

export default class NextStrip extends Component<INextStripProps> {

    redirectWebsite() {
        Alert.alert('You tapped the Next Button!');
    }

    render() {
        // const { tstyle, btn } = styles;
        return (
            <View style={this.props.tstyle}>
                {/* <Text style={{justifyContent:'flex-end'}}> */}
                <Text style={{ marginRight: 40 }}>
                    <Button
                        style={styles.btn}
                        onClick={this.redirectWebsite}
                    // style={btn}
                    >Guardar</Button>
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
    btn: {
        backgroundColor: 'rgb(34,43,86)',
        borderRadius: 4,
        height: 45,
        margin: 25,
        overflow: 'hidden',
        padding: 11,
        width: 100,
    },
    tstyle: {
        // backgroundColor: '#F5FCFF',
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'flex-end',
        // alignItems:'center',
        // backgroundColor:'yellow',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
});

