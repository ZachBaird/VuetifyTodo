import firebase from 'firebase/app';
import 'firebase/firestore';

// Your web app's Firebase configuration
var firebaseConfig = {
    apiKey: "AIzaSyAj11Wr-FyLoN8GoQManhTI1yvb7ODjtyo",
    authDomain: "oreo-todo.firebaseapp.com",
    databaseURL: "https://oreo-todo.firebaseio.com",
    projectId: "oreo-todo",
    storageBucket: "oreo-todo.appspot.com",
    messagingSenderId: "514967701487",
    appId: "1:514967701487:web:aa8de0e96d28f6afcf981a"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

const db = firebase.firestore();
db.settings({
    timestampsInSnapshots: true
});

export default db;