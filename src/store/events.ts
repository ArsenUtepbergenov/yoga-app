import { db } from '@/firebase'
import { EventsState, ExerciseEvent, EventsActionContext } from '@/models'
import { checkTime, getDate, getTime } from '@/utils/time'
import { collection, getDocs } from 'firebase/firestore'

const eventsModule = {
  namespaced: true,
  state: {
    list: new Map(),
    newList: [],
  } as EventsState,
  mutations: {
    setList(state: EventsState, payload: Map<number, ExerciseEvent[]>) {
      state.list = payload
    },
    setNewList(state: EventsState, payload: ExerciseEvent[]) {
      state.newList = [...state.newList, ...payload]
      console.log(state.newList)
    },
  },
  actions: {
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
            from,
            to,
          },
        ])
      })

      commit('setList', list)
    },
  },
  getters: {
    list: (state: EventsState) => state.list,
  },
}

export default eventsModule
