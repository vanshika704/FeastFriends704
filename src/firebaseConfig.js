
import firebase from 'firebase/app';

const firebaseConfig = {
  apiKey: "AIzaSyC8K3pW7oeCGUSaTsZu12HGWE9CivNwdl4",
  authDomain: "feastfriends-53724.firebaseapp.com",
  projectId: "feastfriends-53724",
  storageBucket: "feastfriends-53724.appspot.com",
  messagingSenderId: "323828200975",
  appId: "1:323828200975:web:487b9234f1bf5001bed57a",
  measurementId: "G-LX6BRM1FB6"
};

firebase.initializeApp(firebaseConfig);
export const auth = firebase.auth();
export const firestore = firebase.firestore();


