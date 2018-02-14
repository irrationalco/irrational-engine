import React, {Component} from 'react';
import {View, ScrollView,Text} from 'react-native';

export default class SurveyMenu extends Component{

    state={surveys:[]}

    componentWillMount(){
        axios.get('apiurltemp.com').then(response=>this.setState({surveys: response.data}));
    }


    renderOptions() {
        return this.state.surveys.map(survey => 
            <SurveyOption key={survey.title} title={survey.title} />
        );
    };
    
    render(){
        return(
            <ScrollView>
                <Text>
                    Yeah
                </Text>
            </ScrollView>
        );
    }

}