import { AsyncStorage } from 'react-native';
import Config from 'react-native-config';

const UNAUTHORIZED = 401;

class User {
    email: string;
    id: number;
    token: string;
}

export function getUser() {

}

export async function saveUser(user: User): Promise<boolean> {
    try {
        await AsyncStorage.setItem('user', JSON.stringify(user));
        return true;
    } catch (e) {
        return false;
    }
}

export async function tryLogin(username: string, password: string): Promise<boolean> {
    try {
        const res = await fetch(`${Config.API_URL}/sessions`, {
            body: JSON.stringify({
                'password': password,
                'username': username,
            }),
            method: 'POST',
        });
        if (res.status === UNAUTHORIZED) {
            return false;
        }
        const response = await res.json();
        const user: User = { email: response.email, id: response.id, token: response.access_token };
        saveUser(user);
        return true;
    } catch (e) {
        throw Error(`Error on tryLogin: ${(e as Error).message}`);
    }
}

export async function isLoggedIn() {

}
