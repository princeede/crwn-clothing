import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
    apiKey: "AIzaSyA-ZzIgF7i_kiowNL8_WCRYLnxDJ-0Yrco",
    authDomain: "crwn-clothing-e69b4.firebaseapp.com",
    projectId: "crwn-clothing-e69b4",
    storageBucket: "crwn-clothing-e69b4.appspot.com",
    messagingSenderId: "288309923277",
    appId: "1:288309923277:web:99c85adb7524056b0c4884",
    measurementId: "G-1PMKB0JJR9"
};


firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' })
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;