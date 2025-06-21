import {setGlobalOptions} from 'firebase-functions';
import {logger} from 'firebase-functions';
import {onRequest} from 'firebase-functions/v2/https';

setGlobalOptions({maxInstances: 10});

// The Firebase Admin SDK to access Firestore.
import {initializeApp} from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';
initializeApp();

export const helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", {structuredData: true});
    debugger
    response.send("Hello from Firebase change rt!");
});
