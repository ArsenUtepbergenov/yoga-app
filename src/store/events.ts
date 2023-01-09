import { EventDate, NewExerciseEvent } from '@/models'
import { db } from '@/firebase'
import { EventsState, ExerciseEvent, EventsActionContext } from '@/models'
import { createEvent } from '@/services/events-service'
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
  },
  actions: {
    async create({ state }: EventsActionContext) {
      if (!state.newList.length) return

      state.newList.forEach(e => createEvent(e))
    },
    async fetch({ commit }: EventsActionContext) {
      const dates: EventDate[] = []
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

        dates.push({
          value: getFullDate(d.from),
          from,
          to,
        })

        list.set(date, [
          ...(list.get(date) || []),
          {
            type,
            content: `с ${from} - до ${to}`,
          },
        ])
      })

      commit('setList', list)
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
