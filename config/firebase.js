

import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import Constants from "expo-constants"
import { getStorage } from 'firebase/storage';
import ReactNativeAsyncStorage from '@react-native-async-storage/async-storage';



 const firebaseConfig = {

  apiKey: Constants.expoConfig.extra.apiKey,

  authDomain: Constants.expoConfig.extra.authDomain,

  projectId: Constants.expoConfig.extra.projectId,

  storageBucket: Constants.expoConfig.extra.storageBucket,

  messagingSenderId: Constants.expoConfig.extra.messagingSenderId,

   appId: Constants.expoConfig.extra.appId



};


// Initialize Firebase

export const app =  initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const database = getFirestore();
 export const storage = getStorage()