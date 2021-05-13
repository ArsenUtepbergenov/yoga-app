import firebase from 'firebase/app'
import 'firebase/firestore'
import 'firebase/auth'

const config = {
  apiKey: "AIzaSyB_DJ_xbh9qHr2YMEUWFZWJ2WooPL0Bo2A",
  authDomain: "id-yoga-app.firebaseapp.com",
  projectId: "id-yoga-app",
  storageBucket: "id-yoga-app.appspot.com",
  messagingSenderId: "539342750681",
  appId: "1:539342750681:web:cce83ea6d0eabb7be00fc8"
}

const firebaseApp = firebase.initializeApp(config)

const db = firebaseApp.firestore()
const auth = firebaseApp.auth()

export { db, auth }
