import * as firebase from 'firebase/app';
import { AsyncStorage } from 'react-native';
import { auth, firestore } from './fbapp';

const loginChangeHooks: ((state: boolean) => void)[] = [];

let loginState: boolean = null;

async function setLoginState(state: boolean = null) {
    const newLoginState = state === null ? await isLoggedIn() : state;
    if (newLoginState !== loginState) {
        loginState = newLoginState;
        loginChangeHooks.forEach((k) => {
            k(newLoginState);
        });
    }
}
setLoginState();

export function registerOnLoginChange(callback: (state: boolean) => void) {
    loginChangeHooks.push(callback);
}

export function unregisterOnLoginChange(callback: (state: boolean) => void) {
    loginChangeHooks.splice(loginChangeHooks.indexOf(callback), 1);
}

export async function getLocalUser(): Promise<engine.User> {
    try {
        const userJson = await AsyncStorage.getItem('user');
        return JSON.parse(userJson);
    } catch (e) {
        throw Error(`Couldn't get user ${e.message}`);
    }
}

export async function saveLocalUser(user: engine.User): Promise<void> {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
        throw Error(`Couldn't save user ${e.message}`);
    }
}

export async function getUserById(uid: string) {
    try {
        const doc = await firestore.doc(`/user/${uid}`).get();
        return { ...doc.data(), uid } as engine.User;
    } catch (e) {
        throw Error(`getUserById: ${(e as Error).message}`);
    }
}

export async function tryLogin(username: string, password: string) {
    try {
        const fbUser: firebase.User = await auth.signInWithEmailAndPassword(username, password);
        const user = await getUserById(fbUser.uid);
        await saveLocalUser(user);
        await setLoginState(true);
    } catch (e) {
        const error: any = Error(`tryLogin: ${(e as Error).message}`);
        error.code = e.code || 'auth/generic-error';
        await setLoginState(false);
        throw error;
    }
}

export async function logOut() {
    try {
        const logOutPromise = auth.signOut();
        await AsyncStorage.removeItem('user');
        await logOutPromise;
    } catch (e) {
        throw Error(`Couldn't log out ${e.message}`);
    }
}

export async function isLoggedIn() {
    try {
        const user = await AsyncStorage.getItem('user');
        return user !== null;
    } catch (e) {
        throw Error(`Can't check login status ${e.message}`);
    }
}

export async function getSurveyList() {
    try {
        const user = await getLocalUser();
        const coll = await firestore.collection(`data/surveyLists/${user.organizationId}`).get();
        const surveyList: engine.SurveyListing[] = coll.docs.map((doc) => {
            return doc.data() as engine.SurveyListing;
        });
        return surveyList;
    } catch (e) {
        throw Error(`getSurveyList: ${e.message}`);
    }
}

export async function saveLocalSurveyList(list: engine.SurveyListing[]) {
    try {
        await AsyncStorage.setItem('surveyList', JSON.stringify(list));
    } catch (e) {
        throw Error(`Couldn't save survey list ${e.message}`);
    }
}

export async function getLocalSurveyList(): Promise<engine.SurveyListing[]> {
    try {
        const listJson = await AsyncStorage.getItem('surveyList');
        return JSON.parse(listJson, (k: any, v: any) => {
            if (k === 'lastUpdate') {
                return new Date(v);
            }
            return v;
        });
    } catch (e) {
        throw Error(`Couldn't get survey list ${e.message}`);
    }
}

async function downloadQuestion(qArray: engine.Question[], docs: firebase.firestore.DocumentSnapshot[], route: string) {
    const pArray: Promise<firebase.firestore.QuerySnapshot>[] = new Array(qArray.length);
    for (let i = 0; i < docs.length; i++) {
        qArray[i] = docs[i].data() as engine.Question;
        pArray[i] = firestore.collection(`${route}/${docs[i].id}/variations`).get();
    }

    for (let i = 0; i < pArray.length; i++) {
        const variations = (await pArray[i]).docs;
        qArray[i].variations = new Array(variations.length);
        for (let j = 0; j < variations.length; j++) {
            qArray[i].variations[j] = variations[j].data() as engine.Variation;
        }
    }
}

export async function getSurveyById(id: number) {
    try {
        const user = await getLocalUser();
        const route = `data/surveys/${user.organizationId}/${id}`;

        const survPromise = firestore.doc(route).get();
        const questionsPromise = firestore.collection(`${route}/questions`).get();
        const survey = (await survPromise).data() as engine.Survey;
        const waitForAll = [];
        if (survey.randomized) {
            const rq = (await firestore.collection(`${route}/requiredQuestions`).get()).docs;
            survey.requiredQuestions = new Array(rq.length);
            waitForAll.push(downloadQuestion(survey.requiredQuestions, rq, `${route}/requiredQuestions`));
        }
        const q = (await questionsPromise).docs;
        survey.questions = new Array(q.length);
        waitForAll.push(downloadQuestion(survey.questions, q, `${route}/questions`));

        for (const promise of waitForAll) {
            await promise;
        }

        return survey;
    } catch (e) {
        throw Error(`getSurveyById: ${e.message}`);
    }
}

export async function saveLocalSurvey(survey: engine.Survey) {
    try {
        await AsyncStorage.setItem(`survey_${survey.id}`, JSON.stringify(survey));
    } catch (e) {
        throw Error(`Couldn't save survey ${e.message}`);
    }
}

export async function getLocalSurvey(id: number): Promise<engine.Survey> {
    try {
        const listJson = await AsyncStorage.getItem(`survey_${id}`);
        return JSON.parse(listJson);
    } catch (e) {
        throw Error(`Couldn't get survey ${e.message}`);
    }
}

const questionAnsweredHooks: ((index: number, answered: boolean) => void)[] = [];

export function onQuestionAnswered(index: number, answered: boolean) {
    questionAnsweredHooks.forEach((k) => {
        k(index, answered);
    });
}

export function registerOnQuestionAnswered(callback: (index: number, answered: boolean) => void) {
    questionAnsweredHooks.push(callback);
}

export function unregisterOnQuestionAnswered(callback: (index: number, answered: boolean) => void) {
    questionAnsweredHooks.splice(questionAnsweredHooks.indexOf(callback), 1);
}

const surveyIndexChangedHooks: ((index: number) => void)[] = [];

export function onSurveyIndexChanged(index: number) {
    surveyIndexChangedHooks.forEach((k) => {
        k(index);
    });
}

export function registerOnSurveyIndexChanged(callback: (index: number) => void) {
    surveyIndexChangedHooks.push(callback);
}

export function unregisterOnSurveyIndexChanged(callback: (index: number) => void) {
    surveyIndexChangedHooks.splice(surveyIndexChangedHooks.indexOf(callback), 1);
}
