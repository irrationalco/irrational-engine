import React from 'react';
import { Text, View } from 'react-native';

interface ITemplateTitleProps {
    styles?: any;
    name: string;
}

const TemplateTitle: React.SFC<ITemplateTitleProps> = (props) => {
    return (
        <View style={props.styles.tstyle}>
            {/* <Text style={{color:'rgb(198,223,233)'}}> */}
            <Text style={{ color: 'white', marginTop: 20 }}>
                {props.name}
            </Text>
            {/* <Text>Hello</Text> */}
        </View>
    );
};

export default TemplateTitle;
