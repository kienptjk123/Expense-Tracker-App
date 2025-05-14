// Import the functions you need from the SDKs you need
import { initializeApp } from "@firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { initializeAuth, getReactNativePersistence } from "@firebase/auth";
import AsyncStorage from "@react-native-async-storage/async-storage";
import { getFirestore } from "@firebase/firestore";
// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBo6vSLVXGxJN0kmqgXVFNX9Gi0I4zNFgc",
  authDomain: "expense-tracker-ce9ba.firebaseapp.com",
  projectId: "expense-tracker-ce9ba",
  storageBucket: "expense-tracker-ce9ba.firebasestorage.app",
  messagingSenderId: "1090315369781",
  appId: "1:1090315369781:web:338b052fc6e559ea57607c",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication
export const auth = initializeAuth(app, {
  persistence: getReactNativePersistence(AsyncStorage),
});

export const firestore = getFirestore(app);
