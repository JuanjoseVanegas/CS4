// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from 'firebase/auth'

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDuadrx6VUpZWBcUOpOzyr2axCn4OSzp18",
  authDomain: "software4-e28fc.firebaseapp.com",
  projectId: "software4-e28fc",
  storageBucket: "software4-e28fc.appspot.com",
  messagingSenderId: "339256609235",
  appId: "1:339256609235:web:63d47881c52ddb12280726",
  measurementId: "G-BCQ70HKBFG"
};

// Initialize Firebase
export const FirebaseApp = initializeApp(firebaseConfig);
export const FirebaseAuth = getAuth(FirebaseApp)
export const analytics = getAnalytics(FirebaseApp);