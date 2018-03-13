import * as firebase from 'firebase/app';
import { AsyncStorage } from 'react-native';
import { auth, firestore } from './fbapp';

const loginChangeHooks: ((state: boolean) => void)[] = [];

let loginState: boolean = null;

async function setLoginState(state: boolean = null) {
    const newLoginState = state === null ? await isLoggedIn() : state;
    if (newLoginState !== loginState) {
        loginChangeHooks.forEach((k) => {
            k(newLoginState);
        });
    }
    loginState = newLoginState;
}
setLoginState();

export function registerOnLoginChange(callback: () => void) {
    loginChangeHooks.push(callback);
}

export async function getUser(): Promise<engine.User> {
    try {
        const userJson = await AsyncStorage.getItem('user');
        return JSON.parse(userJson);
    } catch (e) {
        throw Error("Couldn't get user");
    }
}

export async function saveUser(user: engine.User): Promise<void> {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
        throw Error("Couldn't save user");
    }
}

export async function getUserById(uid: string) {
    try {
        const doc = await firestore.doc(`/users/${uid}`).get();
        return { ...doc.data(), uid } as engine.User;
    } catch (e) {
        throw Error(`getUserById: ${(e as Error).message}`);
    }
}

export async function tryLogin(username: string, password: string) {
    try {
        const fbUser: firebase.User = await auth.signInWithEmailAndPassword(username, password);
        const user = await getUserById(fbUser.uid);
        saveUser(user);
        setLoginState(true);
    } catch (e) {
        const error:any = Error(`tryLogin: ${(e as Error).message}`);
        error.code = e.code || 'auth/generic-error';
        throw error;
    }
}

export async function logOut() {
    try {
        const logOutPromise = auth.signOut();
        await AsyncStorage.removeItem('user');
        await logOutPromise;
    } catch (e) {
        throw Error("Couldn't log out");
    }
}

export async function isLoggedIn() {
    try {
        const user = await AsyncStorage.getItem('user');
        return user !== null;
    } catch (e) {
        throw Error("Can't check logged status");
    }
}
