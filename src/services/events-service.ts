import { NewExerciseEvent } from '@/models'
import { db } from '@/firebase'
import { addDoc, collection, Timestamp } from 'firebase/firestore'
import { setNotification } from '@/store/notification'
import { Codes } from '@/enums'
import { FirebaseError } from 'firebase/app'

export async function createEvent({ from, to }: NewExerciseEvent) {
  const fT = Timestamp.fromDate(new Date(from))
  const tT = Timestamp.fromDate(new Date(to))

  try {
    const docRef = await addDoc(collection(db, 'events'), {
      from: fT,
      to: tT,
    })

    setNotification(Codes.SUCCESS_CREATE_EVENTS)
  } catch (error) {
    console.error(error)
    setNotification(Codes.ERROR_CREATE_EVENTS, error as FirebaseError)
  }
}
