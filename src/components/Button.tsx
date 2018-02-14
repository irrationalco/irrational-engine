import React from 'react';
import { Text, TouchableOpacity } from 'react-native';

interface IButtonProps {
    buttonStyle?: any;
    textStyle?: any;
    text: string;
    onClick?: Function;
}

const Button: React.SFC<IButtonProps> = (props) => {
    return (
        <TouchableOpacity style={props.buttonStyle} >
            <Text style={props.textStyle} >{props.text}</Text>
        </TouchableOpacity>
    );
};

Button.defaultProps = {
    buttonStyle: {},
    textStyle: {}
}

export default Button;