declare namespace engine {
    interface User {
        uid: string;
        organizationId: number;
    }

    const enum SurveyStatus {
        notDownloaded,
        updateNeeded,
        upToDate,
    }

    interface SurveyListing {
        id: number;
        lastUpdate: Date;
        numberOfQuestions: number;
        name: string;
        status?: SurveyStatus;
        // logo: image;
    }

    interface Survey {
        id: number;
        //logo: image;
        lastUpdate: Date;
        questions: Question[];
        randomized: boolean;
        questionsPerRun?: number;
        necesaryQuestions?: Question[];
    }

    interface Question {
        id: number;
        type: string; //for now
        variations: Variation[];
    }

    interface Variation {
        title: string;
        image: string; //for now
        imageDescription: string;
    }

    interface Open extends Variation {
        min: number;
        max: number;
    }

    interface SingleSelect extends Variation {
        options: Option[];
    }

    interface Option {
        id: number;
        text: string;
        image: string; //for now
        imageDescription: string;
    }

    interface MultipleSelect extends SingleSelect {

    }

    interface Slider extends Variation {
        min: number;
        max: number;
        start: number;
        step: number;
        // decorators: decorator[];
    }

    interface Stars extends Variation {

    }

    interface Like extends Variation {

    }

    interface ComparativeSliders extends Slider {
        slides: Slide[];
    }

    interface Slide extends Option {

    }

    interface SurveyAnswer {
        surveyId: number;
        id: number;
        date: Date;
        userId: number;
        answers: QuestionAnswer[];
        demographics: Demographics;
    }

    interface Demographics {
        dateOfBirth: Date;
        gender: 'M' | 'F';
    }

    interface QuestionAnswer {
        questionId: number;
        // type: string;
        variationId: number;
    }

    interface OpenAnswer extends QuestionAnswer {
        answer: string;
    }

    interface SingleSelectAnswer extends QuestionAnswer {
        answer: number;
    }

    interface MultipleSelectAnswer extends QuestionAnswer {
        answer: number[];
    }

    interface SliderAnswer extends QuestionAnswer {
        answer: number;
    }

    interface StarAnswer extends QuestionAnswer {
        answer: number;
    }

    interface LikeAnswer extends QuestionAnswer {
        answer: boolean;
    }

    interface ComparativeSlidersAnswer extends QuestionAnswer {
        answer: number[];
    }
}