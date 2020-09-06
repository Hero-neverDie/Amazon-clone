import firebase from "firebase"

const firebaseApp = firebase.initializeApp({
   
    apiKey: "AIzaSyDs_VCo8a9AMAB2In3EufGHxksH_n2HU0g",
    authDomain: "fir-88fea.firebaseapp.com",
    databaseURL: "https://fir-88fea.firebaseio.com",
    projectId: "fir-88fea",
    storageBucket: "fir-88fea.appspot.com",
    messagingSenderId: "80161856732",
    appId: "1:80161856732:web:9baa36b50189e4914a2819",
    measurementId: "G-5EPYYHB5PZ"

});

// const db = firebaseApp.firestore();
const auth = firebase.auth();

export{auth}