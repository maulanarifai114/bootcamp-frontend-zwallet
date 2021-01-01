const navbar = {
  data () {
    return {
      local: process.env.VUE_APP_BASE_APP
    }
  },
  methods: {
    goLogin () {
      this.$router.push('/auth/login')
    },
    goSignup () {
      this.$router.push('/auth/signup')
    }
  }
}
export default navbar
