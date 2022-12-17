import { initializeApp } from 'firebase/app'
import { getFirestore } from 'firebase/firestore'
import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from 'firebase/auth'

const config = {
  apiKey: 'AIzaSyB_DJ_xbh9qHr2YMEUWFZWJ2WooPL0Bo2A',
  authDomain: 'id-yoga-app.firebaseapp.com',
  projectId: 'id-yoga-app',
  storageBucket: 'id-yoga-app.appspot.com',
  messagingSenderId: '539342750681',
  appId: '1:539342750681:web:cce83ea6d0eabb7be00fc8',
}

const app = initializeApp(config)

export const db = getFirestore()
export const auth = getAuth()
export const login = signInWithEmailAndPassword
export const registration = createUserWithEmailAndPassword
export const logout = signOut
