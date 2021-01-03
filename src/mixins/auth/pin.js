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
    // resetPin () {
    //   this.pinBox.pinOne = ''
    //   this.pinBox.pinTwo = ''
    //   this.pinBox.pinThree = ''
    //   this.pinBox.pinFour = ''
    //   this.pinBox.pinFive = ''
    //   this.pinBox.pinSix = ''
    //   let pinOne = document.getElementById('pinOne').value
    //   let pinTwo = document.getElementById('pinTwo').value
    //   let pinThree = document.getElementById('pinThree').value
    //   let pinFour = document.getElementById('pinFour').value
    //   let pinFive = document.getElementById('pinFive').value
    //   let pinSix = document.getElementById('pinSix').value
    //   pinOne = ''
    //   pinTwo = ''
    //   pinThree = ''
    //   pinFour = ''
    //   pinFive = ''
    //   pinSix = ''
    //   console.log(pinOne)
    //   console.log(pinTwo)
    //   console.log(pinThree)
    //   console.log(pinFour)
    //   console.log(pinFive)
    //   console.log(pinSix)
    // },

  }
}
export default signup
