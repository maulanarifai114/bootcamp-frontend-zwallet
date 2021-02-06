import Swal from 'sweetalert2'
import axios from 'axios'

const forgot = {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    confirm () {
      if (this.isEmail === 1) {
        Swal.fire('Failed', 'Email Does Not Qualify', 'error')
      } else {
        this.isLoading = 1
        axios.post(`${process.env.VUE_APP_BASE_URL}/auth/forgot`, { email: this.email })
          .then((res) => {
            this.isLoading = 0
            Swal.fire('Success', res.data.result, 'success')
            this.$router.push('/auth/login')
          })
          .catch((err) => {
            this.isLoading = 0
            Swal.fire('Failed', err.response.data.err, 'error')
          })
      }
    },
    goPageLogin () {
      this.$router.push('/auth/login')
    }
  }
}
export default forgot
