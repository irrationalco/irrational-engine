import React, { Component } from 'react';
import {
    ActivityIndicator,
    RefreshControl,
    ScrollView,
    StyleSheet,
    Text,
    View
} from 'react-native';

import {
    getLocalSurveyList,
    getSurveyList,
    saveLocalSurveyList,
} from '../Store';

import { colors } from '../Styles';


interface ISurveyDisplayState {
    index: number;
}

interface ISurveyDisplayProps {
    survey: engine.Survey;
}


export default class SurveyDisplay extends Component<ISurveyDisplayProps, ISurveyDisplayState> {

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

    answers: engine.QuestionAnswer[];
    questions: engine.Question[];
    variation: number[];

    constructor(props: any) {
        super(props);
        this.state = {
            index: 0
        };

        if (this.props.survey.randomized) {
            this.answers = Array(this.props.survey.necesaryQuestions.length).fill(null);
            this.questions = this.collapseQuestions(this.props.survey.necesaryQuestions);
            const used = Array(this.props.survey.questions.length).fill(false);
            while (this.questions.length < this.props.survey.questionsPerRun) {
                const idx = Math.floor(Math.random() * used.length);
                if (used[idx]) {
                    continue;
                }
                used[idx] = true;
                const [c, v] = SurveyDisplay.collapseQuestion(this.props.survey.questions[idx]);
                this.questions.push(c);
                this.answers.push({ questionId: c.id, type: c.type, variation: v });
            }
        } else {
            this.answers = Array(this.props.survey.questions.length).fill(null);
            this.questions = this.collapseQuestions(this.props.survey.questions);
        }
    }

    collapseQuestions(questions: engine.Question[]) {
        return questions.map((q, i) => {
            const [c, v] = SurveyDisplay.collapseQuestion(q);
            this.answers[i] = { questionId: q.id, type: q.type, variation: v };
            return c;
        });
    }

    onQuestionAnswered = (index: number, answer: any) => {
        this.answers[index] = { ...this.answers[index], answer };
    }

    render() {
        return <View></View>;
    }
}

const styles = StyleSheet.create({

});

