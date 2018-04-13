import React from 'react';
import { StyleSheet, Text, TextInput, TextStyle, View } from 'react-native';

import RadioForm from 'react-native-simple-radio-button';

import Question from './Question';

export default class SingleSelect extends Question<engine.SingleSelect, number>{

    radioProps: { label: string, value: number }[];

    constructor(props: any) {
        super(props);
        if (!this.state) {
            this.state = {
                answer: -1
            };
        }
        this.radioProps = this.data.options.map((opt) => {
            return { label: opt.text, value: opt.id };
        });
    }

    onOptionChanged = (value) => {
        this.setState({
            answer: value
        });
    }

    render() {
        return <View>
            <Text>{this.data.title}</Text>
            <View>
                <RadioForm
                    radio_props={this.radioProps}
                    initial={-1}
                    onPress={this.onOptionChanged} />
            </View>
        </View>;
    }

}
