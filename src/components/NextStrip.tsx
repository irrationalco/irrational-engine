import React, { Component } from 'react'
import { Text, View, StyleSheet, Alert } from 'react-native'
import Button from './Button';

interface INextStripProps {
    tstyle?: any;
}

export default class NextStrip extends Component<INextStripProps> {

    redirectWebsite() {
        Alert.alert('You tapped the Next Button!')
    }

    render() {
        // const { tstyle, btn } = styles;
        return (
            <View style={this.props.tstyle}>
                {/* <Text style={{justifyContent:'flex-end'}}> */}
                <Text style={{ marginRight: 40 }}>
                    <Button
                        buttonStyle={{ margin: 25, padding: 11, height: 45, width: 100, overflow: 'hidden', borderRadius: 4, backgroundColor: 'rgb(34,43,86)', }}
                        onClick={this.redirectWebsite}
                        // style={btn}
                        text={"Guardar"}
                    />
                </Text>
            </View>
        );
    }
}

const styles = StyleSheet.create({
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
    btn: {
        flex: 1,
        color: 'white',
        // marginRight:15,
        fontSize: 15,
        // marginTop:10,
    },
});

