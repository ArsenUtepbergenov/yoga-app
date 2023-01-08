import { db } from '@/firebase'
import { addDoc, collection, Timestamp } from 'firebase/firestore'

export async function createEvent(from: string, to: string) {
  const fT = Timestamp.fromDate(new Date(from))
  const tT = Timestamp.fromDate(new Date(to))

  try {
    const docRef = await addDoc(collection(db, 'events'), {
      from: fT,
      to: tT,
      type: 'success',
    })
  } catch (error) {
    console.error(error)
  }
}
