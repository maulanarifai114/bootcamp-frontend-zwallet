import Swal from 'sweetalert2'
// import axios from 'axios'

const login = {
  data () {
    return {
      message: '',
      email: '',
      password: '',
      type: 'password',
      class: 'input-text-inactive',
      iconEmail: 'mail-inactive',
      iconPassword: 'lock-inactive'
    }
  },
  methods: {
    focusInput () {
      this.class = 'input-text-active'
      this.iconEmail = 'mail-active'
      this.iconPassword = 'lock-active'
    },
    inputEmail (e) {
      this.email = e
    },
    inputPassword (e) {
      this.password = e
    },
    changeType () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    goPageForgot () {
      this.$router.push('/auth/forgot')
    },
    goPageSignup () {
      this.$router.push('/auth/signup')
    },
    login () {
      Swal.fire('Success', 'Let\'s Fill Your Wallet', 'success')
      this.$router.push('/main/dashboard')
    }
  }
}
export default login
