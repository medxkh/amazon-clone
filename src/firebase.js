import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyBFIr5lkm4C0vQwbtGZm3_Q7ymgVaBZxjY",
  authDomain: "clone-38107.firebaseapp.com",
  databaseURL: "https://clone-38107.firebaseio.com",
  projectId: "clone-38107",
  storageBucket: "clone-38107.appspot.com",
  messagingSenderId: "141191150604",
  appId: "1:141191150604:web:83fdfb7762a4498260c229",
  measurementId: "G-XM4R6BG9LJ",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
