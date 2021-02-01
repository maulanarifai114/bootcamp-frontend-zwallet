import parsePhoneNumber from 'libphonenumber-js'

const profile = {
  namespaced: true,
  state: () => ({
    photo: '',
    username: '',
    firstName: '',
    lastName: '',
    balance: 0,
    phone: '+62'
    // photo: 'https://images.unsplash.com/photo-1609863554781-35c7867dedb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
    // firstName: 'Emanuel',
    // lastName: 'Minca',
    // balance: 100000,
    // phone: '+6285771926851'
  }),
  mutations: {
    SET_PROFILE (state, payload) {
      // return {
      //   ...state,
      //   ...payload
      // }
      // console.log(state)
      // console.log(payload)
      state.photo = payload.photo
      state.username = payload.username
      state.firstName = payload.firstName
      state.lastName = payload.lastName
      state.balance = payload.balance
      state.phone = payload.phone
    }
  },
  actions: {
    getProfile (context) {
      setTimeout(() => {
        const payload = {
          photo: 'https://images.unsplash.com/photo-1609863554781-35c7867dedb7?ixid=MXwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=750&q=80',
          username: 'maulanarifai114',
          firstName: '',
          lastName: 'Maulana',
          balance: 20000000,
          phone: '+6284337927659'
        }
        context.commit('SET_PROFILE', payload)
      }, 2000)
    }
  },
  getters: {
    getPhoto (state) {
      return state.photo
    },
    getUsername (state) {
      return state.username
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
