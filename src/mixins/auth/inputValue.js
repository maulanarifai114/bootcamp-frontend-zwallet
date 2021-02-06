export default {
  data () {
    return {
      firstName: '',
      lastName: '',
      email: '',
      currentpassword: '',
      password: '',
      newpassword: ''
    }
  },
  methods: {
    inputFirstName (e) {
      this.firstName = e
    },
    inputLastName (e) {
      this.lastName = e
    },
    inputEmail (e) {
      this.email = e
      this.checkEmail()
    },
    inputCurrentPassword (e) {
      this.currentpassword = e
      this.checkPassword()
    },
    inputPassword (e) {
      this.password = e
      this.checkPassword()
    },
    inputNewPassword (e) {
      this.newpassword = e
      this.checkPassword()
    }
  }
}
