import firebase from 'firebase/app'
import 'firebase/firestore'

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyCVTnODdNhd0mejHXUP_avum3ZFzvqiVeU",
    authDomain: "fb-crud-react-96574.firebaseapp.com",
    databaseURL: "https://fb-crud-react-96574.firebaseio.com",
    projectId: "fb-crud-react-96574",
    storageBucket: "fb-crud-react-96574.appspot.com",
    messagingSenderId: "186024323484",
    appId: "1:186024323484:web:97303fde9088d50c43c059"
  };
  // Initialize Firebase
  const fb = firebase.initializeApp(firebaseConfig);

  export const db = fb.firestore();