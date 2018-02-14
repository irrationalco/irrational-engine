import React from 'react'
import { Text, View, Image, StyleSheet } from 'react-native'

const Logo: React.SFC = () => {
    return (
        <View style={styles.vstyle}>
            <Image
                source={require('../../img/EngineLogo-02.png')}
                style={styles.image}
            />
            {/* <Text>Hello</Text> */}
        </View>
    );
}

const styles = StyleSheet.create({
    vstyle: {
        // backgroundColor: '#F5FCFF',
        flex: 8,
        flexDirection: 'row',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    image: {
        flex: 1,
        width: 500,
        height: 300,
        resizeMode: 'contain'
    },
});

