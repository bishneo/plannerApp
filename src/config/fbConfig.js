import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

// Initialize Firebase
var config = {
    apiKey: "AIzaSyDT2n_E6rGn4B21Dz2-YbzAmvvqJJEzwWQ",
    authDomain: "marioplan-a1a82.firebaseapp.com",
    databaseURL: "https://marioplan-a1a82.firebaseio.com",
    projectId: "marioplan-a1a82",
    storageBucket: "marioplan-a1a82.appspot.com",
    messagingSenderId: "492697358615"
};
firebase.initializeApp(config);
firebase.firestore().settings({ timestampsInSnapshots: true })

export default firebase