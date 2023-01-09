import { EventDate, NewExerciseEvent } from '@/models'
import { db } from '@/firebase'
import { EventsState, ExerciseEvent, EventsActionContext } from '@/models'
import { createEvents } from '@/services/events-service'
import { checkTime, getDate, getFullDate, getTime } from '@/utils/time'
import { collection, getDocs } from 'firebase/firestore'

const eventsModule = {
  namespaced: true,
  state: {
    dates: [],
    list: new Map(),
    newList: [],
  } as EventsState,
  mutations: {
    setDates(state: EventsState, payload: EventDate[]) {
      state.dates = payload
    },
    setList(state: EventsState, payload: Map<number, ExerciseEvent[]>) {
      state.list = payload
    },
    addNewListItem(state: EventsState, payload: NewExerciseEvent) {
      state.newList.push(payload)
    },
    setNewListItem(state: EventsState, payload: NewExerciseEvent) {
      const i = state.newList.findIndex(i => i.id === payload.id)
      if (i !== -1) state.newList[i] = payload
    },
    removeFromNewList(state: EventsState, id: number) {
      state.newList = state.newList.filter(i => i.id !== id)
    },
    removeFromDates(state: EventsState, id: string) {
      state.dates = state.dates.filter(i => i._id !== id)
    },
  },
  actions: {
    create({ state }: EventsActionContext) {
      if (!state.newList.length) return

      const items = state.newList.filter(i => i.from && i.to)

      createEvents(items)
    },
    async fetch({ commit }: EventsActionContext) {
      const list = new Map<number, ExerciseEvent[]>()
      const querySnapshot = await getDocs(collection(db, 'events'))

      querySnapshot.forEach(doc => {
        const d = doc.data()
        const date = getDate(d.from)
        const from = getTime(d.from)
        let to = getTime(d.to)
        let type = doc.data().type

        if (!checkTime(d.from, d.to)) {
          to = from
          type = 'error'
        }

        list.set(date, [
          ...(list.get(date) || []),
          {
            type,
            content: `с ${from} - до ${to}`,
          },
        ])
      })

      commit('setList', list)
    },
    async fetchDates({ commit }: EventsActionContext) {
      const dates: EventDate[] = []
      const querySnapshot = await getDocs(collection(db, 'events'))

      querySnapshot.forEach(doc => {
        const d = doc.data()
        const from = getTime(d.from)
        let to = getTime(d.to)

        if (!checkTime(d.from, d.to)) {
          to = from
        }

        dates.push({
          _id: doc.id,
          value: getFullDate(d.from),
          from,
          to,
        })
      })

      commit('setDates', dates)
    },
  },
  getters: {
    list: (state: EventsState) => state.list,
    dates: (state: EventsState) => state.dates,
    newList: (state: EventsState) => state.newList,
  },
}

export default eventsModule
