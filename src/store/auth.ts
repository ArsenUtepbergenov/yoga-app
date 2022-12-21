import { Codes } from '@/enums'
import {
  AuthState,
  User,
  FirebaseUser,
  ReceivedUser,
  AuthActionContext,
  UserPhoto,
} from '@/models'
// api
import { auth, db, login, registration, logout, storage } from '@/firebase'
import { doc, getDoc, setDoc, updateDoc } from 'firebase/firestore'
import { FirebaseError } from 'firebase/app'
import { setNotification } from './notification'
import { setAuthModal } from './modal'
import { sendPasswordResetEmail, updateProfile, User as AuthUser } from 'firebase/auth'
import { ref, deleteObject } from 'firebase/storage'

const authModule = {
  namespaced: true,
  state: {
    user: {
      displayName: '',
      email: '',
      photoURL: '',
    },
    isLoggedIn: false,
  } as AuthState,
  mutations: {
    setUser: (state: AuthState, user: ReceivedUser) =>
      (state.user = {
        ...state.user,
        ...user,
      }),
    setLoggedIn: (state: AuthState, status: boolean) => (state.isLoggedIn = status),
    setPhotoURL: (state: AuthState, url: string) => (state.user.photoURL = url),
  },
  actions: {
    async resetPassword(_: unknown, email: string) {
      try {
        await sendPasswordResetEmail(auth, email)
      } catch (error) {
        setNotification(Codes.ERROR_RESET_PASSWORD, error as FirebaseError)
      }
    },

    async login(_: unknown, { email, password }: FirebaseUser) {
      try {
        const { user } = await login(auth, email, password)
        setNotification(Codes.SUCCESS_SIGN_IN, user as ReceivedUser)
        setAuthModal(false)
      } catch (error) {
        setNotification(Codes.ERROR_SIGN_IN, error as FirebaseError)
      }
    },

    async registration(_: unknown, { name, email, password }: User) {
      try {
        const { user } = await registration(auth, email, password)
        await setDoc(doc(db, 'users', user.uid), {
          name,
          email,
          photoURL: '',
          photoName: '',
        })

        await updateProfile(user, {
          displayName: name,
        })

        console.log('Document written with ID: ', user.uid)

        setNotification(Codes.STATUS_REGISTRATION, user as ReceivedUser)
        setAuthModal(false)
      } catch (error) {
        setNotification(Codes.ERROR_REGISTRATION, error as FirebaseError)
      }
    },

    async logout() {
      try {
        await logout(auth)
        setNotification(Codes.SUCCESS_LOGOUT)
      } catch (error) {
        setNotification(Codes.ERROR_LOGOUT, error as FirebaseError)
      }
    },

    async updatePhotoURL({ commit }: AuthActionContext, { url, fileName }: UserPhoto) {
      try {
        const currentUser = auth.currentUser as AuthUser
        const userRef = doc(db, 'users', currentUser.uid)
        const userDoc = await getDoc(userRef)

        if (userDoc.exists()) {
          const { photoName } = userDoc.data()
          if (photoName) await deleteObject(ref(storage, `images/${photoName}`))
        } else {
          console.log('No such document!')
        }

        await updateProfile(currentUser, {
          photoURL: url,
        })

        await updateDoc(userRef, {
          photoName: fileName,
          photoURL: url,
        })

        commit('setPhotoURL', url)
      } catch (error) {
        console.error('User upload/update photo: ', error)
      }
    },
  },
  getters: {
    isLoggedIn: (state: AuthState) => state.isLoggedIn,
    user: (state: AuthState) => state.user,
    userName: (state: AuthState) => state.user.displayName,
    userEmail: (state: AuthState) => state.user.email,
    userPhotoURL: (state: AuthState) => state.user.photoURL,
  },
}

export default authModule
