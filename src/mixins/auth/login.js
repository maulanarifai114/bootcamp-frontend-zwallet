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
      iconPassword: 'lock-inactive',
      iconEye: 'eye-cross-inactive'
    }
  },
  methods: {
    focusInput () {
      this.class = 'input-text-active'
      this.iconEmail = 'mail-active'
      this.iconPassword = 'lock-active'
      if (this.type === 'password') {
        this.iconEye = 'eye-cross-active'
      } else if (this.type === 'text') {
        this.iconEye = 'eye-active'
      }
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
        if (this.class === 'input-text-inactive') {
          this.iconEye = 'eye-inactive'
        } else if (this.class === 'input-text-active') {
          this.iconEye = 'eye-active'
        } else if (this.class === 'input-text-error') {
          this.iconEye = 'eye-error'
        }
      } else {
        this.type = 'password'
        if (this.class === 'input-text-inactive') {
          this.iconEye = 'eye-cross-inactive'
        } else if (this.class === 'input-text-active') {
          this.iconEye = 'eye-cross-active'
        } else if (this.class === 'input-text-error') {
          this.iconEye = 'eye-cross-error'
        }
      }
    },
    goPageForgot () {
      this.$router.push('/auth/forgot')
    },
    goPageSignup () {
      this.$router.push('/auth/signup')
    },
    login () {
      const email = this.email
      const password = this.password
      const data = {
        email,
        password
      }
      console.log(data)
      Swal.fire('Success', 'Let\'s Fill Your Wallet', 'success')
      this.$router.push('/main/dashboard')
    }
  }
}
export default login
