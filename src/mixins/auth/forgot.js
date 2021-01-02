const signup = {
  data () {
    return {
      message: '',
      email: '',
      class: 'input-text-inactive',
      iconEmail: 'mail-inactive'
    }
  },
  methods: {
    focusInput (e) {
      this.class = 'input-text-active'
      this.iconEmail = 'mail-active'
    },
    inputEmail (e) {
      this.email = e
    },
    confirm () {
      alert('Data Terisi')
      this.$router.push('/auth/login')
    }
  }
}
export default signup
