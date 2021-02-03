import parsePhoneNumber from 'libphonenumber-js'

const transfer = {
  namespaced: true,
  state: () => ({
    id: '',
    name: '',
    photo: '',
    phone: '+62',
    amount: 0,
    notes: '',
    date: ''
  }),
  mutations: {
    SET_CONFIRMATION (state, payload) {
      state.id = payload.id
      state.name = payload.name
      state.photo = payload.photo
      state.phone = payload.phone
      state.amount = payload.amount
      state.notes = payload.notes
      state.date = payload.date
    },
    REMOVE_CONFIRMATION (state) {
      state.id = ''
      state.name = ''
      state.photo = ''
      state.phone = '+62'
      state.amount = 0
      state.notes = ''
      state.date = ''
    }
  },
  getters: {
    getId (state) {
      return state.id
    },
    getName (state) {
      return state.name
    },
    getPhoto (state) {
      return state.photo
    },
    getPhone (state) {
      if (state.phone === '+62') {
        return state.phone
      } else {
        return parsePhoneNumber(state.phone).formatInternational()
      }
    },
    getAmount (state) {
      return state.amount
    },
    getNotes (state) {
      return state.notes
    },
    getDate (state) {
      return state.date
    }
  }
}

export default transfer
