export default {
  data () {
    return {
      password: '',
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
    checkPassword () {
      const regexLower = /[a-z]+/
      const regexUpper = /[A-Z]+/
      const eightChar = /.{8,}/
      const number = /[0-9]+/
      !regexLower.test(this.password) && !this.password.length < 1 ? this.isPassword1 = 1 : this.isPassword1 = 0
      !regexUpper.test(this.password) && !this.password.length < 1 ? this.isPassword2 = 1 : this.isPassword2 = 0
      !eightChar.test(this.password) && !this.password.length < 1 ? this.isPassword3 = 1 : this.isPassword3 = 0
      !number.test(this.password) && !this.password.length < 1 ? this.isPassword4 = 1 : this.isPassword4 = 0
    }
  }
}
