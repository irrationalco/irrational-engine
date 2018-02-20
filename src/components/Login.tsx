import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';
import { colors } from '../Styles';

const Login: React.SFC = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholderTextColor={colors.black} placeholder='Email' style={styles.texts} />
            <TextInput placeholderTextColor={colors.black} placeholder='Contraseña' style={[styles.texts, styles.divisor]} />
        </View>
    );
};

const styles = StyleSheet.create({
    container: {
        borderColor: colors.black,
        borderRadius: 11,
        borderWidth: 2,
        marginHorizontal: 20,
        marginTop: 10,
    },
    divisor: {
        borderTopColor: colors.black,
        borderTopWidth: 1
    },
    texts: {
        color: colors.black,
        paddingHorizontal: 5
    },
});

export default Login;
