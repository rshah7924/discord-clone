import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBCZ23jOkIMnMX3l1oF2H400bXV_GCn9-Q",
  authDomain: "discord-clone-91c12.firebaseapp.com",
  projectId: "discord-clone-91c12",
  storageBucket: "discord-clone-91c12.appspot.com",
  messagingSenderId: "727554047633",
  appId: "1:727554047633:web:9d9931d9e87a6c3dc70930",
  measurementId: "G-YEX6E8DTV7",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();

export { auth, provider };
export default db;
