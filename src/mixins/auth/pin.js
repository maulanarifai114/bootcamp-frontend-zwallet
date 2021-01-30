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
    focusInput () {
      this.class = 'input-text-active'
    },
    inputPinOne (e) {
      this.pinBox.pinOne = e
      this.$refs.two.$el.children[0].focus()
    },
    inputPinTwo (e) {
      this.pinBox.pinTwo = e
      this.$refs.three.$el.children[0].focus()
    },
    inputPinThree (e) {
      this.pinBox.pinThree = e
      this.$refs.four.$el.children[0].focus()
    },
    inputPinFour (e) {
      this.pinBox.pinFour = e
      this.$refs.five.$el.children[0].focus()
    },
    inputPinFive (e) {
      this.pinBox.pinFive = e
      this.$refs.six.$el.children[0].focus()
    },
    inputPinSix (e) {
      this.pinBox.pinSix = e
      this.$refs.button.$el.focus()
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
