import { Component } from 'react';

import { registerOnSurveyIndexChanged, unregisterOnSurveyIndexChanged } from '../Store';

interface IQuestionState<T> {
    answer: T;
}

interface IQuestionProps<T> {
    question: engine.Question;
    onAnswer: (answer: any) => void;
    previousAnswer?: T;
}

export default class Question<QuestionType, AnswerType> extends Component<IQuestionProps<AnswerType>, IQuestionState<AnswerType>>{

    data: QuestionType;

    constructor(props: any) {
        super(props);
        this.data = this.props.question.variations[0] as QuestionType;
        if (this.props.previousAnswer) {
            this.state = {
                answer: this.props.previousAnswer
            };
        }
        registerOnSurveyIndexChanged(this.saveAnswer);
    }

    saveAnswer = (index) => { this.props.onAnswer(this.state.answer); };

    componentWillUnmount() {
        unregisterOnSurveyIndexChanged(this.saveAnswer);
    }

}
