import Swal from 'sweetalert2'
// import axios from 'axios'

export default {
  data () {
    return {
      message: ''
    }
  },
  methods: {
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
