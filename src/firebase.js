import firebase from 'firebase/compat/app'
import 'firebase/compat/database'

const firebaseConfig = {
    apiKey: "AIzaSyCWLKmLB0K-8pEfCpUcX2RD2vhPy_uUskc",
    authDomain: "book-face-2021.firebaseapp.com",
    databaseURL: "https://book-face-2021-default-rtdb.firebaseio.com",
    projectId: "book-face-2021",
    storageBucket: "book-face-2021.appspot.com",
    messagingSenderId: "232456750231",
    appId: "1:232456750231:web:8526366adc035d6173d5d2",
    measurementId: "G-22H3529Y3G"
  };

firebase.initializeApp(firebaseConfig)
export default firebase;