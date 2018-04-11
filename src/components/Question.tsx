import { Component } from 'react';

import { registerOnSurveyIndexChanged, unregisterOnSurveyIndexChanged } from '../Store';

interface IQuestionState<T> {
    answer: T;
}

interface IQuestionProps<T> {
    question: engine.Question;
    onAnswer: (index: number, answer: any) => void;
    previousAnswer: T | null;
    index: number;
}

export default class Question<QuestionType extends engine.Variation, AnswerType>
    extends Component<IQuestionProps<AnswerType>, IQuestionState<AnswerType>>{

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

    saveAnswer = (index) => { this.props.onAnswer(index, this.state.answer); };

    componentWillUnmount() {
        unregisterOnSurveyIndexChanged(this.saveAnswer);
    }

}
