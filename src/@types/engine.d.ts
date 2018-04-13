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
        requiredQuestions?: Question[];
    }

    const enum QuestionType {
        open,
        singleSelect,
        multipleSelect,
        slider,
        stars,
        like,
        comparativeSliders
    }

    interface Question {
        id: number;
        type: QuestionType;
        variations: Variation[];
    }

    interface Variation {
        id: number;
        title?: string;
        image?: string; //for now
        imageDescription?: string;
    }

    interface Open extends Variation {
        min?: number;
        max?: number;
    }

    interface SingleSelect extends Variation {
        options?: Option[];
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
        min?: number;
        max?: number;
        start?: number;
        step?: number;
        // decorators: decorator[];
    }

    interface Stars extends Variation {

    }

    interface Like extends Variation {

    }

    interface ComparativeSliders extends Slider {
        slides?: Slide[];
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
        type: QuestionType;
        variation: number;
        answer?: any;
    }
}