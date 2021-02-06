import Swal from 'sweetalert2'
import axios from 'axios'

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
      displayNext: 0,
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
      this.displayNext === 0
        ? this.$refs.button.$el.focus()
        : this.$refs.button2.$el.focus()
    },
    createPin () {
      const regex = /^[0-9]+$/
      const pinBox = this.pinBox
      const pin = `${pinBox.pinOne}${pinBox.pinTwo}${pinBox.pinThree}${pinBox.pinFour}${pinBox.pinFive}${pinBox.pinSix}`
      const data = {
        id: this.$route.params.id,
        pin
      }
      const failed = () => {
        Swal.fire('Failed', 'Pin must be number', 'error')
        this.pinBox = {
          pinOne: '',
          pinTwo: '',
          pinThree: '',
          pinFour: '',
          pinFive: '',
          pinSix: ''
        }
        this.$refs.one.$el.children[0].value = ''
        this.$refs.two.$el.children[0].value = ''
        this.$refs.three.$el.children[0].value = ''
        this.$refs.four.$el.children[0].value = ''
        this.$refs.five.$el.children[0].value = ''
        this.$refs.six.$el.children[0].value = ''
      }
      const success = () => {
        this.isLoading = 1
        axios.patch(`${process.env.VUE_APP_BASE_URL}/user/pin`, data)
          .then(() => {
            this.isLoading = 0
            Swal.fire('Success', 'Let\'s Go Login', 'success')
            localStorage.removeItem('temporaryToken')
            this.$router.push('/auth/createpinsuccess')
          })
          .catch((err) => {
            this.isLoading = 0
            Swal.fire('Failed', err.response.data.err, 'error')
          })
      }
      !regex.test(pin) ? failed() : success()
    },
    changePin () {
      const regex = /^[0-9]+$/
      const pinBox = this.pinBox
      const pin = `${pinBox.pinOne}${pinBox.pinTwo}${pinBox.pinThree}${pinBox.pinFour}${pinBox.pinFive}${pinBox.pinSix}`
      const failed = () => {
        Swal.fire('Failed', 'Pin must be number', 'error')
        this.pinBox = {
          pinOne: '',
          pinTwo: '',
          pinThree: '',
          pinFour: '',
          pinFive: '',
          pinSix: ''
        }
        this.$refs.one.$el.children[0].value = ''
        this.$refs.two.$el.children[0].value = ''
        this.$refs.three.$el.children[0].value = ''
        this.$refs.four.$el.children[0].value = ''
        this.$refs.five.$el.children[0].value = ''
        this.$refs.six.$el.children[0].value = ''
      }
      const success = () => {
        Swal.fire('Success', 'You have been change your pin', 'success')
        axios.patch(`${process.env.VUE_APP_BASE_URL}/user/pin`)
        this.$router.push('/main/profile')
      }
      !regex.test(pin) ? failed() : success()
    },
    checkPin () {
      const regex = /^[0-9]+$/
      const pinBox = this.pinBox
      const pin = `${pinBox.pinOne}${pinBox.pinTwo}${pinBox.pinThree}${pinBox.pinFour}${pinBox.pinFive}${pinBox.pinSix}`
      const failed = () => {
        Swal.fire('Failed', 'Pin must be number', 'error')
        this.pinBox = {
          pinOne: '',
          pinTwo: '',
          pinThree: '',
          pinFour: '',
          pinFive: '',
          pinSix: ''
        }
        this.$refs.one.$el.children[0].value = ''
        this.$refs.two.$el.children[0].value = ''
        this.$refs.three.$el.children[0].value = ''
        this.$refs.four.$el.children[0].value = ''
        this.$refs.five.$el.children[0].value = ''
        this.$refs.six.$el.children[0].value = ''
      }
      const success = () => {
        Swal.fire('Now replace your pin with a new one', '', 'success')
        this.displayNext = 1
        this.$refs.one.$el.children[0].value = ''
        this.$refs.two.$el.children[0].value = ''
        this.$refs.three.$el.children[0].value = ''
        this.$refs.four.$el.children[0].value = ''
        this.$refs.five.$el.children[0].value = ''
        this.$refs.six.$el.children[0].value = ''
      }
      !regex.test(pin) ? failed() : success()
    }
  }
}
export default signup
