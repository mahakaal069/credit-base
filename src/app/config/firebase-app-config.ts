// Import the functions you need from the SDKs you need
import { FirebaseApp, initializeApp } from "firebase/app";
import { Analytics, getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const firebaseConfig = {
  apiKey: "AIzaSyChl74ySWniSdNa521k8P7-246-HhI1-i0",
  authDomain: "credit-base-65f11.firebaseapp.com",
  projectId: "credit-base-65f11",
  storageBucket: "credit-base-65f11.appspot.com",
  messagingSenderId: "4227615028",
  appId: "1:4227615028:web:fad5ed9e4750ebe42ffd61",
  measurementId: "G-43DN3X3JWQ"
};

// Initialize Firebase
export const app: FirebaseApp = initializeApp(firebaseConfig);
export const analytics: Analytics = getAnalytics(app);
