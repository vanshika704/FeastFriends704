// Import the functions you need from the SDKs you need

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import firebase from 'firebase/app';
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
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


