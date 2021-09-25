import firebase from 'firebase';

// add SDK Firebase
var firebaseConfig = {
    apiKey: "AIzaSyDqFn8Tf2JkjPfcpx6qadLCkWY90HZaSIg",
    authDomain: "team-voting-42128.firebaseapp.com",
    projectId: "team-voting-42128",
    storageBucket: "team-voting-42128.appspot.com",
    messagingSenderId: "1036044447779",
    appId: "1:1036044447779:web:c69304670c52d332c5c196"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();