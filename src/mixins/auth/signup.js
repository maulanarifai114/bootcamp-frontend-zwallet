import Swal from 'sweetalert2'
// import axios from 'axios'

const signup = {
  data () {
    return {
      message: '',
      username: '',
      email: '',
      password: '',
      type: 'password',
      class: 'input-text-inactive',
      iconUsername: 'person-inactive',
      iconEmail: 'mail-inactive',
      iconPassword: 'lock-inactive'
    }
  },
  methods: {
    focusInput () {
      this.class = 'input-text-active'
      this.iconUsername = 'person-active'
      this.iconEmail = 'mail-active'
      this.iconPassword = 'lock-active'
    },
    inputUsername (e) {
      this.username = e
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
    goPageLogin () {
      this.$router.push('/auth/login')
    },
    signup () {
      Swal.fire('Success', 'Create Your Pin Now!', 'success')
      this.$router.push('/auth/createpin')
    }
  }
}
export default signup
