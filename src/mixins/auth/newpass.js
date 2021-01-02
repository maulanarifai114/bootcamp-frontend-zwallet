import Swal from 'sweetalert2'
// import axios from 'axios'

const newpass = {
  data () {
    return {
      message: '',
      password: '',
      newpassword: '',
      type: 'password',
      class: 'input-text-inactive',
      iconPassword: 'lock-inactive'
    }
  },
  methods: {
    focusInput () {
      this.class = 'input-text-active'
      this.iconPassword = 'lock-active'
    },
    inputPassword (e) {
      this.password = e
    },
    inputNewPassword (e) {
      this.newpassword = e
    },
    changeType () {
      if (this.type === 'password') {
        this.type = 'text'
      } else {
        this.type = 'password'
      }
    },
    reset () {
      if (this.password !== this.newpassword) {
        Swal.fire('Failed', 'Passwords Are Not The Same!', 'error')
      } else {
        Swal.fire('Success', 'Let\'s go login', 'success')
        this.$router.push('/auth/login')
      }
    }
  }
}
export default newpass
