import firebase from "firebase/compat/app";
import "firebase/compat/auth";

const firebaseConfig = {
  apiKey: "AIzaSyA-pNRVxb7mYTYDiA_L9KdTsJuRBNZbFT8",
  authDomain: "test-62789.firebaseapp.com",
  projectId: "test-62789",
  storageBucket: "test-62789.appspot.com",
  messagingSenderId: "1062404424657",
  appId: "1:1062404424657:web:dc56608b31ae2aa1ac16f0",
  measurementId: "G-7W28517Y2N",
};

firebase.initializeApp(firebaseConfig);

export default firebase;
