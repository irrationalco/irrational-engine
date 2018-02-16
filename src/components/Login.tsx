import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'
import { colors } from '../Styles'

const Login: React.SFC = () => {
    return (
        <View style={styles.container}>
            <TextInput placeholderTextColor={colors.black} placeholder="Email" style={styles.texts} />
            <TextInput placeholderTextColor={colors.black} placeholder="Contraseña" style={[styles.texts, styles.divisor]} />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        marginTop: 10,
        marginHorizontal: 20,
        borderRadius: 11,
        borderColor: colors.black,
        borderWidth: 2
    },
    texts: {
        color: colors.black,
        paddingHorizontal: 5
    },
    divisor: {
        borderTopColor: colors.black,
        borderTopWidth: 1
    }
});

export default Login;