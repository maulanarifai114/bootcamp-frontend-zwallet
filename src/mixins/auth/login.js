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
      iconEye: 'eye-cross-inactive',
      isEmail: 0,
      isPassword1: 0,
      isPassword2: 0,
      isPassword3: 0,
      isPassword4: 0,
      validatePassword1: 'One lowercase letter required',
      validatePassword2: 'One uppercase letter required',
      validatePassword3: '8 characters minimum',
      validatePassword4: 'One number required'
    }
  },
  methods: {
    checkEmail () {
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      !regexEmail.test(this.email) && !this.email.length < 1 ? this.isEmail = 1 : this.isEmail = 0
    },
    checkPassword () {
      const regexLower = /[a-z]+/
      const regexUpper = /[A-Z]+/
      const eightChar = /.{8,}/
      const number = /[0-9]+/
      !regexLower.test(this.password) && !this.password.length < 1 ? this.isPassword1 = 1 : this.isPassword1 = 0
      !regexUpper.test(this.password) && !this.password.length < 1 ? this.isPassword2 = 1 : this.isPassword2 = 0
      !eightChar.test(this.password) && !this.password.length < 1 ? this.isPassword3 = 1 : this.isPassword3 = 0
      !number.test(this.password) && !this.password.length < 1 ? this.isPassword4 = 1 : this.isPassword4 = 0
    },
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
      this.checkEmail()
    },
    inputPassword (e) {
      this.password = e
      this.checkPassword()
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
