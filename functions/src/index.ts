import {setGlobalOptions} from 'firebase-functions';
import {defineString} from 'firebase-functions/params';
import {logger} from 'firebase-functions';
import {onRequest} from 'firebase-functions/v2/https';
import {onDocumentCreated} from 'firebase-functions/v2/firestore';

setGlobalOptions({maxInstances: 10});

const welcomeMessage = defineString('WELCOME_MESSAGE')

// The Firebase Admin SDK to access Firestore.
import {initializeApp} from 'firebase-admin/app';
// import { getFirestore } from 'firebase-admin/firestore';
initializeApp();

export const helloWorld = onRequest((request, response) => {
    logger.info("Hello logs!", {structuredData: true});
    debugger
    response.send(`Hello from Firebase! ${welcomeMessage.value()}`);
});

export const onPostCreated = onDocumentCreated('posts/{id}',(event)=>{
    console.log(event.data?.data());  // Data
    console.log(event.params.id);  // Document Id
} )