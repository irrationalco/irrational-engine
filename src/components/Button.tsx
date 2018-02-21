import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../Styles';

interface IButtonProps {
    style?: ViewStyle;
    textStyle?: TextStyle;
    onClick: () => void;
}

const Button: React.SFC<IButtonProps> = (props) => {
    return (
        <TouchableOpacity style={[defaultStyles.button, props.style]} onPress={() => props.onClick()} >
            <Text style={[defaultStyles.text, props.textStyle]} >{props.children}</Text>
        </TouchableOpacity>
    );
};

const defaultStyles = StyleSheet.create({
    button: {
        backgroundColor: colors.blue,
        borderRadius: 15,
        paddingHorizontal: 20,
        paddingVertical: 5
    },
    text: {
        color: colors.black,
        fontSize: 15
    }
});

export default Button;
