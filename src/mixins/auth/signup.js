import Swal from 'sweetalert2'
import axios from 'axios'

const signup = {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    goPageLogin () {
      this.$router.push('/auth/login')
    },
    signup () {
      if (this.isEmail === 1) {
        Swal.fire('Failed', 'Email Does Not Qualify', 'error')
      } else if (this.isPassword1 === 1 || this.isPassword2 === 1 || this.isPassword3 === 1 || this.isPassword4 === 1) {
        Swal.fire('Failed', 'Password Does Not Qualify', 'error')
      } else {
        const editfirstName = this.firstName
        const editlastName = this.lastName
        const firstName = editfirstName.toLowerCase()[0].toUpperCase() + editfirstName.toLowerCase().slice(1)
        const lastName = editlastName.toLowerCase()[0].toUpperCase() + editlastName.toLowerCase().slice(1)
        const email = this.email
        const password = this.password
        const data = {
          firstName,
          lastName,
          email,
          password
        }
        this.isLoading = 1
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/signup`, data)
          .then(() => {
            this.isLoading = 0
            Swal.fire('Success', 'Check Your Email Now!', 'success')
            this.$router.push('/auth/login')
          })
          .catch((err) => {
            this.isLoading = 0
            Swal.fire('Failed', err.response.data.err, 'error')
          })
      }
    }
  }
}
export default signup
