import firebase from 'firebase/app';
import 'firebase/auth';

// Your web app's Firebase configuration
var firebaseConfig = {
  apiKey: "AIzaSyCJzo-pBsDtRkb-FpjN3-1adjXuK3FTXwo",
  authDomain: "omi-mock.firebaseapp.com",
  databaseURL: "https://omi-mock.firebaseio.com",
  projectId: "omi-mock",
  storageBucket: "omi-mock.appspot.com",
  messagingSenderId: "548168535879",
  appId: "1:548168535879:web:f11553378a6bee56ac4662"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;