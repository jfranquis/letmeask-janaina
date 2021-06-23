import firebase from 'firebase/app'
import 'firebase/auth';
import 'firebase/database';

const firebaseConfig = {
    apiKey: "AIzaSyDEh6CHguuOIyQYvmW_1G84XLNtVv4TyjE",
    authDomain: "letmeask-janaina.firebaseapp.com",
    databaseURL: "https://letmeask-janaina-default-rtdb.firebaseio.com",
    projectId: "letmeask-janaina",
    storageBucket: "letmeask-janaina.appspot.com",
    messagingSenderId: "715317578487",
    appId: "1:715317578487:web:1fdfe99f5653425d4fa1f2"
};



firebase.initializeApp(firebaseConfig)

export const auth = firebase.auth();
export const database = firebase.database();