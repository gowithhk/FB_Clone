// For Firebase JS SDK v7.20.0 and later, measurementId is optional
import firebase from "firebase";


const firebaseConfig = {
  apiKey: "AIzaSyDi6MOh-IvjtS8P759YCVx5VLbkdKQ5R2I",
  authDomain: "facebook-clone-3f52f.firebaseapp.com",
  projectId: "facebook-clone-3f52f",
  storageBucket: "facebook-clone-3f52f.appspot.com",
  messagingSenderId: "345605549622",
  appId: "1:345605549622:web:a8324540eafdcbea7b7297",
  measurementId: "G-Q772PEWN0J",
};


const firebaseApp = firebase.initializeApp(firebaseConfig);
const db = firebaseApp.firestore();
const auth = firebase.auth();
const provider = new firebase.auth.GoogleAuthProvider();


export { auth, provider };
export default db;