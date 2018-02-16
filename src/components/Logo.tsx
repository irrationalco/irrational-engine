import React from 'react'
import { View, Image, StyleSheet } from 'react-native'
import { colors } from '../Styles'

const Logo: React.SFC = () => {
    return (
        <View style={styles.vstyle}>
            <Image
                source={require('../../img/EngineLogo-02.png')}
                style={styles.image}
            />
        </View>
    );
}

export default Logo;

const styles = StyleSheet.create({
    vstyle: {
        backgroundColor: colors.blue,
        display: 'flex',
        flexDirection: 'row'
    },
    image: {
        flex: 1,
        width: 500,
        height: 300,
        resizeMode: 'contain'
    },
});

