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
    dateDisplay: ''
  }),
  mutations: {
    SET_STATUS (state, payload) {
      state.id = payload.id
      state.name = payload.name
      state.photo = payload.photo
      state.phone = payload.phone
      state.amount = payload.amount
      state.notes = payload.notes
      state.dateDisplay = payload.dateDisplay
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
    getDateDisplay (state) {
      return state.dateDisplay
    }
  }
}

export default transfer
