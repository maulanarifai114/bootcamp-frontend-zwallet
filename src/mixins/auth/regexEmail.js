export default {
  data () {
    return {
      isEmail: 0
    }
  },
  methods: {
    checkEmail () {
      const regexEmail = /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,24}))$/
      !regexEmail.test(this.email) && !this.email.length < 1 ? this.isEmail = 1 : this.isEmail = 0
    }
  }
}
