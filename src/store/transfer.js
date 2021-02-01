import parsePhoneNumber from 'libphonenumber-js'

const transfer = {
  namespaced: true,
  state: () => ({
    id: '',
    name: '',
    photo: '',
    phone: '+62'
  }),
  mutations: {
    SET_RECEIVER (state, payload) {
      state.id = payload.id
      state.name = payload.name
      state.photo = payload.photo
      state.phone = payload.phone
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
    }
  }
}

export default transfer
