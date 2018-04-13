import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { onSurveyIndexChanged, registerOnSurveyIndexChanged } from '../Store';

import Link from './Link';

interface ISurveyNavProp {
    size: number;
}

interface ISurveyNavState {
    currentIdx: number;
    answered: boolean[];
}

export default class SurveyNav extends Component<ISurveyNavProp, ISurveyNavState>{

    constructor(props: any) {
        super(props);
        this.state = { currentIdx: 0, answered: Array(this.props.size).fill(false) };
        registerOnSurveyIndexChanged(this.changeIndex);
    }

    changeIndex = (idx: number) => {
        if (idx === this.state.currentIdx) {
            return;
        }
        this.setState({ currentIdx: idx }, () => {
            onSurveyIndexChanged(this.state.currentIdx);
        });
    }

    render() {
        return (
            <ScrollView horizontal={true}>
                <View style={styles.slide}>
                    {this.state.answered.map((qBtn, index) =>
                        <Link
                            style={index === this.state.currentIdx ? styles.current : (qBtn ? styles.answered : styles.notanswered)}
                            key={index}
                            onClick={this.changeIndex.bind(this, index)}>
                            <Text>
                                {index + 1}
                            </Text>
                        </Link>)}
                </View>
            </ScrollView>
        );
    }
}

const original = {
    borderRadius: 35,
    borderWidth: 1,
    height: 35,
    width: 35,
    justifyContent: 'center' as 'center',
    alignItems: 'center' as 'center',
    marginLeft: 10
};

const styles = StyleSheet.create({
    answered: {
        // backgroundColor: '#F5FCFF',
        backgroundColor: 'transparent',
        borderColor: 'rgba(0,255,0,0.2)',
        borderRadius: 500,
        borderWidth: 1,
        flex: 1,
        // alignItems:'center',
        // flexDirection:'row',
        // opacity: 70,
        // flex: 1,
        // justifyContent: 'center',
        // alignItems: 'center',
    },
    current: {
        backgroundColor: 'transparent',
        borderColor: 'rgba(0,0,255,0.2)',
        borderRadius: 500,
        borderWidth: 1,
        flex: 1,
    },
    notanswered: {
        backgroundColor: 'transparent',
        borderColor: 'rgba(255,0,0,0.2)',
        borderRadius: 500,
        borderWidth: 1,
        flex: 1,
    },
    slide: {
        flexDirection: 'row',
    },
});

