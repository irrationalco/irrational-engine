import React from 'react';
import { StyleSheet, TextInput, View } from 'react-native';

const FollowerForm: React.SFC = () => {
    return (
        <View style={styles.box}>
            <View style={styles.place}>
                <TextInput placeholderTextColor='white' placeholder='Nombre' style={styles.texts} />
            </View>
            <View style={styles.place}>
                <TextInput placeholderTextColor='white' placeholder='Apellido' style={styles.texts} />
            </View>
            <View style={styles.place}>
                <TextInput placeholderTextColor='white' placeholder='Fecha de Nacimiento' style={styles.texts} />
            </View>
            <View style={styles.place}>
                <TextInput placeholderTextColor='white' placeholder='Email' style={styles.texts} />
            </View>
            <View style={styles.place}>
                <TextInput placeholderTextColor='white' placeholder='Telefono' style={styles.texts} />
            </View>
            <View style={styles.place}>
                <TextInput placeholderTextColor='white' placeholder='Telefono Celular' style={styles.texts} />
            </View>
            <View style={styles.place}>
                <TextInput placeholderTextColor='white' placeholder='Genero' style={styles.texts} />
            </View>
        </View>
    );
};

export default FollowerForm;

const styles = StyleSheet.create({
    box: {
        flex: 5,
        justifyContent: 'space-around',
        // flexGrow:1,
        // paddingHorizontal:10,
        paddingTop: 10,
        // paddingVertical:10,
        // flexDirection:'column',
        // borderRadius: 4,
        // borderWidth: 3,
        // borderColor: '#FFF',
        // alignItems: 'center',
        // backgroundColor: 'rgba(39,43,62,0.8)',
        // paddingHorizontal:50,
        // paddingVertical:50,
    },
    place: {
        // justifyContent:'center',
        // alignItems:'center',
        // borderRadius: 4,
        // borderWidth: 3,
        // borderColor: '#000',
        backgroundColor: 'rgba(50,58,78,0.8)',
        borderRadius: 11,
        flex: 1,
        marginHorizontal: 20,
        marginTop: 10,
    },
    texts: {
        color: 'white',
        flex: 1,
        margin: 10,
        // backgroundColor: 'rgba(50,58,78,0.8)',
        // color:'rgb(50,58,78)',
        // placeholderTextColor:'white'
        // borderRadius: 4,
        // borderWidth: 3,
        // borderColor: '#000',
    },

});


