import React, {Component} from 'react'
import {View, Text, StyleSheet, TextInput} from 'react-native'


const Login = ()=> {
    return(
        <View style={styles.credentials}>
            <View style={styles.box}>
                <TextInput placeholderTextColor='white' placeholder="Email" style={styles.texts}/>
                <View style={{height:2, backgroundColor:'rgba(41,45,62,0.8)'}}></View>
                <TextInput placeholderTextColor='white' placeholder="Contraseña" style={styles.texts}/>
            </View>
        </View>
    );
}

export default Login;