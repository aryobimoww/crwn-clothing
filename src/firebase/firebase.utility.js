import firebase from "firebase/compat/app";
import "firebase/compat/firestore";
import "firebase/compat/auth";

const config = {
  apiKey: "AIzaSyD4UFTXFG5eynor2jXfCFezNpaxVDrvNaM",
  authDomain: "crwn-db-8215e.firebaseapp.com",
  projectId: "crwn-db-8215e",
  storageBucket: "crwn-db-8215e.appspot.com",
  messagingSenderId: "690663124846",
  appId: "1:690663124846:web:ce7300d1f425ee19935b7f",
  measurementId: "G-X1TMKYLC7C",
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
