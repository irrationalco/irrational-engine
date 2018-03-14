declare namespace engine {
    interface User {
        uid: string;
        organizationId: number;
    }

    interface SurveyListing {
        id: number;
        lastUpdate: Date;
        numberOfQuestions: number;
        sizeEstimate: number;
        name: string;
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

    interface Single_select extends Variation {
        options: Option[];
    }

    interface Option {
        id: number;
        text: string;
        image: string; //for now
        imageDescription: string;
    }

    interface Multiple_select extends Single_select {

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

    interface Comparative_sliders extends Slider {
        slides: Slide[];
    }

    interface Slide extends Option {

    }
}