import Swal from 'sweetalert2'
// import axios from 'axios'

const signup = {
  data () {
    return {
      message: '',
      pin: '',
      pinBox: {
        pinOne: '',
        pinTwo: '',
        pinThree: '',
        pinFour: '',
        pinFive: '',
        pinSix: ''
      },
      type: 'password',
      class: 'input-text-inactive'
    }
  },
  methods: {
    moveOnMax (field, nextFieldID) {
      if (field) {
        document.getElementById(nextFieldID).focus()
      }
    },
    focusInput () {
      this.class = 'input-text-active'
    },
    inputPinOne (e) {
      this.pinBox.pinOne = e
    },
    inputPinTwo (e) {
      this.pinBox.pinTwo = e
    },
    inputPinThree (e) {
      this.pinBox.pinThree = e
    },
    inputPinFour (e) {
      this.pinBox.pinFour = e
    },
    inputPinFive (e) {
      this.pinBox.pinFive = e
    },
    inputPinSix (e) {
      this.pinBox.pinSix = e
    },
    createPin () {
      const pinBox = this.pinBox
      const pin = `${pinBox.pinOne}${pinBox.pinTwo}${pinBox.pinThree}${pinBox.pinFour}${pinBox.pinFive}${pinBox.pinSix}`
      console.log(pinBox)
      console.log(pin)
      // axios.post()
      Swal.fire('Success', 'Let\'s Go Login', 'success')
      this.$router.push('/auth/createpinsuccess')
    }
  }
}
export default signup
