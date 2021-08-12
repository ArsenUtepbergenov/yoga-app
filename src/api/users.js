import { db } from '@/firebase'

export default {
  async setUser({ name, email, uid }) {
    const dataBase = db.collection('users').doc(uid)
    await dataBase.set({
      name,
      email
    })
    return
  }
}
