import React, { Component } from 'react';
import {
    ScrollView,
    StyleSheet,
    Text,
    TextStyle,
    View
} from 'react-native';

import { registerOnSurveyIndexChanged } from '../Store';

import Button from './Button';

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
        this.setState({ currentIdx: idx });
    }

    render() {
        return (
            <ScrollView horizontal={true}>
                <View style={styles.slide}>
                    {this.state.answered.map((qBtn, index) =>
                        <Button
                            style={index === this.state.currentIdx ? styles.current : (qBtn ? styles.answered : styles.notanswered)}
                            key={index}
                            onClick={this.changeIndex.bind(this, index)}>
                            <Text>
                                {index + 1}
                            </Text>
                        </Button>)}
                </View>
            </ScrollView>
        );
    }
}

const original = {
    backgroundColor: 'transparent',
    borderRadius: 500,
    borderWidth: 1,
    flex: 1,
};

const styles = StyleSheet.create({
    answered: {
        ...original,
        borderColor: 'rgba(0,255,0,0.2)',
    },
    current: {
        ...original,
        borderColor: 'rgba(0,0,255,0.2)',
    },
    notanswered: {
        ...original,
        borderColor: 'rgba(255,0,0,0.2)',
    },
    slide: {
        flexDirection: 'row',
    },
});

