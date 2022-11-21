import firebase from 'firebase';

// adicione SDK do Firebase
var firebaseConfig = {
        apiKey: "AIzaSyDr6XERSj0QoZraHdiXanR5kUSvpW0M86E",
        authDomain: "projeto-58-c471c.firebaseapp.com",
        databaseURL: "https://projeto-58-c471c-default-rtdb.firebaseio.com",
        projectId: "projeto-58-c471c",
        storageBucket: "projeto-58-c471c.appspot.com",
        messagingSenderId: "332062257756",
        appId: "1:332062257756:web:76bca7bef07fa16e07ec99"
};
// Initialice o Firebase
firebase.initializeApp(firebaseConfig);

export default firebase.database();