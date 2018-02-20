import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import { colors } from '../Styles';

const Logo: React.SFC = () => {
    return (
        <View style={styles.vstyle}>
            <Image
                // tslint:disable-next-line
                source={require('../../img/EngineLogo-02.png')}
                style={styles.image}
            />
        </View>
    );
};

export default Logo;

const styles = StyleSheet.create({
    image: {
        flex: 1,
        height: 300,
        resizeMode: 'contain',
        width: 500,
    },
    vstyle: {
        backgroundColor: colors.blue,
        display: 'flex',
        flexDirection: 'row'
    },
});

