import firebase from 'firebase/compat/app';
import 'firebase/compat/auth';
import 'firebase/compat/firestore';


const config = {
    apiKey: "AIzaSyC-MgMfS3vyxVWOpIsW0wejF25RO_0YLe8",
    authDomain: "e-clothing-6cb19.firebaseapp.com",
    projectId: "e-clothing-6cb19",
    storageBucket: "e-clothing-6cb19.appspot.com",
    messagingSenderId: "870043130969",
    appId: "1:870043130969:web:d64f4646de206d97a1e548",
    measurementId: "G-9VHSRWY5KM"
  };


  firebase.initializeApp(config);


  export const auth = firebase.auth();
  export const firestore = firebase.firestore();

  const provider = new firebase.auth.GoogleAuthProvider();
  provider.setCustomParameters({prompt:'select_account' });

  export const signInWithGoogle =() => auth.signInWithPopup(provider);

  export default firebase;