import React from 'react'
import { View, StyleSheet, TextInput } from 'react-native'


const Login: React.SFC = () => {
    return (
        <View style={styles.credentials}>
            <View style={styles.box}>
                <TextInput placeholderTextColor='white' placeholder="Email" style={styles.texts} />
                <View style={{ height: 2, backgroundColor: 'rgba(41,45,62,0.8)' }}></View>
                <TextInput placeholderTextColor='white' placeholder="Contraseña" style={styles.texts} />
            </View>
        </View>
    );
}

const styles = StyleSheet.create({
    credentials: {
        flex: 1,
        // justifyContent:'center',
        // alignItems:'center',
        // borderRadius: 4,
        // borderWidth: 3,
        // borderColor: '#000',
        marginTop: 10,
        marginHorizontal: 20,
        backgroundColor: 'rgba(50,58,78,0.8)',
        borderRadius: 11,
    },
    texts: {
        flex: 1,
        margin: 10,
        color: 'white',
        // backgroundColor: 'rgba(50,58,78,0.8)',
        // color:'rgb(50,58,78)',
        // placeholderTextColor:'white'
        // borderRadius: 4,
        // borderWidth: 3,
        // borderColor: '#000',
    },
    box: {
        flex: 5,
        // flexGrow:1,
        // paddingHorizontal:10,
        paddingTop: 10,
        // paddingVertical:10,
        // flexDirection:'column',
        // borderRadius: 4,
        // borderWidth: 3,
        // borderColor: '#FFF',
        justifyContent: 'space-around',
        // alignItems: 'center',
        // backgroundColor: 'rgba(39,43,62,0.8)',
        // paddingHorizontal:50,
        // paddingVertical:50,
    },
});

export default Login;