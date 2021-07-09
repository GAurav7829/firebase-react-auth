import firebase from 'firebase';
import 'firebase/auth';

var firebaseConfig = {
    apiKey: "AIzaSyC7QLL_LJLG5nqoWMQ8bD7EMhfho6TkPng",
    authDomain: "frauth-c0a36.firebaseapp.com",
    projectId: "frauth-c0a36",
    storageBucket: "frauth-c0a36.appspot.com",
    messagingSenderId: "694186301920",
    appId: "1:694186301920:web:9e4141338f16290aebf385",
    measurementId: "G-XKWTX98EQJ"
};

var firebaseObj = firebase.initializeApp(firebaseConfig);

export default firebaseObj;