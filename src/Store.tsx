import { AsyncStorage } from 'react-native';
import Config from 'react-native-config';

const UNAUTHORIZED = 401;

class User {
    email: string;
    id: number;
    token: string;
}

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

export async function getUser(): Promise<User> {
    try {
        const userJson = await AsyncStorage.getItem('user');
        return JSON.parse(userJson);
    } catch (e) {
        throw Error("Couldn't get user");
    }
}

export async function saveUser(user: User): Promise<void> {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
    } catch (e) {
        throw Error("Couldn't save user");
    }
}

export async function tryLogin(username: string, password: string): Promise<boolean> {
    try {
        const res = await fetch(`${Config.API_URL}/sessions`, {
            body: JSON.stringify({
                password,
                username,
            }),
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
        });
        if (res.status === UNAUTHORIZED) {
            setLoginState(false);
            return false;
        }
        if (!res.ok) {
            throw Error('There was a network error');
        }
        const response = await res.json();
        const user: User = { email: response.email, id: response.id, token: response.access_token };
        saveUser(user);
        setLoginState(true);
        return true;
    } catch (e) {
        throw Error(`Error on tryLogin: ${(e as Error).message}`);
    }
}

export async function logOut() {
    throw Error('Not implemented');
    try {
        const res = await fetch(`${Config.API_URL}/sessions`, {
            headers: {
                // TODO: add the correct header and value to make an authenticated call
            },
            method: 'DELETE',
        });
        await AsyncStorage.removeItem('user');
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
