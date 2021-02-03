import parsePhoneNumber from 'libphonenumber-js'

const profile = {
  namespaced: true,
  state: () => ({
    id: '',
    photo: '',
    firstName: '',
    lastName: '',
    balance: 0,
    phone: '+62',
    email: ''
  }),
  mutations: {
    SET_PROFILE (state, payload) {
      state.id = payload.id
      state.photo = payload.photo
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.balance = payload.balance
      state.phone = payload.phone
      state.email = payload.email
    },
    SET_BALANCE (state, payload) {
      state.balance -= payload
    },
    SET_PHOTO (state, payload) {
      state.photo = payload
    },
    REMOVE_PROFILE (state) {
      state.id = ''
      state.photo = ''
      state.firstName = ''
      state.lastName = ''
      state.balance = 0
      state.phone = '+62'
      state.email = ''
    }
  },
  actions: {
    getProfile (context) {
      setTimeout(() => {
        const payload = {
          id: '1',
          photo: 'https://images.unsplash.com/photo-1609863554781-35c7867dedb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          firstName: 'Elly',
          lastName: 'Hoe',
          balance: 20000000,
          phone: '+6284337927659',
          email: 'ellyhoe30@gmal.com'
        }
        context.commit('SET_PROFILE', payload)
      }, 2000)
    }
  },
  getters: {
    getId (state) {
      return state.id
    },
    getPhoto (state) {
      return state.photo
    },
    getFirstName (state) {
      return state.firstName
    },
    getLastName (state) {
      return state.lastName
    },
    getBalance (state) {
      return state.balance
    },
    getPhone (state) {
      if (state.phone === '+62') {
        return state.phone
      } else {
        const phoneNumber = parsePhoneNumber(state.phone)
        return phoneNumber.formatInternational()
      }
    }
  }
}

export default profile
