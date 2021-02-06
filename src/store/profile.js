import parsePhoneNumber from 'libphonenumber-js'
import axios from 'axios'

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
    SET_PHONE (state, payload) {
      state.phone = payload
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
      axios.get(`${process.env.VUE_APP_BASE_URL}/user?id=${localStorage.getItem('id')}`)
        .then((res) => {
          const result = res.data.result
          const payload = {
            id: result.id,
            photo: result.photo,
            firstName: result.firstName,
            lastName: result.lastName,
            balance: result.balance,
            phone: result.phone,
            email: result.email
          }
          context.commit('SET_PROFILE', payload)
        })
        .catch((err) => {
          console.log(err)
        })
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
    },
    getEmail (state) {
      return state.email
    }
  }
}

export default profile
