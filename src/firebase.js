import firebase from 'firebase'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyDxOxI8oTtcbXRe_cq-AQriixQr5AvAtso",
  authDomain: "roomtune-id.firebaseapp.com",
  databaseURL: "https://roomtune-id.firebaseio.com",
  projectId: "roomtune-id",
  storageBucket: "roomtune-id.appspot.com",
  messagingSenderId: "869945729649"
};

const firebaseApp = firebase.initializeApp(config);

const db = firebaseApp.firestore();
const auth = firebaseApp.auth();

export {db};
export {auth};
