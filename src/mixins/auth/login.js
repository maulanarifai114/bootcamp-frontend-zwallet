import Swal from 'sweetalert2'
import axios from 'axios'

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
      if (this.isEmail === 1) {
        Swal.fire('Failed', 'Email Does Not Qualify', 'error')
      } else if (this.isPassword1 === 1 || this.isPassword2 === 1 || this.isPassword3 === 1 || this.isPassword4 === 1) {
        Swal.fire('Failed', 'Password Does Not Qualify', 'error')
      } else {
        this.isLoading = 1
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/login`, data)
          .then(() => {
            this.isLoading = 0
            Swal.fire('Success', 'Let\'s Fill Your Wallet', 'success')
            this.$router.push('/main/dashboard')
          })
          .catch((err) => {
            this.isLoading = 0
            Swal.fire('Failed', err.response.data.err, 'error')
          })
      }
    }
  }
}
