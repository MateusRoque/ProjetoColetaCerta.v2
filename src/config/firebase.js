import { initializeApp, getApp } from "firebase/app";
import { initializeAuth, getAuth, getReactNativePersistence } from 'firebase/auth';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyD7NlL4G2h4vHCIB64ou2_-0j_yaLNNoOk",
  authDomain: "coletacerta-446d6.firebaseapp.com",
  projectId: "coletacerta-446d6",
  storageBucket: "coletacerta-446d6.appspot.com",
  messagingSenderId: "14240283751",
  appId: "1:14240283751:web:7bff8e729e84a6918ea8c2",
  measurementId: "G-STWT011GZR"
};

// initialize Firebase App
const app = initializeApp(firebaseConfig);

// initialize Firebase Auth for that app immediately
const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(ReactNativeAsyncStorage)
});
export { auth, getApp, getAuth, getFirestore};