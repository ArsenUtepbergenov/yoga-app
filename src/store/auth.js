import { auth } from '@/firebase'

export default {
  login(email, password) {
    return auth.signInWithEmailAndPassword(email, password);
  },
  register(email, password) {
    return auth.createUserWithEmailAndPassword(email, password);
  },
  logout() {
    return auth.signOut();
  }
}
