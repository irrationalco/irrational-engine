import React from 'react';
import { Dimensions, Image, StyleSheet, View, ViewStyle } from 'react-native';
import { colors } from '../Styles';

interface ILogoProps {
    style?: ViewStyle;
}

const Logo: React.SFC<ILogoProps> = (props: ILogoProps) => {
    return (
        <View style={[styles.vstyle, props.style]}>
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
        marginVertical: 15,
        maxWidth: Dimensions.get('screen').width * 0.78,
        resizeMode: 'contain',
    },
    vstyle: {
        alignItems: 'center',
        backgroundColor: colors.blue,
        display: 'flex',
        justifyContent: 'center',
    },
});

