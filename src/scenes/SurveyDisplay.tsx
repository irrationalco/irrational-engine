import React, { Component } from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import { NavigationScreenProps } from 'react-navigation';

import {
    onQuestionAnswered,
    onSurveyIndexChanged,
    registerOnSurveyIndexChanged,
    unregisterOnSurveyIndexChanged
} from '../Store';

import { colors } from '../Styles';

import Button from '../components/Button';
import SurveyNav from '../components/SurveyNav';

interface ISurveyDisplayState {
    index: number;
}

interface ISurveyDisplayProps {
    survey: engine.Survey;
}


export default class SurveyDisplay extends Component<NavigationScreenProps<ISurveyDisplayProps>, ISurveyDisplayState> {

    static navigationOptions = {
        title: 'Encuesta',
    };

    static collapseQuestion(question: engine.Question): [engine.Question, number] {
        if (question.variations.length === 0) {
            return [question, 0];
        }
        const v = Math.floor(Math.random() * question.variations.length);
        const collapsed = { ...question.variations[0], ...question.variations[v] };
        question.variations = [collapsed];
        return [question, v];
    }

    survey: engine.Survey;

    answers: engine.QuestionAnswer[];
    questions: engine.Question[];
    variation: number[];

    constructor(props: any) {
        super(props);
        this.state = {
            index: 0
        };
        this.survey = this.props.navigation.state.params.survey;
        registerOnSurveyIndexChanged(this.onIndexChanged);

        if (this.survey.randomized) {
            this.answers = Array(this.survey.requiredQuestions.length).fill(null);
            this.questions = this.collapseQuestions(this.survey.requiredQuestions);
            const used = Array(this.survey.questions.length).fill(false);
            while (this.questions.length < this.survey.questionsPerRun) {
                const idx = Math.floor(Math.random() * used.length);
                if (used[idx]) {
                    continue;
                }
                used[idx] = true;
                const [c, v] = SurveyDisplay.collapseQuestion(this.survey.questions[idx]);
                this.questions.push(c);
                this.answers.push({ questionId: c.id, type: c.type, variation: v });
            }
        } else {
            this.answers = Array(this.survey.questions.length).fill(null);
            this.questions = this.collapseQuestions(this.survey.questions);
        }
    }

    collapseQuestions(questions: engine.Question[]) {
        return questions.map((q, i) => {
            const [c, v] = SurveyDisplay.collapseQuestion(q);
            this.answers[i] = { questionId: q.id, type: q.type, variation: v };
            return c;
        });
    }

    onAnswer = (answer: any) => {
        this.answers[this.state.index] = { ...this.answers[this.state.index], answer };
        onQuestionAnswered(this.state.index, true);
    }

    onIndexChanged = (index: number) => {
        this.setState({
            index
        });
    }

    nextButtonClicked = () => {
        this.setState((prev, props) => {
            onSurveyIndexChanged(prev.index + 1);
            return { index: prev.index + 1 };
        });
    }

    prevButtonClicked = () => {
        this.setState((prev, props) => {
            onSurveyIndexChanged(prev.index - 1);
            return { index: prev.index - 1 };
        });
    }

    render() {
        let question: JSX.Element;
        switch (this.questions[this.state.index].type) {
            case engine.QuestionType.open:
                break;
            case engine.QuestionType.singleSelect:
                break;
            case engine.QuestionType.multipleSelect:
                break;
            case engine.QuestionType.slider:
                break;
            case engine.QuestionType.stars:
                break;
            case engine.QuestionType.like:
                break;
            case engine.QuestionType.comparativeSliders:
                break;
        }
        return <View>
            <SurveyNav size={this.questions.length} />
            {question}
            <Button onClick={this.nextButtonClicked}>
                <Text>Siguiente</Text>
            </Button>
            <Button onClick={this.prevButtonClicked}>
                <Text>Atras</Text>
            </Button>
        </View>;
    }

    componentWillUnmount() {
        unregisterOnSurveyIndexChanged(this.onIndexChanged);
    }
}

const styles = StyleSheet.create({

});

