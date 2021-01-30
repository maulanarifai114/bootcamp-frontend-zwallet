export default {
  data () {
    return {
      isPassword1: 0,
      isPassword2: 0,
      isPassword3: 0,
      isPassword4: 0,
      isPassword5: 0,
      isPassword6: 0,
      isPassword7: 0,
      isPassword8: 0,
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
      !regexLower.test(this.newpassword) && !this.newpassword.length < 1 ? this.isPassword5 = 1 : this.isPassword5 = 0
      !regexUpper.test(this.newpassword) && !this.newpassword.length < 1 ? this.isPassword6 = 1 : this.isPassword6 = 0
      !eightChar.test(this.newpassword) && !this.newpassword.length < 1 ? this.isPassword7 = 1 : this.isPassword7 = 0
      !number.test(this.newpassword) && !this.newpassword.length < 1 ? this.isPassword8 = 1 : this.isPassword8 = 0
    }
  }
}
