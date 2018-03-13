import * as firebase from 'firebase';
import 'firebase/firestore';
import { fbConfig } from './Config';

import { Platform } from 'react-native';

const app = firebase.initializeApp(fbConfig);
const auth = app.auth();
const storage = app.storage();
const firestore = app.firestore();

if (Platform.OS === 'android') {
    const originalSend = XMLHttpRequest.prototype.send;
    XMLHttpRequest.prototype.send = function(body: any) {
        if (body === '') {
            // tslint:disable-next-line:no-invalid-this
            originalSend.call(this);
        } else {
            // tslint:disable-next-line:no-invalid-this
            originalSend.call(this, body);
        }
    };
}

export { app, auth, storage, firestore };
