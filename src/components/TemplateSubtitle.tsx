import React from 'react';
import { Text, View } from 'react-native';

interface ITemplateSubtitleProps {
    vstyle?: any;
    provinceList?: any;
    name: string;
}

const TemplateSubtitle: React.SFC<ITemplateSubtitleProps> = (props) => {

    return (
        <View style={props.vstyle}>
            <Text style={{ color: 'white', fontSize: 12 }}>
                {props.name}
            </Text>
            {/* <Text>Hello</Text> */}
        </View>
    );
};

TemplateSubtitle.defaultProps = {
    provinceList: [],
    vstyle: {},
};

export default TemplateSubtitle;

// const styles = {
//     tstyle: {
//         // backgroundColor: '#F5FCFF',
//         height: 50,
//         flexDirection: 'row',
//         justifyContent: 'center',
//         alignItems: 'center',
//         // fontSize:10,
//         // backgroundColor:'white',
//         // opacity: 70,
//         // flex: 1,
//         // justifyContent: 'center',
//         // alignItems: 'center',
//     },
// };

