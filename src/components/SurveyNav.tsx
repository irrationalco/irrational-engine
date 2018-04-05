import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextStyle,
    View
} from 'react-native';

import Button from './Button';

interface ISurveyNavProp {
    size: number;
}

interface ISurveyNavState {
    currentIdx: number;
    answered: boolean[];
}

export default class SurveyNav extends Component<ISurveyNavProp, ISurveyNavState>{

    constructor(props:any){
        super(props);
        this.state = { currentIdx:0, answered: Array(this.props.size).fill(false)};
    }

    onClick(i){
        this.setState({currentIdx:i});
    }

    render() {
        return (
            <ScrollView horizontal={true}>
                <View style={styles.cards}>
                    {this.state.answered.map((qBtn, index) =>
                        <Button
                            style = { index === this.state.currentIdx ? styles.current : (qBtn ? styles.answered : styles.notanswered)}
                            onClick={onClick(index)}>
                                <Text>
                                    {index}
                                </Text>
                        </Button>)}
                </View>
            </ScrollView>
        );
    }
}

const styles = StyleSheet.create({
    answered: {
        // backgroundColor: '#F5FCFF',
        borderColor:'rgba(0,0,0,0.2)',
        borderRadius:500,
        borderWidth:1,
        flex: 8,
        height:100,
        width:100,
        // alignItems:'center',
        // flexDirection:'row',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    current: {

    },
    notanswered: {

    },
});

