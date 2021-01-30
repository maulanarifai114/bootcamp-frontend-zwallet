import Swal from 'sweetalert2'
// import axios from 'axios'

const newpass = {
  data () {
    return {
      message: ''
    }
  },
  methods: {
    reset () {
      if (this.password !== this.newpassword) {
        const password = this.password
        console.log(password)
        Swal.fire('Failed', 'Passwords Are Not Same!', 'error')
        this.message = 'Passwords Are Not Same!'
      } else {
        Swal.fire('Success', 'Let\'s go login', 'success')
        this.message = ''
        this.$router.push('/auth/login')
      }
    }
  }
}
export default newpass
