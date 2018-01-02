import * as firebase from 'firebase';

const config = {
    apiKey: "AIzaSyCs_9CJDDU4xxrb6wfG8AEz6Wf4WrS5tHI",
    authDomain: "concamin-c2a9c.firebaseapp.com",
    databaseURL: "https://concamin-c2a9c.firebaseio.com",
    projectId: "concamin-c2a9c",
    storageBucket: "concamin-c2a9c.appspot.com",
    messagingSenderId: "796874295023"
};
firebase.initializeApp(config);

export default firebase;

