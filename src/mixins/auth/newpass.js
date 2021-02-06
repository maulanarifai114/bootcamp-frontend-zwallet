import Swal from 'sweetalert2'
import axios from 'axios'

const newpass = {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    reset () {
      if (this.password !== this.newpassword) {
        Swal.fire('Failed', 'Passwords Are Not Same!', 'error')
        this.message = 'Passwords Are Not Same!'
      } else if (
        this.isPassword1 === 1 ||
        this.isPassword2 === 1 ||
        this.isPassword3 === 1 ||
        this.isPassword4 === 1 ||
        this.isPassword5 === 1 ||
        this.isPassword6 === 1 ||
        this.isPassword7 === 1 ||
        this.isPassword8 === 1) {
        Swal.fire('Failed', 'Password Does Not Qualify', 'error')
      } else {
        this.isLoading = 1
        const data = {
          password: this.password,
          repeatpassword: this.newpassword,
          id: this.$route.params.id
        }
        axios.patch(`${process.env.VUE_APP_BASE_URL}/user/reset`, data)
          .then(() => {
            this.isLoading = 0
            Swal.fire('Success', 'Let\'s go login', 'success')
            this.message = ''
            localStorage.removeItem('temporaryToken')
            this.$router.push('/auth/login')
          })
          .catch((err) => {
            this.isLoading = 0
            Swal.fire('Failed', err.response.data.err, 'success')
          })
      }
    }
  }
}
export default newpass
