import * as firebase from 'firebase';



// Initialize Firebase
const config = {
    apiKey: "AIzaSyC9LfTG02qUjNOX-sT9gLNEB88CIURrebs",
    authDomain: "scientificnw.firebaseapp.com",
    databaseURL: "https://scientificnw.firebaseio.com",
    projectId: "scientificnw",
    storageBucket: "scientificnw.appspot.com",
    messagingSenderId: "478862627017"
};
firebase.initializeApp(config);


export default firebase;

