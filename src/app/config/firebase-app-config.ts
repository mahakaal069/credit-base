// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics, isSupported } from "firebase/analytics";
import { environment } from "../../environments/environment";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
    projectId: environment['projectId'],
    appId: environment['appId'],
    databaseURL: environment['databaseURL'],
    storageBucket: environment['storageBucket'],
    apiKey: environment['apiKey'],
    authDomain: environment['authDomain'],
    messagingSenderId: environment['messagingSenderId'],
    measurementId: environment['measurementId']
}

// Initialize Firebase
// isSupported();
export const firebaseApp: FirebaseApp = initializeApp(firebaseConfig);
// export const analytics: Analytics = getAnalytics(firebaseApp);
