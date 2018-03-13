import React from 'react';
import { StyleSheet, Text, TextStyle, TouchableOpacity, ViewStyle } from 'react-native';
import { colors } from '../Styles';

interface ILinkProps {
    style?: ViewStyle;
    textStyle?: TextStyle;
    onClick?: () => void;
}

const Link: React.SFC<ILinkProps> = (props) => {
    return (
        <TouchableOpacity style={props.style} onPress={() => props.onClick()} >
            <Text style={[defaultStyles.text, props.textStyle]} >{props.children}</Text>
        </TouchableOpacity>
    );
};

const defaultStyles = StyleSheet.create({
    text: {
        color: colors.purple,
        fontSize: 15
    }
});

export default Link;
