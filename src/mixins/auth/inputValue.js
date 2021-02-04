export default {
  data () {
    return {
      username: '',
      email: '',
      currentpassword: '',
      password: '',
      newpassword: ''
    }
  },
  methods: {
    inputUsername (e) {
      this.username = e
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
