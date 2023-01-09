import { NewExerciseEvent } from '@/models'
import { db } from '@/firebase'
import { addDoc, deleteDoc, collection, Timestamp, doc } from 'firebase/firestore'
import { setNotification } from '@/store/notification'
import { Codes } from '@/enums'
import { FirebaseError } from 'firebase/app'

export async function createEvents(events: NewExerciseEvent[]) {
  for (const item of events) {
    await createEvent(item)
  }
}

export async function createEvent({ from, to }: NewExerciseEvent) {
  const fT = Timestamp.fromDate(new Date(from))
  const tT = Timestamp.fromDate(new Date(to))

  try {
    await addDoc(collection(db, 'events'), {
      from: fT,
      to: tT,
    })

    setNotification(Codes.SUCCESS_CREATE_EVENTS)
  } catch (error) {
    console.error(error)
    setNotification(Codes.ERROR_CREATE_EVENTS, error as FirebaseError)
  }
}

export async function deleteEvent(id: string) {
  try {
    const ref = doc(db, 'events', id)
    await deleteDoc(ref)

    setNotification(Codes.SUCCESS_DELETE_EVENTS)
  } catch (error) {
    console.error(error)
    setNotification(Codes.ERROR_DELETE_EVENTS)
  }
}
