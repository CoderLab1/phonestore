// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import {getFirestore} from 'firebase/firestore';
import {getAuth} from 'firebase/auth';


// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBiUYAZMIGeqdAkqZZrAMepZLA2L4Pee4A",
  authDomain: "ecom-24486.firebaseapp.com",
  projectId: "ecom-24486",
  storageBucket: "ecom-24486.firebasestorage.app",
  messagingSenderId: "1057556257851",
  appId: "1:1057556257851:web:0d43305ac086a384aa101e",
  measurementId: "G-5V6KEWD7F7"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const fireDB = getFirestore(app);
const auth = getAuth(app);

export {fireDB, auth}

